<p align="center">
  <h1 style="font-size: 48px; font-weight: 800; letter-spacing: -0.04em;">
    cloak<span style="color: #00FFAA;">drop</span>
  </h1>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Built_on-Aleo-00FFAA?style=for-the-badge&logo=aleo">
  <img src="https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript">
  <img src="https://img.shields.io/badge/Hackathon-Aleo_x_OpenBuild-00FFAA?style=for-the-badge">
</p>

<h1 align="center">Cloakdrop</h1>
<h3 align="center"><em>Prove you belong. Reveal nothing else.</em></h3>

<p align="center">
  <strong>Distribute tokens privately on Aleo. Claim airdrops by proving eligibility with zero-knowledge proofs — without exposing your wallet history, balances, or identity.</strong>
</p>

<p align="center">
  <a href="#the-problem">Problem</a> &bull;
  <a href="#the-solution">Solution</a> &bull;
  <a href="#demo">Demo</a> &bull;
  <a href="#tech-stack">Tech Stack</a> &bull;
  <a href="#getting-started">Getting Started</a> &bull;
  <a href="#architecture">Architecture</a>
</p>

---

## The Problem

Airdrops are the primary user acquisition tool in crypto. But every airdrop today forces users to expose their entire wallet history — every transaction, every balance, every protocol interaction — just to prove they qualify. This is a privacy disaster waiting to happen.

| Problem | Impact |
|---------|--------|
| **Full wallet exposure** | Claiming an airdrop reveals your entire on-chain identity to the drop creator and anyone watching the chain. |
| **Sybil attacks** | Without privacy, airdrop farmers game eligibility by splitting funds across hundreds of wallets. Honest users lose. |
| **No selective disclosure** | You either reveal everything or get nothing. There's no middle ground — and no ZK primitive for it. |
| **Drop creators can deanonymize** | Every claim links a wallet to a real identity through KYC on/off-ramps. Permanent, public, irreversible. |
| **Compliance friction** | GDPR, CCPA, and emerging privacy laws make mass wallet data collection legally risky for drop creators. |

---

## The Solution

Cloakdrop brings zero-knowledge proofs to airdrops. Users prove they meet eligibility criteria without revealing which specific assets they hold, how much, or what transactions they've made. The verifier learns ONE thing: this wallet qualifies.

```
Define Criteria ──→ Generate ZK Proof ──→ Verify On-Chain ──→ Distribute Tokens
     │                    │                     │                    │
  Held NFT X         Client-side           Proof checked         Tokens sent
  Used Protocol Y    Aleo circuit          by verifier           privately
```

### What you get

- **Private eligibility** — Claimants prove they qualify using a ZK proof. The verifier learns nothing beyond "this wallet meets the criteria."
- **On-chain verification** — Proofs are verified by Aleo's ZK circuit on-chain. Mathematically, cryptographically, permanently verifiable.
- **One-click claims** — Connect Aleo wallet, generate proof, claim tokens. Three clicks, no wallet scanning, no address linking.
- **Builder-friendly SDK** — Drop creators define criteria in a config file. Cloakdrop compiles the ZK circuit and hosts the claim page. No cryptography PhD needed.
- **Untraceable claims** — Even the drop creator cannot link a claimer's address to their wallet history. The proof IS the verification.

---

## Demo

🔗 **Live:** [https://cloakdrop-theta.vercel.app](https://cloakdrop-theta.vercel.app)

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router) |
| Styling | Tailwind CSS |
| Language | TypeScript (strict) |
| Fonts | Space Grotesk + Inter |
| Animations | GSAP + Framer Motion |
| Icons | Lucide React |
| Blockchain | Aleo |
| ZK Framework | Aleo Leo (circuits) |
| Deployment | Vercel |

---

## Getting Started

```bash
git clone https://github.com/subheeksh5599/cloakdrop.git
cd cloakdrop
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Architecture

```
┌──────────────────────────────────────────────────────┐
│                 Cloakdrop dApp                         │
│  Create Drop  •  Claim  •  Generate Proof             │
└──────────────────────┬───────────────────────────────┘
                       │
                       ▼
┌──────────────────────────────────────────────────────┐
│              ZK Circuit (Aleo Leo)                     │
│  Eligibility check  •  Proof generation  •  Verify    │
└──────────────────────┬───────────────────────────────┘
                       │
                       ▼
┌──────────────────────────────────────────────────────┐
│               Aleo Blockchain                          │
│  On-chain verifier  •  Private state  •  Settlement   │
└──────────────────────────────────────────────────────┘
```

---

## License

MIT
