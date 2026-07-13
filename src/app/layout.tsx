import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import LenisInit from "@/components/LenisInit";
const sg = Space_Grotesk({ subsets: ["latin"], variable: "--font-display", weight: ["400","500","600","700"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-body", weight: ["400","500","600"] });
export const metadata: Metadata = { title: "Cloakdrop — Private Airdrops on Aleo", description: "Distribute tokens privately. Prove eligibility with zero-knowledge proofs without revealing your wallet history. Built on Aleo." };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" className={`${sg.variable} ${inter.variable}`}><body><LenisInit />{children}</body></html>;
}
