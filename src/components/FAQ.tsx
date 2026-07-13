"use client";
import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Plus, Minus } from "lucide-react";
gsap.registerPlugin(ScrollTrigger);

const faqs = [
  { q: "What is a ZK airdrop?", a: "A zero-knowledge airdrop lets projects distribute tokens to eligible wallets without requiring claimants to reveal their wallet history, balances, or transaction patterns. Claimants generate a cryptographic proof that they meet the criteria, and the verifier checks this proof on-chain without learning anything else about the wallet." },
  { q: "How does Cloakdrop protect privacy?", a: "Cloakdrop uses Aleo's ZK execution environment. Eligibility proofs are generated client-side in the claimant's browser. Only the proof output — a boolean 'eligible' or 'not eligible' — is submitted on-chain. No wallet data, no transaction history, no balance information ever leaves the claimant's device." },
  { q: "What chains does this work on?", a: "Cloakdrop is built exclusively on Aleo, the leading ZK Layer 1. It leverages Aleo's native ZK primitives for proof generation and on-chain verification. Token distribution happens on Aleo mainnet." },
  { q: "Can drop creators see who claimed?", a: "Drop creators can see how many claims were processed and what criteria were proven, but cannot link any claim to a specific wallet address or wallet history. The privacy guarantee is mathematical — even the Cloakdrop protocol cannot deanonymize claimants." },
  { q: "How do I create a drop?", a: "Connect your Aleo wallet, define your eligibility criteria in our visual builder or YAML config, set your token distribution parameters, and deploy. Cloakdrop generates the ZK circuit, deploys the on-chain verifier, and gives you a claim page URL to share with your community." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number|null>(null);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => { gsap.from(".fi", { scrollTrigger: { trigger: ref.current, start: "top 80%" }, y: 32, opacity: 0, duration: 0.5, stagger: 0.08, ease: "expo.out" }); }, ref);
    return () => ctx.revert();
  }, []);
  return (
    <section ref={ref} className="relative py-32 px-6 border-t border-[var(--color-border)]">
      <div className="max-w-3xl mx-auto">
        <span className="text-xs font-mono uppercase tracking-widest text-[var(--color-text-secondary)] mb-3 block">N.004 — FAQ</span>
        <h2 className="font-[family-name:var(--font-display)] font-bold text-4xl md:text-5xl tracking-[-0.03em] mb-12">You ask.<br /><span className="text-[var(--color-text-secondary)]">Zero knowledge.</span></h2>
        <div className="space-y-3">
          {faqs.map((f,i) => (
            <div key={i} className="fi border border-[var(--color-border)] rounded-xl overflow-hidden bg-[var(--color-surface)]">
              <button onClick={() => setOpen(open===i?null:i)} className="w-full flex items-center justify-between p-5 text-left hover:bg-white/5 transition-colors cursor-pointer"><span className="font-medium font-[family-name:var(--font-body)] pr-4">{f.q}</span>{open===i?<Minus className="w-4 h-4 text-[var(--color-accent)] shrink-0" />:<Plus className="w-4 h-4 text-[var(--color-text-secondary)] shrink-0" />}</button>
              {open===i && <div className="px-5 pb-5"><p className="text-sm text-[var(--color-text-secondary)] leading-relaxed font-[family-name:var(--font-body)]">{f.a}</p></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
