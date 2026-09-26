"use client";

import { useEffect, useRef, useState } from "react";

/** Small copy-to-clipboard button with brief "Copied" feedback. Works in static export (client-only). */
export default function CopyButton({ value, label }: { value: string; label: string }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  async function copy() {
    let ok = false;
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(value);
        ok = true;
      }
    } catch {
      ok = false;
    }
    if (!ok) {
      // Fallback for older browsers / non-secure contexts
      const ta = document.createElement("textarea");
      ta.value = value;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try {
        ok = document.execCommand("copy");
      } catch {
        ok = false;
      }
      document.body.removeChild(ta);
    }
    if (ok) {
      setCopied(true);
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 1800);
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={copied ? `${label} copied` : `Copy ${label}`}
      className={`focus-ring inline-flex shrink-0 items-center gap-1.5 rounded-sm border px-2.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] transition ${
        copied
          ? "border-gold bg-gold text-navy"
          : "border-navy/20 bg-cream text-navy hover:border-gold hover:text-gold-antique"
      }`}
    >
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden>
        {copied ? (
          <path d="M5 12.5l4.5 4.5L19 7.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        ) : (
          <>
            <rect x="9" y="9" width="11" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
            <path d="M5 15V5.5A1.5 1.5 0 016.5 4H15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </>
        )}
      </svg>
      <span aria-live="polite">{copied ? "Copied" : "Copy"}</span>
    </button>
  );
}
