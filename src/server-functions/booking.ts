import { createServerFn } from "@tanstack/react-start";
import twilio from "twilio";
import { z } from "zod";

const bookingSchema = z.object({
  name: z.string().trim().min(1, "Name is required"),
  phone: z.string().trim().min(7, "A valid phone number is required"),
  service: z.string().trim().min(1, "Service is required"),
  message: z.string().trim().min(1, "Please describe the issue"),
});

/**
 * Validates a booking submission and sends it to the business owner's
 * WhatsApp using Twilio's WhatsApp Business API.
 *
 * Setup required before this works:
 * 1. Create a free Twilio account at twilio.com and activate the
 *    "Twilio Sandbox for WhatsApp" (Console -> Messaging -> Try it out ->
 *    Send a WhatsApp message). This gives you a sandbox number + join code
 *    for testing, no business verification needed.
 * 2. From your own WhatsApp, send "join <your-code>" to the sandbox number.
 *    That's your one-time opt-in for testing.
 * 3. Set these environment variables (locally in .env, and in Vercel's
 *    Project Settings -> Environment Variables for production):
 *      TWILIO_ACCOUNT_SID   - from the Twilio Console
 *      TWILIO_AUTH_TOKEN    - from the Twilio Console
 *      TWILIO_WHATSAPP_FROM - the sandbox number, e.g. whatsapp:+14155238886
 *      OWNER_WHATSAPP_TO    - the owner's number, e.g. whatsapp:+919876543210
 *
 * Note on scaling to a real client: the sandbox only delivers free-form
 * messages within 24 hours of the owner's last "join" message to it. For a
 * real production deployment, the client registers their own WhatsApp
 * sender with Twilio (requires Meta business verification) and you submit
 * one message template (e.g. "New lead: {{1}}, {{2}}, {{3}}") for approval.
 * Once approved, notifications send anytime with no 24-hour window
 * limitation, and this same code keeps working — only the from/to numbers
 * and credentials change.
 */
export const submitBooking = createServerFn({ method: "POST" })
  .validator((input: unknown) => bookingSchema.parse(input))
  .handler(async ({ data }) => {
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const from = process.env.TWILIO_WHATSAPP_FROM;
    const to = process.env.OWNER_WHATSAPP_TO;

    if (!accountSid || !authToken || !from || !to) {
      console.error(
        "[submitBooking] Missing one of TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, " +
          "TWILIO_WHATSAPP_FROM, OWNER_WHATSAPP_TO env vars.",
      );
      throw new Error(
        "Booking notifications aren't configured yet. Please call us directly.",
      );
    }

    const client = twilio(accountSid, authToken);

    const body =
      `New booking request\n` +
      `Name: ${data.name}\n` +
      `Phone: ${data.phone}\n` +
      `Service: ${data.service}\n` +
      `Details: ${data.message}`;

    try {
      await client.messages.create({ from, to, body });
    } catch (err) {
      console.error("[submitBooking] Twilio send failed:", err);
      throw new Error(
        "Could not deliver the notification. Please call us directly.",
      );
    }

    return { success: true as const };
  });
