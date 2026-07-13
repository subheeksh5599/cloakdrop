import { Shield } from "lucide-react";
const links = { Product: ["Create Drop","Claim","API Docs","Changelog"], Resources: ["Aleo Docs","ZK Circuits","SDK","GitHub"], Company: ["About","Blog","Contact"], Legal: ["Terms","Privacy"] };
export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] py-16 px-6 bg-[var(--color-surface)]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1"><a href="#" className="flex items-center gap-2 font-[family-name:var(--font-display)] font-bold text-lg mb-4"><Shield className="w-5 h-5 text-[var(--color-accent)]" />Cloakdrop</a><p className="text-sm text-[var(--color-text-secondary)] font-[family-name:var(--font-body)]">Private airdrops on Aleo. Prove eligibility without revealing your wallet.</p></div>
          {Object.entries(links).map(([cat,ls]) => <div key={cat}><h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-secondary)] mb-4 font-[family-name:var(--font-body)]">{cat}</h4><ul className="space-y-2">{ls.map(l=><li key={l}><a href="#" className="text-sm text-[var(--color-text-secondary)] hover:text-white transition-colors font-[family-name:var(--font-body)]">{l}</a></li>)}</ul></div>)}
        </div>
        <div className="pt-8 border-t border-[var(--color-border)] flex flex-col sm:flex-row items-center justify-between gap-4"><p className="text-xs text-[var(--color-text-secondary)] font-[family-name:var(--font-body)]">© {new Date().getFullYear()} Cloakdrop. Built for the Aleo x OpenBuild Hackathon.</p><p className="text-xs text-[var(--color-text-secondary)] font-[family-name:var(--font-body)]">Powered by Aleo ZK</p></div>
      </div>
    </footer>
  );
}
