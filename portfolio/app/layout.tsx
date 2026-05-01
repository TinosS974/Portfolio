import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Raphael Salaverria — Full Stack Developer",
  description: "Portfolio of a Paris-based fullstack developer. Clean interfaces, fluid motion, sharp code.",
  openGraph: {
    title: "Raphael Salaverria — Full Stack Developer",
    description: "Paris-based fullstack developer. Clean. Sharp. Fluid.",
    url: "https://r-salaverria.fr",
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#0a0a0a] antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}