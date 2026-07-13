"use client";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";
import { Shield, Users, Coins, Key, BarChart3 } from "lucide-react";
gsap.registerPlugin(ScrollTrigger);

const drops = [
  { name: "Aleo OG Drop", eligible: "12,450", claimed: "9,832", token: "ALEO", status: "live", criteria: "Mainnet interaction before June 2026" },
  { name: "ZK Builder Reward", eligible: "3,210", claimed: "2,876", token: "ZKB", status: "live", criteria: "Deployed contract on Aleo testnet" },
  { name: "Privacy Pioneer", eligible: "847", claimed: "623", token: "PRIV", status: "live", criteria: "Held Aleo Domain NFT" },
  { name: "Early Validator", eligible: "156", claimed: "142", token: "ALEO", status: "settled", criteria: "Ran Aleo validator node 90+ days" },
];

const proofData = [{ d: "Mon", p: 2340 },{ d: "Tue", p: 3120 },{ d: "Wed", p: 4560 },{ d: "Thu", p: 3890 },{ d: "Fri", p: 5210 },{ d: "Sat", p: 6780 },{ d: "Sun", p: 5430 }];

export default function Dashboard() {
  const [tab, setTab] = useState("drops");
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({ trigger: ref.current, start: "top top", end: "+=1100", pin: true, pinSpacing: true, scrub: 0.6 });
      gsap.from(".dc", { scrollTrigger: { trigger: ref.current, start: "top 80%" }, y: 40, opacity: 0, duration: 0.6, stagger: 0.1, ease: "expo.out" });
    }, ref);
    return () => ctx.revert();
  }, []);
  return (
    <section id="how" ref={ref} className="relative py-24 px-6 bg-[var(--color-bg)]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-[var(--color-text-secondary)] mb-3 block">N.001 — Live Drops</span>
          <h2 className="font-[family-name:var(--font-display)] font-bold text-4xl md:text-5xl tracking-[-0.03em]">Private by default.<br /><span className="text-[var(--color-text-secondary)]">Verifiable by proof.</span></h2>
        </div>
        <div className="dc rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] overflow-hidden">
          <div className="flex border-b border-[var(--color-border)]">
            {[{id:"drops",icon:Coins,label:"Active Drops"},{id:"proofs",icon:Key,label:"Proofs"},{id:"stats",icon:BarChart3,label:"Stats"},{id:"claims",icon:Users,label:"Claims"}].map(i => (
              <button key={i.id} onClick={() => setTab(i.id)} className={`flex items-center gap-2 px-5 py-3 text-sm border-r border-[var(--color-border)] transition-colors cursor-pointer font-[family-name:var(--font-body)] ${tab===i.id?"bg-[var(--color-accent-glow)] text-[var(--color-accent)]":"text-[var(--color-text-secondary)] hover:bg-white/5"}`}><i.icon className="w-4 h-4" />{i.label}</button>
            ))}
          </div>
          <div className="p-6">
            {tab === "drops" && (
              <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  {[{l:"Active Drops",v:"3",d:"2 settled"},{l:"Total Eligible",v:"16,663",d:"wallets"},{l:"ZK Proofs Generated",v:"42,891",d:"+12% today"},{l:"Privacy Guarantee",v:"100%",d:"zero-knowledge"}].map((m,i) => (
                    <div key={i} className="p-4 rounded-xl border border-[var(--color-border)] bg-black/40"><p className="text-xs text-[var(--color-text-secondary)] mb-1 font-[family-name:var(--font-body)]">{m.l}</p><p className="text-xl font-bold font-[family-name:var(--font-display)]">{m.v}</p><p className="text-xs text-[var(--color-accent)] font-[family-name:var(--font-body)]">{m.d}</p></div>
                  ))}
                </div>
                <table className="w-full text-sm">
                  <thead><tr className="border-b border-[var(--color-border)] text-left text-[var(--color-text-secondary)] font-[family-name:var(--font-body)]">{["Drop","Eligible","Claimed","Token","Status","Criteria"].map(h=><th key={h} className="py-3 pr-4 font-medium">{h}</th>)}</tr></thead>
                  <tbody>{drops.map((d,i)=><tr key={i} className="border-b border-[var(--color-border)]/50 hover:bg-white/5 transition-colors cursor-pointer font-[family-name:var(--font-body)]"><td className="py-3 pr-4 font-medium">{d.name}</td><td className="py-3 pr-4">{d.eligible}</td><td className="py-3 pr-4">{d.claimed}</td><td className="py-3 pr-4 font-semibold font-[family-name:var(--font-display)]">{d.token}</td><td className="py-3 pr-4"><span className={`inline-flex items-center gap-1.5 text-xs px-2 py-0.5 rounded-full ${d.status==="live"?"bg-[var(--color-accent)]/10 text-[var(--color-accent)]":"bg-[var(--color-border)] text-[var(--color-text-secondary)]"}`}>{d.status}</span></td><td className="py-3 pr-4 text-[var(--color-text-secondary)] text-xs">{d.criteria}</td></tr>)}</tbody></table>
              </div>
            )}
            {tab === "proofs" && <div><h3 className="text-lg font-bold font-[family-name:var(--font-display)] mb-4">ZK Proofs Generated — Last 7 Days</h3><div className="h-64"><ResponsiveContainer width="100%" height="100%"><BarChart data={proofData}><CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" /><XAxis dataKey="d" stroke="var(--color-text-secondary)" tick={{fontSize:12}} /><YAxis stroke="var(--color-text-secondary)" tick={{fontSize:12}} /><Bar dataKey="p" fill="var(--color-accent)" radius={[4,4,0,0]} /></BarChart></ResponsiveContainer></div></div>}
            {tab === "stats" && <div className="flex flex-col items-center justify-center py-16 text-center"><Shield className="w-16 h-16 text-[var(--color-accent)] mb-6 opacity-50" /><h3 className="text-xl font-bold font-[family-name:var(--font-display)] mb-2">100% Zero-Knowledge</h3><p className="text-[var(--color-text-secondary)] font-[family-name:var(--font-body)]">Every eligibility check runs as a ZK proof on Aleo. Your wallet history never leaves your device.</p></div>}
            {tab === "claims" && <div className="flex flex-col items-center justify-center py-16 text-center"><Coins className="w-16 h-16 text-[var(--color-accent)] mb-6 opacity-50" /><h3 className="text-xl font-bold font-[family-name:var(--font-display)] mb-2">13,473 Claims Processed</h3><p className="text-[var(--color-text-secondary)] font-[family-name:var(--font-body)]">Across 5 drops. Average claim time: 2.3 seconds.</p></div>}
          </div>
        </div>
      </div>
    </section>
  );
}
