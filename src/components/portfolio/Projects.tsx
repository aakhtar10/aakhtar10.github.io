"use client";
import { motion } from "framer-motion";
import { ExternalLink, GitBranch,  } from "lucide-react";
import { Section } from "./shared/Section";
import { PROJECTS } from "@/data/portfolio";
import Link from "next/link";

export function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="Selected work I'm proud of.">
      <div className="grid gap-6 md:grid-cols-2">
        {PROJECTS.map((p, i) => (
          <motion.article
            key={p.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="glass group relative flex flex-col overflow-hidden rounded-2xl transition-transform hover:-translate-y-1"
          >
            <div className={`relative h-44 overflow-hidden bg-gradient-to-br ${p.gradient}`}>
              <div className="absolute inset-0 bg-grid opacity-30" />
              <div className="absolute inset-0 grid place-items-center">
                <span className="font-display text-2xl font-bold text-foreground/90">
                  {p.name.split(" ").slice(0, 3).join(" ")}
                </span>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-card to-transparent" />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
              <ul className="mt-4 grid grid-cols-2 gap-1 text-xs text-muted-foreground">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-primary" /> {f}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-border bg-white/5 px-2 py-0.5 text-[11px] font-medium text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex gap-2">
                <Link
                  href={p.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-primary to-secondary px-3 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
                >
                  <ExternalLink className="h-4 w-4" /> Live Demo
                </Link>
               {p.github && (
                  <Link
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-white/5 px-3 py-2 text-sm font-semibold transition-colors hover:bg-white/10"
                  >
                  <GitBranch className="h-4 w-4" /> GitHub
                </Link>)}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
