"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Shield, Eye, Zap, Users } from "lucide-react";
gsap.registerPlugin(ScrollTrigger);

const items = [
  { icon: Eye, title: "Private eligibility", desc: "Claimants prove they qualify for a drop using zero-knowledge proofs. The verifier learns only one thing: this wallet meets the criteria. Everything else — balance, history, identity — stays private." },
  { icon: Shield, title: "On-chain verification", desc: "Every proof is verified by Aleo's ZK circuit on-chain. No trusted third party. No data leak. The proof IS the verification — mathematically, cryptographically, permanently." },
  { icon: Zap, title: "One-click claims", desc: "Connect your Aleo wallet. Generate a proof. Claim your tokens. Three clicks, no KYC, no wallet scanning, no address linking that lets observers build your financial profile." },
  { icon: Users, title: "Builder-friendly SDK", desc: "Drop creators define eligibility criteria in a simple config file. Cloakdrop generates the ZK circuit, deploys the verifier, and hosts the claim page. No cryptography PhD required." },
];

export default function Features() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => { gsap.from(".fr", { scrollTrigger: { trigger: ref.current, start: "top 70%" }, y: 48, opacity: 0, duration: 0.7, stagger: 0.08, ease: "expo.out" }); }, ref);
    return () => ctx.revert();
  }, []);
  return (
    <section id="features" ref={ref} className="relative py-32 px-6 border-t border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto">
        <span className="text-xs font-mono uppercase tracking-widest text-[var(--color-text-secondary)] mb-3 block">N.002 — Features</span>
        <h2 className="font-[family-name:var(--font-display)] font-bold text-4xl md:text-5xl tracking-[-0.03em] mb-16">Prove everything.<br /><span className="text-[var(--color-text-secondary)]">Expose nothing.</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--color-border)] rounded-2xl overflow-hidden">
          {items.map((f,i) => (
            <div key={i} className="fr p-8 bg-[var(--color-bg)] hover:bg-[var(--color-surface)] transition-colors duration-300">
              <f.icon className="w-6 h-6 text-[var(--color-accent)] mb-4" />
              <h3 className="font-[family-name:var(--font-display)] font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed font-[family-name:var(--font-body)]">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
