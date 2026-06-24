import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const bookingSchema = z.object({
  name: z.string().trim().min(1, "Name is required"),
  phone: z.string().trim().min(7, "A valid phone number is required"),
  service: z.string().trim().min(1, "Service is required"),
  message: z.string().trim().min(1, "Please describe the issue"),
});

/**
 * Validates a booking submission and forwards it to the business owner's
 * WhatsApp using CallMeBot (https://www.callmebot.com).
 *
 * Setup required before this works:
 * 1. The owner adds the CallMeBot contact number on WhatsApp and sends
 *    "I allow callmebot to send me messages" to it.
 * 2. CallMeBot replies with an API key.
 * 3. Set CALLMEBOT_PHONE (owner's number, e.g. +17065550123) and
 *    CALLMEBOT_APIKEY as environment variables (locally in .env, and in
 *    the Vercel project's Environment Variables settings for production).
 */
export const submitBooking = createServerFn({ method: "POST" })
  .validator((input: unknown) => bookingSchema.parse(input))
  .handler(async ({ data }) => {
    const phone = process.env.CALLMEBOT_PHONE;
    const apikey = process.env.CALLMEBOT_APIKEY;

    if (!phone || !apikey) {
      console.error(
        "[submitBooking] Missing CALLMEBOT_PHONE or CALLMEBOT_APIKEY env vars.",
      );
      throw new Error(
        "Booking notifications aren't configured yet. Please call us directly.",
      );
    }

    const text =
      `New booking request\n` +
      `Name: ${data.name}\n` +
      `Phone: ${data.phone}\n` +
      `Service: ${data.service}\n` +
      `Details: ${data.message}`;

    const url =
      `https://api.callmebot.com/whatsapp.php` +
      `?phone=${encodeURIComponent(phone)}` +
      `&text=${encodeURIComponent(text)}` +
      `&apikey=${encodeURIComponent(apikey)}`;

    const response = await fetch(url);
    const body = await response.text();

    // CallMeBot often replies 200 OK with an error message in the body,
    // so the response text has to be checked too, not just response.ok.
    if (!response.ok || /error/i.test(body)) {
      console.error("[submitBooking] CallMeBot notification failed:", body);
      throw new Error(
        "Could not deliver the notification. Please call us directly.",
      );
    }

    return { success: true as const };
  });
