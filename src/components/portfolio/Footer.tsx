import {  GitBranch, Link, Mail } from "lucide-react";
import { EMAIL, NAV, SOCIALS } from "@/config/portfolio";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 font-display text-lg font-bold">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-primary to-secondary text-primary-foreground">AA</span>
            Arsalan Akhtar
          </div>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            Full Stack Developer crafting scalable web experiences.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold">Quick Links</p>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            {NAV.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`} className="transition-colors hover:text-foreground">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold">Connect</p>
          <div className="mt-3 flex items-center gap-3 text-muted-foreground">
            <a href={SOCIALS.github} target="_blank" rel="noopener noreferrer" className="grid h-10 w-10 place-items-center rounded-lg border border-border bg-white/5 transition-colors hover:bg-white/10" aria-label="GitHub">
              <Image src="/github.png" alt="GitHub" width={40} height={40} className="h-8 w-8" />
            </a>
            <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" className="grid h-10 w-10 place-items-center rounded-lg border border-border bg-white/5 transition-colors hover:bg-white/10" aria-label="LinkedIn">
              <Image src="/linkedin.png" alt="LinkedIn" width={40} height={40} className="h-8 w-8" />
            </a>
            <a href={`mailto:${EMAIL}`} className="grid h-10 w-10 place-items-center rounded-lg border border-border bg-white/5 transition-colors hover:bg-white/10" aria-label="Email">
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-4 py-5 text-xs text-muted-foreground">
          Arsalan Akhtar © 2026 — Designed & built with care.
        </p>
      </div>
    </footer>
  );
}
