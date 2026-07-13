"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowRight, Lock } from "lucide-react";
export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hl", { y: 80, opacity: 0, duration: 1, stagger: 0.15, ease: "expo.out", delay: 0.3 });
      gsap.from(".hc", { y: 40, opacity: 0, duration: 0.8, ease: "expo.out", delay: 1.0 });
    }, ref);
    return () => ctx.revert();
  }, []);
  return (
    <section ref={ref} className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-24 bg-[var(--color-bg)]">
      <div className="max-w-5xl mx-auto text-center">
        <div className="hl mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-accent-glow)] border border-[var(--color-accent)]/10 text-[var(--color-accent)] text-sm font-medium font-[family-name:var(--font-body)]"><Lock className="w-3.5 h-3.5" />Zero-Knowledge Airdrops on Aleo</div>
        <h1 className="font-[family-name:var(--font-display)] font-bold text-6xl md:text-7xl lg:text-8xl leading-[0.94] tracking-[-0.04em] mb-6">
          <span className="hl block">Prove you belong.</span>
          <span className="hl block"><span className="text-[var(--color-accent)]">Reveal nothing</span> else.</span>
        </h1>
        <p className="hl max-w-2xl mx-auto text-lg text-[var(--color-text-secondary)] font-[family-name:var(--font-body)] leading-relaxed mb-12">
          Distribute tokens privately. Claim airdrops by proving eligibility with ZK proofs — without exposing your wallet history, balances, or identity. Built on Aleo.
        </p>
        <div className="hc flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#" className="inline-flex items-center gap-2 px-8 py-4 text-base font-bold rounded-lg bg-[var(--color-accent)] text-black hover:brightness-110 transition-all font-[family-name:var(--font-body)]">Create Drop <ArrowRight className="w-4 h-4" /></a>
          <a href="#" className="inline-flex items-center gap-2 px-8 py-4 text-base font-medium rounded-lg border border-[var(--color-border)] text-[var(--color-text-primary)] hover:border-white/20 transition-all font-[family-name:var(--font-body)]">Claim Airdrop</a>
        </div>
      </div>
    </section>
  );
}
