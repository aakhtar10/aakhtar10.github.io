"use client";
import { motion } from "framer-motion";
import { Section } from "./shared/Section";
import { SKILL_GROUPS } from "@/data/portfolio";

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Tools I use to ship great products.">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {SKILL_GROUPS.map((g, i) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="glass group relative overflow-hidden rounded-2xl p-6 transition-transform hover:-translate-y-1"
          >
            <div
              className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity group-hover:opacity-100"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.78 0.13 230 / 0.18), oklch(0.62 0.21 295 / 0.18))",
              }}
            />
            <div className="relative">
              <div className="mb-4 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 text-primary">
                  {g.icon}
                </span>
                <h3 className="text-lg font-semibold">{g.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-border bg-white/5 px-3 py-1 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
