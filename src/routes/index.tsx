import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { InlineWidget } from "react-calendly";
import {
  Phone, Wrench, Droplets, Flame, Search, PipetteIcon, Waves, Bath, ShowerHead,
  ShieldCheck, Clock, BadgeCheck, DollarSign, ThumbsUp, Users, Cpu, MapPin,
  Star, MessageCircle, ChevronDown, AlertTriangle, CheckCircle2, Menu, X,
  Calendar, PhoneCall, Truck, Facebook, Instagram, Twitter,
} from "lucide-react";
import heroImg from "@/assets/hero-plumber.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TrueLine Plumbing | 24/7 Emergency Plumbers in Dallas, TX" },
      { name: "description", content: "Dallas's trusted 24/7 emergency plumbers. Licensed, insured, same-day service. Book instantly via WhatsApp." },
      { property: "og:title", content: "TrueLine Plumbing — Dallas 24/7 Emergency Plumbers" },
      { property: "og:description", content: "Fast response. Upfront pricing. Satisfaction guaranteed." },
    ],
  }),
  component: Index,
});

const WA_NUMBER = "7506295070";
const PHONE_DISPLAY = "(750) 629-5070";
const PHONE_HREF = "tel:+17506295070";

const services = [
  { icon: AlertTriangle, name: "Emergency Plumbing", desc: "Immediate help for burst pipes, flooding, and urgent plumbing issues." },
  { icon: Waves, name: "Drain Cleaning", desc: "Fast removal of clogged drains and stubborn blockages." },
  { icon: Flame, name: "Water Heater Repair & Installation", desc: "Repair and replacement of traditional and tankless water heaters." },
  { icon: Search, name: "Leak Detection", desc: "Find hidden leaks before they cause expensive damage." },
  { icon: PipetteIcon, name: "Pipe Repair & Replacement", desc: "Reliable pipe repairs and complete repiping solutions." },
  { icon: Droplets, name: "Sewer Line Services", desc: "Inspection, repair, and replacement of sewer lines." },
  { icon: Bath, name: "Toilet Repair & Installation", desc: "Fix running toilets, leaks, and brand-new installations." },
  { icon: ShowerHead, name: "Faucet & Fixture Installation", desc: "Upgrade kitchens, bathrooms, and plumbing fixtures." },
];

const whyUs = [
  { icon: Clock, t: "24/7 Emergency Response", d: "Day or night, we answer the call." },
  { icon: ShieldCheck, t: "Licensed & Insured", d: "Fully credentialed Texas technicians." },
  { icon: Truck, t: "Same-Day Service", d: "Most jobs handled on the first visit." },
  { icon: DollarSign, t: "Transparent Pricing", d: "Upfront quotes — no surprises." },
  { icon: BadgeCheck, t: "Satisfaction Guarantee", d: "We stand behind every repair." },
  { icon: ThumbsUp, t: "Hundreds of Happy Customers", d: "5-star rated across Dallas." },
  { icon: Cpu, t: "Modern Equipment", d: "Camera inspections, hydro-jetting & more." },
  { icon: Users, t: "Friendly Local Experts", d: "Dallas-born, Dallas-trained team." },
];

const testimonials = [
  { name: "Sarah M.", city: "Dallas", initials: "SM", quote: "Our water heater failed late at night and TrueLine arrived quickly. Excellent service and fair pricing." },
  { name: "James R.", city: "Dallas", initials: "JR", quote: "We had a major leak in our kitchen. The technician fixed it the same day and explained everything clearly." },
  { name: "Lisa T.", city: "Dallas", initials: "LT", quote: "Very professional team. Scheduling was easy and the repair was completed perfectly." },
];

const areas = ["Dallas", "Plano", "Irving", "Garland", "Richardson", "Mesquite", "Carrollton", "Farmers Branch"];

const serviceOptions = [
  "Emergency Plumbing", "Drain Cleaning", "Water Heater Repair", "Water Heater Installation",
  "Leak Detection", "Pipe Repair", "Pipe Replacement", "Sewer Line Service",
  "Toilet Repair", "Toilet Installation", "Faucet Repair", "Faucet Installation",
  "Commercial Plumbing", "General Plumbing Inspection",
];

const faqs = [
  { q: "Do you offer 24/7 emergency plumbing?", a: "Yes — our emergency line is open 24 hours a day, 7 days a week, including holidays." },
  { q: "How quickly can a plumber arrive?", a: "Most Dallas-area emergency calls receive a technician on-site within 60 minutes." },
  { q: "Do you provide upfront pricing?", a: "Always. You'll receive a clear, written quote before any work begins." },
  { q: "Are your plumbers licensed and insured?", a: "Every technician is fully licensed in Texas, background-checked, and insured." },
  { q: "Do you serve all Dallas neighborhoods?", a: "We cover Dallas and the surrounding metro including Plano, Irving, Garland, Richardson and more." },
  { q: "Can I book through WhatsApp?", a: "Absolutely — tap any booking button to send your details straight to our dispatch team on WhatsApp." },
];

function buildWaUrl(text: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
}

function quickBookUrl(service?: string) {
  const msg = `Hi, I would like to book a plumbing appointment.${service ? `\n\nService Needed: ${service}` : ""}\n\nPlease contact me regarding my appointment.`;
  return buildWaUrl(msg);
}

function Index() {
  const [navOpen, setNavOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top emergency strip */}
      <div className="gradient-navy text-navy-foreground text-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2">
          <div className="flex items-center gap-2 font-medium">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cta opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cta" />
            </span>
            <span className="hidden sm:inline">24/7 Emergency Plumbing — Dallas, TX</span>
            <span className="sm:hidden">24/7 Emergency Service</span>
          </div>
          <a href={PHONE_HREF} className="flex items-center gap-2 font-semibold hover:text-cta transition">
            <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
          </a>
        </div>
      </div>

      {/* Sticky Nav */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <a href="#top" className="flex items-center gap-2">
            <div className="grid h-10 w-10 place-items-center rounded-lg gradient-navy">
              <Droplets className="h-5 w-5 text-white" />
            </div>
            <div className="leading-tight">
              <div className="font-display text-lg font-extrabold text-navy">TrueLine</div>
              <div className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Plumbing · Dallas</div>
            </div>
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {[["Services","#services"],["Why Us","#why"],["Reviews","#reviews"],["Areas","#areas"],["FAQ","#faq"]].map(([l,h]) => (
              <a key={h} href={h} className="text-sm font-medium text-foreground/80 hover:text-brand transition">{l}</a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a href={PHONE_HREF} className="hidden items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm font-semibold text-navy hover:bg-secondary transition sm:flex">
              <PhoneCall className="h-4 w-4" /> {PHONE_DISPLAY}
            </a>
            <a href="#book" className="hidden rounded-lg gradient-cta px-4 py-2 text-sm font-bold text-cta-foreground shadow-cta hover:opacity-95 md:inline-block">
              Book Appointment
            </a>
            <button className="md:hidden" onClick={() => setNavOpen(!navOpen)} aria-label="Menu">
              {navOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {navOpen && (
          <div className="border-t border-border bg-background md:hidden">
            <div className="flex flex-col p-4 gap-3">
              {[["Services","#services"],["Why Us","#why"],["Reviews","#reviews"],["Areas","#areas"],["FAQ","#faq"],["Book","#book"]].map(([l,h]) => (
                <a key={h} href={h} onClick={() => setNavOpen(false)} className="py-2 font-medium text-foreground/80">{l}</a>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden gradient-hero text-white">
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_20%_20%,white_1px,transparent_1px)] [background-size:32px_32px]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 lg:grid-cols-2 lg:py-24">
          <div className="animate-float-up">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-cta pulse-emergency" />
              Available 24/7 · Dallas, TX
            </div>
            <h1 className="font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
              24/7 Emergency <span className="text-cta">Plumbing Services</span> in Dallas, TX
            </h1>
            <p className="mt-5 max-w-xl text-lg text-white/80">
              Fast response times. Licensed professionals. Same-day repairs. Trusted by Dallas homeowners.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#book" className="inline-flex items-center gap-2 rounded-xl gradient-cta px-6 py-4 text-base font-bold text-cta-foreground shadow-cta hover:translate-y-[-1px] transition">
                <Calendar className="h-5 w-5" /> Book Appointment
              </a>
              <a href={quickBookUrl("Emergency Plumbing")} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border-2 border-white/30 bg-white/10 px-6 py-4 text-base font-bold text-white backdrop-blur hover:bg-white/20 transition">
                <AlertTriangle className="h-5 w-5" /> Get Emergency Help Now
              </a>
            </div>

            <ul className="mt-8 grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-white/90 sm:grid-cols-3">
              {["Licensed & Insured","Same-Day Service","24/7 Emergency","Upfront Pricing","Satisfaction Guaranteed"].map(b => (
                <li key={b} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cta" />{b}</li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-elegant ring-1 ring-white/10">
              <img src={heroImg} alt="TrueLine Plumbing technician with service van in Dallas" width={1280} height={1280} className="h-full w-full object-cover" />
            </div>
            {/* Floating badge */}
            <div className="absolute -left-4 top-6 rounded-xl bg-white px-4 py-3 shadow-elegant sm:-left-6">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-destructive/10 text-destructive pulse-emergency">
                  <AlertTriangle className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-destructive">Emergency</div>
                  <div className="text-sm font-bold text-navy">Available 24/7</div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 right-4 rounded-xl bg-white px-4 py-3 shadow-elegant sm:right-8">
              <div className="flex items-center gap-3">
                <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-cta text-cta" />)}</div>
                <div className="text-sm font-semibold text-navy">500+ Dallas Reviews</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-y border-border bg-secondary/50">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-6 text-center sm:grid-cols-4">
          {[
            { n: "20+", l: "Years Experience" },
            { n: "30min", l: "Avg Response" },
            { n: "5,000+", l: "Jobs Completed" },
            { n: "4.9★", l: "Customer Rating" },
          ].map(s => (
            <div key={s.l}>
              <div className="font-display text-2xl font-extrabold text-navy sm:text-3xl">{s.n}</div>
              <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="mx-auto max-w-7xl px-4 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-3 inline-block rounded-full bg-brand/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand">Our Services</div>
          <h2 className="font-display text-3xl font-extrabold text-navy sm:text-4xl">Full-Service Dallas Plumbing</h2>
          <p className="mt-3 text-muted-foreground">From midnight emergencies to planned upgrades — we handle it all.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.name} className="group relative flex flex-col rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:shadow-elegant">
                <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl gradient-navy text-white transition group-hover:scale-110">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-bold text-navy">{s.name}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{s.desc}</p>
                <div className="mt-5 flex items-center justify-between gap-2">
                  <a href="#book" className="text-sm font-semibold text-brand hover:underline">Learn More →</a>
                  <a href={quickBookUrl(s.name)} target="_blank" rel="noreferrer" className="rounded-lg gradient-cta px-3 py-1.5 text-xs font-bold text-cta-foreground shadow-cta">Book</a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* WHY US */}
      <section id="why" className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-3 inline-block rounded-full bg-brand/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand">Why TrueLine</div>
            <h2 className="font-display text-3xl font-extrabold text-navy sm:text-4xl">Why Dallas Chooses Us</h2>
            <p className="mt-3 text-muted-foreground">A premium experience from the first call to the final handshake.</p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map(w => {
              const Icon = w.icon;
              return (
                <div key={w.t} className="rounded-2xl border border-border bg-card p-6 transition hover:shadow-elegant">
                  <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="font-display font-bold text-navy">{w.t}</div>
                  <p className="mt-1 text-sm text-muted-foreground">{w.d}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-3 inline-block rounded-full bg-brand/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand">How It Works</div>
          <h2 className="font-display text-3xl font-extrabold text-navy sm:text-4xl">Help In Three Simple Steps</h2>
        </div>
        <div className="relative mt-14 grid gap-8 md:grid-cols-3">
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent md:block" />
          {[
            { icon: Calendar, t: "Book Appointment", d: "Send your details via WhatsApp or the form in seconds." },
            { icon: PhoneCall, t: "Speak With a Specialist", d: "A licensed plumber confirms your appointment and ETA." },
            { icon: Wrench, t: "Get Fast Professional Service", d: "Same-day fix with upfront pricing and satisfaction guarantee." },
          ].map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={s.t} className="relative rounded-2xl border border-border bg-card p-7 text-center shadow-sm">
                <div className="relative mx-auto mb-4 grid h-16 w-16 place-items-center rounded-full gradient-cta text-cta-foreground shadow-cta">
                  <Icon className="h-7 w-7" />
                  <span className="absolute -right-2 -top-2 grid h-7 w-7 place-items-center rounded-full border-2 border-background bg-navy text-xs font-bold text-white">{i+1}</span>
                </div>
                <h3 className="font-display text-lg font-bold text-navy">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="reviews" className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-3 inline-block rounded-full bg-brand/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand">Reviews</div>
            <h2 className="font-display text-3xl font-extrabold text-navy sm:text-4xl">What Dallas Says About Us</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map(t => (
              <div key={t.name} className="flex flex-col rounded-2xl border border-border bg-card p-7 shadow-sm">
                <div className="flex gap-1">{[...Array(5)].map((_,i) => <Star key={i} className="h-5 w-5 fill-cta text-cta" />)}</div>
                <p className="mt-4 flex-1 text-foreground/90">"{t.quote}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-full gradient-navy font-bold text-white">{t.initials}</div>
                  <div>
                    <div className="font-semibold text-navy">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.city}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section id="areas" className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mb-3 inline-block rounded-full bg-brand/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand">Service Area</div>
            <h2 className="font-display text-3xl font-extrabold text-navy sm:text-4xl">Proudly Serving the Dallas Metro</h2>
            <p className="mt-3 text-muted-foreground">If you're in the DFW area, we can be at your door fast. Not on the list? Call us — chances are we cover you too.</p>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {areas.map(a => (
                <div key={a} className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-sm font-semibold text-navy">
                  <MapPin className="h-4 w-4 text-brand" /> {a}
                </div>
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-border bg-secondary/60 p-2 shadow-elegant">
            <div className="relative h-80 w-full overflow-hidden rounded-xl gradient-navy">
              <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] [background-size:40px_40px]" />
              {[
                {x:"30%",y:"45%"},{x:"55%",y:"30%"},{x:"70%",y:"50%"},{x:"40%",y:"65%"},
                {x:"60%",y:"70%"},{x:"25%",y:"25%"},{x:"75%",y:"25%"},{x:"50%",y:"55%"},
              ].map((p,i) => (
                <div key={i} className="absolute -translate-x-1/2 -translate-y-1/2" style={{left:p.x, top:p.y}}>
                  <div className="grid h-8 w-8 place-items-center rounded-full bg-cta text-cta-foreground shadow-cta pulse-emergency">
                    <MapPin className="h-4 w-4" />
                  </div>
                </div>
              ))}
              <div className="absolute bottom-4 left-4 rounded-lg bg-white/95 px-3 py-2 text-xs font-bold text-navy">Dallas Metro Coverage</div>
            </div>
          </div>
        </div>
      </section>

      {/* EMERGENCY CTA */}
      <section className="gradient-navy text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-14 text-center md:flex-row md:text-left">
          <div>
            <div className="mb-2 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-cta">
              <AlertTriangle className="h-4 w-4" /> 24/7 Emergency
            </div>
            <h2 className="font-display text-3xl font-extrabold sm:text-4xl">Need A Plumber Right Now?</h2>
            <p className="mt-2 text-white/80">Our emergency response team is available 24/7.</p>
          </div>
          <a href="#book" className="inline-flex items-center gap-2 rounded-xl gradient-cta px-7 py-4 font-bold text-cta-foreground shadow-cta hover:translate-y-[-1px] transition">
            <Calendar className="h-5 w-5" /> Book Appointment
          </a>
        </div>
      </section>

      {/* BOOK FORM */}
      <section id="book" className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <div className="mb-3 inline-block rounded-full bg-brand/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand">Book Online</div>
            <h2 className="font-display text-3xl font-extrabold text-navy sm:text-4xl">Book Your Appointment</h2>
            <p className="mt-3 text-muted-foreground">Pick a time that works for you below, and it's locked in instantly — no waiting for a callback.</p>
            <ul className="mt-6 space-y-3 text-sm">
              {["Real-time availability","Same-day service available","Upfront, honest pricing","Licensed and insured technicians"].map(t => (
                <li key={t} className="flex items-center gap-2 text-navy"><CheckCircle2 className="h-5 w-5 text-brand" />{t}</li>
              ))}
            </ul>
            <div className="mt-8 rounded-2xl border border-border bg-secondary/50 p-5">
              <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Or call directly</div>
              <a href={PHONE_HREF} className="mt-1 inline-flex items-center gap-2 font-display text-2xl font-extrabold text-navy hover:text-brand">
                <Phone className="h-6 w-6" /> {PHONE_DISPLAY}
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-elegant">
            {/*
              TODO: replace this URL with the real Calendly link once the
              business's Calendly account is set up, e.g.
              "https://calendly.com/trueline-plumbing/service-appointment"
            */}
            <InlineWidget
              url="https://calendly.com/your-business-name/service-appointment"
              styles={{ height: "700px", width: "100%" }}
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-3xl px-4">
          <div className="text-center">
            <div className="mb-3 inline-block rounded-full bg-brand/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand">FAQ</div>
            <h2 className="font-display text-3xl font-extrabold text-navy sm:text-4xl">Frequently Asked Questions</h2>
          </div>
          <div className="mt-10 space-y-3">
            {faqs.map((f, i) => (
              <div key={f.q} className="overflow-hidden rounded-xl border border-border bg-card">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left">
                  <span className="font-semibold text-navy">{f.q}</span>
                  <ChevronDown className={`h-5 w-5 flex-shrink-0 text-brand transition ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && <div className="px-5 pb-5 text-sm text-muted-foreground">{f.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden gradient-hero py-20 text-white">
        <div className="absolute inset-0 opacity-15 [background-image:radial-gradient(circle_at_70%_30%,white_1px,transparent_1px)] [background-size:28px_28px]" />
        <div className="relative mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-display text-3xl font-extrabold sm:text-5xl">Stop Plumbing Problems Before They Get Worse</h2>
          <p className="mt-4 text-lg text-white/80">Contact Dallas' trusted plumbing professionals today.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="#book" className="inline-flex items-center gap-2 rounded-xl gradient-cta px-7 py-4 font-bold text-cta-foreground shadow-cta hover:translate-y-[-1px] transition">
              <Calendar className="h-5 w-5" /> Book Appointment
            </a>
            <a href={quickBookUrl()} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border-2 border-white/30 bg-white/10 px-7 py-4 font-bold text-white backdrop-blur hover:bg-white/20 transition">
              <MessageCircle className="h-5 w-5" /> WhatsApp Us Now
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="gradient-navy text-white/80">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-white/10"><Droplets className="h-5 w-5 text-white" /></div>
              <div className="leading-tight">
                <div className="font-display text-lg font-extrabold text-white">TrueLine Plumbing</div>
                <div className="text-[10px] font-semibold uppercase tracking-widest">Dallas · Texas</div>
              </div>
            </div>
            <p className="mt-4 text-sm">Dallas's trusted 24/7 emergency plumbing experts. Licensed, insured, and locally owned.</p>
            <div className="mt-5 flex gap-3">
              {[Facebook, Instagram, Twitter].map((I, i) => (
                <a key={i} href="#" className="grid h-9 w-9 place-items-center rounded-lg bg-white/10 hover:bg-white/20 transition"><I className="h-4 w-4 text-white" /></a>
              ))}
            </div>
          </div>
          <div>
            <div className="mb-3 text-sm font-bold uppercase tracking-wider text-white">Quick Links</div>
            <ul className="space-y-2 text-sm">
              {[["Services","#services"],["Why Us","#why"],["Reviews","#reviews"],["FAQ","#faq"],["Book","#book"]].map(([l,h]) => (
                <li key={h}><a href={h} className="hover:text-cta transition">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="mb-3 text-sm font-bold uppercase tracking-wider text-white">Services</div>
            <ul className="space-y-2 text-sm">
              {services.slice(0,6).map(s => <li key={s.name}><a href="#services" className="hover:text-cta transition">{s.name.replace(" & Installation","").replace(" & Replacement","")}</a></li>)}
            </ul>
          </div>
          <div>
            <div className="mb-3 text-sm font-bold uppercase tracking-wider text-white">Contact</div>
            <ul className="space-y-3 text-sm">
              <li><a href={PHONE_HREF} className="flex items-center gap-2 hover:text-cta"><Phone className="h-4 w-4" /> {PHONE_DISPLAY}</a></li>
              <li><a href={quickBookUrl()} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-cta"><MessageCircle className="h-4 w-4" /> WhatsApp Booking</a></li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Dallas, TX</li>
              <li className="flex items-center gap-2"><Clock className="h-4 w-4" /> Open 24/7</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 py-5 text-center text-xs text-white/60">
            © {new Date().getFullYear()} TrueLine Plumbing. All rights reserved. · Licensed & Insured in Texas.
          </div>
        </div>
      </footer>

      {/* Sticky mobile WhatsApp CTA */}
      <a
        href={quickBookUrl()}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-4 left-4 right-4 z-50 flex items-center justify-center gap-2 rounded-xl gradient-cta px-6 py-4 font-bold text-cta-foreground shadow-cta md:hidden"
      >
        <MessageCircle className="h-5 w-5" /> Book on WhatsApp
      </a>
      <a
        href={quickBookUrl()}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-6 right-6 z-50 hidden h-14 w-14 items-center justify-center rounded-full text-white shadow-cta hover:scale-105 transition md:flex"
        style={{ backgroundColor: "var(--whatsapp)" }}
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    </div>
  );
}
