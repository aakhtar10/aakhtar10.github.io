import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow?: string;
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4">
        {(eyebrow || title) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mb-12 max-w-2xl"
          >
            {eyebrow && (
              <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                <Sparkles className="h-3 w-3 text-primary" /> {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
                {title}
              </h2>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
