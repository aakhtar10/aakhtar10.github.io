"use client";

import { Download } from "lucide-react";
import { RESUME_URL } from "@/config/portfolio";

export function ResumeButton({ compact = false }: { compact?: boolean }) {
  const handleResume = () => {
    window.open(RESUME_URL, "_blank");

    const link = document.createElement("a");
    link.href = RESUME_URL;
    link.download = "Arsalan_Akhtar_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleResume}
      className={`group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-primary to-secondary px-3 py-2 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.03] active:scale-100 ${
        compact ? "" : "px-5 py-3"
      }`}
    >
      <Download className="h-4 w-4" />
      <span className={compact ? "hidden sm:inline" : ""}>Resume</span>
    </button>
  );
}