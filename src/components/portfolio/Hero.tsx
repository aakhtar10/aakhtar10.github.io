"use client";
import { motion } from "framer-motion";
import { Download, ExternalLink,  Gpu,  Link,  Mail } from "lucide-react";
import profilePhoto from "@/assets/profile.png";
import { EMAIL, RESUME_URL, SOCIALS } from "@/config/portfolio";
import Image from "next/image";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-radial)" }} />
        <motion.div
          aria-hidden
          className="absolute -top-32 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full"
          style={{ background: "var(--gradient-primary)", filter: "blur(120px)", opacity: 0.25 }}
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-[1.2fr_1fr] md:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Available for opportunities
          </p>
          <h1 className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            Hey, I&apos;m <span className="text-gradient">Arsalan Akhtar</span>
            <br />
            <span className="text-muted-foreground">Full Stack Developer</span>
          </h1>
          <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
            A Full Stack Developer with 2 years of professional experience building scalable
            enterprise applications using Next.js, React, TypeScript, Node.js, and modern web
            technologies.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              download="Arsalan_Akhtar_Resume"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-secondary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.03]"
            >
              <Download className="h-4 w-4" /> Download Resume
            </a>
            <button
              onClick={() =>
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-white/5 px-5 py-3 text-sm font-semibold transition-colors hover:bg-white/10"
            >
              View Projects <ExternalLink className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-10 flex items-center gap-5 text-muted-foreground">
            <a href={SOCIALS.github} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground" aria-label="GitHub">
              <Image src="/github.png" alt="GitHub" width={40} height={40} className="h-8 w-8" />
            </a>
            <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground" aria-label="LinkedIn">
              <Image src="/linkedin.png" alt="LinkedIn" width={40} height={40} className="h-8 w-8" />
            </a>
            <a href={`mailto:${EMAIL}`} className="transition-colors hover:text-foreground" aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative mx-auto"
        >
          <div
            className="absolute -inset-4 rounded-[2rem] opacity-60 blur-2xl"
            style={{ background: "var(--gradient-primary)" }}
          />
          <div className="glass relative overflow-hidden rounded-[2rem] p-2">
            <Image
              src={profilePhoto}
              alt="Arsalan Akhtar"
              width={420}
              height={420}
              className="h-[320px] w-[320px] rounded-3xl object-cover sm:h-[420px] sm:w-[420px]"
            />
          </div>
          <motion.div
            className="glass absolute -bottom-4 -left-4 rounded-xl px-4 py-3 text-xs"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <p className="font-semibold">2+ years</p>
            <p className="text-muted-foreground">building production apps</p>
          </motion.div>
          <motion.div
            className="glass absolute -right-4 top-6 rounded-xl px-4 py-3 text-xs"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
          >
            <p className="font-semibold text-primary">Next.js • TS • Node</p>
            <p className="text-muted-foreground">Full Stack</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
