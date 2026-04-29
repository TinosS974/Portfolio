import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Raphael Salaverria — Full Stack Developer",
  description:
    "Portfolio of a Paris-based fullstack developer. Clean interfaces, fluid motion, sharp code.",
  openGraph: {
    title: "Raphael Salaverria — Full Stack Developer",
    description: "Paris-based fullstack developer. Clean. Sharp. Fluid.",
    url: "https://tondomaine.dev", // ← à remplacer quand tu as ton domaine
    siteName: "Raphael Salaverria",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raphael Salaverria — Full Stack Developer",
    description: "Paris-based fullstack developer. Clean. Sharp. Fluid.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSans.variable}`}>
      <body className="bg-[#0a0a0a] text-[#f5f0e8] antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}