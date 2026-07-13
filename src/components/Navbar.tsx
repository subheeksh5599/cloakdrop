"use client";
import { useState, useEffect } from "react";
import { Shield } from "lucide-react";
export default function Navbar() {
  const [s, setS] = useState(false);
  useEffect(() => { const f = () => setS(window.scrollY > 20); window.addEventListener("scroll", f, { passive: true }); return () => window.removeEventListener("scroll", f); }, []);
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${s ? "bg-[var(--color-bg)]/95 backdrop-blur-xl border-b border-[var(--color-border)]" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-[family-name:var(--font-display)] font-bold text-lg"><Shield className="w-5 h-5 text-[var(--color-accent)]" />Cloakdrop</a>
        <div className="hidden md:flex items-center gap-8">{["How","Features","Docs"].map(l => <a key={l} href={`#${l.toLowerCase()}`} className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors font-[family-name:var(--font-body)]">{l}</a>)}</div>
        <a href="#" className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold rounded-lg bg-[var(--color-accent)] text-black hover:brightness-110 transition-all font-[family-name:var(--font-body)]">Launch App</a>
      </div>
    </nav>
  );
}
