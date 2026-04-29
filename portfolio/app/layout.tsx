import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Ton Prénom — Developer & Designer",
  description:
    "Portfolio of a Paris-based developer. Clean interfaces, fluid motion, sharp code.",
  openGraph: {
    title: "Ton Prénom — Developer & Designer",
    description: "Paris-based developer. Clean. Sharp. Fluid.",
    url: "https://tondomaine.dev",
    siteName: "Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ton Prénom — Developer & Designer",
    description: "Paris-based developer. Clean. Sharp. Fluid.",
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
        {children}
      </body>
    </html>
  );
}