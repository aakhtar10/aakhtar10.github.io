import { Download } from "lucide-react";
import { RESUME_URL } from "@/config/portfolio";

export function ResumeButton({ compact = false }: { compact?: boolean }) {
  return (
    <a
      href={RESUME_URL}
      target="_blank"
      rel="noopener noreferrer"
      download="Arsalan_Akhtar_Resume"
      className={`group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-primary to-secondary px-3 py-2 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.03] active:scale-100 ${
        compact ? "" : "px-5 py-3"
      }`}
    >
      <Download className="h-4 w-4" />
      <span className={compact ? "hidden sm:inline" : ""}>Resume</span>
    </a>
  );
}
