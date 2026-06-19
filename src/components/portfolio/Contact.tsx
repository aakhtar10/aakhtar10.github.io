"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import {
  Check,
  Copy,
  GitBranch,
  Link,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { Section } from "./shared/Section";
import { EMAIL, LOCATION, PHONE, SOCIALS } from "@/config/portfolio";
import Image from "next/image";

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-center gap-3 rounded-lg border border-border bg-white/5 px-3 py-3 transition-colors hover:bg-white/10">
      <span className="grid h-9 w-9 place-items-center rounded-md bg-gradient-to-br from-primary/20 to-secondary/20 text-primary">
        {icon}
      </span>

      <div>
        <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
          {label}
        </p>
        <p className="text-sm font-medium">{value}</p>
      </div>
    </div>
  );

  return <li>{href ? <a href={href}>{content}</a> : content}</li>;
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-medium text-muted-foreground">
        {label}
      </label>

      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-lg border border-border bg-background/60 px-3 py-2 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
      />
    </div>
  );
}

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error(error);
    }
  };

  const onSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    setLoading(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: data.get("name"),
          email: data.get("email"),
          subject: data.get("subject"),
          message: data.get("message"),
          time: new Date().toLocaleString(),
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      toast.success("Message sent successfully!");

      setSent(true);
      form.reset();

      setTimeout(() => {
        setSent(false);
      }, 3000);
    } catch (error) {
      console.error(error);

      toast.error(
        "Failed to send message. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something together."
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        {/* Left Panel */}
        <div className="glass rounded-2xl p-6">
          <h3 className="text-lg font-semibold">
            Get in touch
          </h3>

          <p className="mt-1 text-sm text-muted-foreground">
            Open to full-time roles, contracts, and
            collaborations.
          </p>

          <ul className="mt-6 space-y-4 text-sm">
            <ContactRow
              icon={<Mail className="h-4 w-4" />}
              label="Email"
              value={EMAIL}
              href={`mailto:${EMAIL}`}
            />

            <ContactRow
              icon={<Phone className="h-4 w-4" />}
              label="Phone"
              value={PHONE}
              href={`tel:${PHONE.replace(/[^+\d]/g, "")}`}
            />

            <ContactRow
              icon={<MapPin className="h-4 w-4" />}
              label="Location"
              value={LOCATION}
            />
          </ul>

          <div className="mt-6 flex flex-wrap gap-2">
            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-white/5 px-3 py-2 text-sm font-medium transition-colors hover:bg-white/10"
            >
              {copied ? (
                <Check className="h-4 w-4 text-primary" />
              ) : (
                <Copy className="h-4 w-4" />
              )}

              {copied ? "Copied!" : "Copy Email"}
            </button>

            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-primary to-secondary px-3 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
            >
              <Mail className="h-4 w-4" />
              Email me
            </a>
          </div>

          <div className="mt-6 flex items-center gap-4 text-muted-foreground">
            <a
              href={SOCIALS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition-colors hover:text-foreground"
            >
              <Image src="/linkedin.png" alt="LinkedIn" width={40} height={40} className="h-8 w-8" />
            </a>

            <a
              href={SOCIALS.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="transition-colors hover:text-foreground"
            >
              <Image src="/github.png" alt="GitHub" width={40} height={40} className="h-8 w-8" />
            </a>

            <a
              href={`mailto:${EMAIL}`}
              aria-label="Email"
              className="transition-colors hover:text-foreground"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={onSubmit}
          className="glass space-y-4 rounded-2xl p-6"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field
              label="Name"
              name="name"
              placeholder="Your name"
              required
            />

            <Field
              label="Email"
              name="email"
              type="email"
              placeholder="you@example.com"
              required
            />
          </div>

          <Field
            label="Subject"
            name="subject"
            placeholder="What's this about?"
            required
          />

          <div>
            <label className="mb-1.5 block text-xs font-medium text-muted-foreground">
              Message
            </label>

            <textarea
              name="message"
              required
              rows={5}
              placeholder="Tell me about your project..."
              className="w-full rounded-lg border border-border bg-background/60 px-3 py-2 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-primary to-secondary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? (
              <>
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                Sending...
              </>
            ) : sent ? (
              <>
                <Check className="h-4 w-4" />
                Message Sent
              </>
            ) : (
              <>
                <Mail className="h-4 w-4" />
                Send Message
              </>
            )}
          </button>
        </form>
      </div>
    </Section>
  );
}