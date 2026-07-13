"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FileText, Key, Gift } from "lucide-react";
gsap.registerPlugin(ScrollTrigger);

const steps = [
  { n: "01", icon: FileText, title: "Define eligibility", desc: "Drop creators write criteria in a simple config: 'held NFT X', 'used protocol Y', 'delegated to validator Z'. Cloakdrop compiles it into a ZK circuit on Aleo." },
  { n: "02", icon: Key, title: "Generate proof", desc: "Claimants connect their Aleo wallet. A ZK proof is generated client-side proving eligibility. The proof reveals nothing about which specific assets they hold or transactions they made." },
  { n: "03", icon: Gift, title: "Claim privately", desc: "Proof is verified on-chain. If valid, tokens are distributed automatically. The claimer's address is never linked to their wallet history. Even the drop creator can't deanonymize them." },
];

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => { gsap.from(".hs", { scrollTrigger: { trigger: ref.current, start: "top 60%" }, y: 64, opacity: 0, duration: 0.8, stagger: 0.2, ease: "expo.out" }); }, ref);
    return () => ctx.revert();
  }, []);
  return (
    <section ref={ref} className="relative py-32 px-6 border-t border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto">
        <span className="text-xs font-mono uppercase tracking-widest text-[var(--color-text-secondary)] mb-3 block">N.003 — How It Works</span>
        <h2 className="font-[family-name:var(--font-display)] font-bold text-4xl md:text-5xl tracking-[-0.03em] mb-16">Three steps.<br /><span className="text-[var(--color-text-secondary)]">One proof.</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((s,i) => (
            <div key={i} className="hs relative">
              <div className="flex items-center gap-3 mb-6"><span className="text-5xl font-bold font-[family-name:var(--font-display)] tracking-[-0.04em] text-[var(--color-border)]">{s.n}</span><div className="w-8 h-px bg-[var(--color-accent)]" /></div>
              <s.icon className="w-8 h-8 text-[var(--color-accent)] mb-4" />
              <h3 className="font-[family-name:var(--font-display)] font-semibold text-xl mb-3">{s.title}</h3>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed font-[family-name:var(--font-body)]">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
