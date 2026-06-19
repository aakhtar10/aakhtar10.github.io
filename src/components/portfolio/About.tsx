"use client";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { ABOUT_BULLETS, EDUCATION, EXPERIENCE } from "@/data/portfolio";
import { Section } from "./shared/Section";

function TimelineCard({
  icon,
  label,
  items,
}: {
  icon: React.ReactNode;
  label: string;
  items: { title: string; org: string; period: string }[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="glass rounded-2xl p-6"
    >
      <div className="mb-5 flex items-center gap-2">
        <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 text-primary">
          {icon}
        </span>
        <h3 className="text-lg font-semibold">{label}</h3>
      </div>
      <ol className="relative space-y-5 border-l border-border pl-5">
        {items.map((it) => (
          <li key={it.title} className="relative">
            <span className="absolute -left-[26px] top-1.5 h-2.5 w-2.5 rounded-full bg-gradient-to-br from-primary to-secondary ring-4 ring-background" />
            <p className="font-semibold leading-tight">{it.title}</p>
            <p className="text-sm text-primary">{it.org}</p>
            <p className="mt-1 text-xs text-muted-foreground">{it.period}</p>
          </li>
        ))}
      </ol>
    </motion.div>
  );
}

export function About() {
  return (
    <Section id="about" eyebrow="About" title="A developer with a builder's mindset.">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          className="space-y-3"
        >
          {ABOUT_BULLETS.map((b) => (
            <motion.li
              key={b}
              variants={{
                hidden: { opacity: 0, x: -10 },
                show: { opacity: 1, x: 0 },
              }}
              className="flex items-start gap-3 text-muted-foreground"
            >
              <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-primary" />
              <span>{b}</span>
            </motion.li>
          ))}
        </motion.ul>

        <div className="grid gap-6 sm:grid-cols-2">
          <TimelineCard icon={<GraduationCap className="h-5 w-5" />} label="Education" items={EDUCATION} />
          <TimelineCard icon={<Briefcase className="h-5 w-5" />} label="Experience" items={EXPERIENCE} />
        </div>
      </div>
    </Section>
  );
}
