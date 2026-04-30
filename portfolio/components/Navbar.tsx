"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { about } from "@/lib/data";

const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Ferme le menu si on resize vers desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#1a1a1a]"
            : "bg-transparent"
        }`}
      >
        <nav className="flex items-center justify-between px-6 md:px-10 py-5">
          {/* Logo / Initiales */}
          
            <a href="#"
            className="font-[Cormorant_Variable] text-[#c9a84c] text-lg tracking-[0.14em] uppercase font-light hover:opacity-70 transition-opacity duration-300"
          >
            {about.initials}
          </a>

          {/* Links — desktop */}
          <ul className="hidden md:flex gap-8 list-none">
            {navLinks.map((link) => (
              <li key={link.label}>
                
                  <a href={link.href}
                  className="text-[#666] text-[11px] tracking-[0.2em] uppercase hover:text-[#c9a84c] transition-colors duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Burger — mobile */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden flex flex-col gap-[5px] p-1 group"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-px w-6 bg-[#666] transition-all duration-300 origin-center ${
                menuOpen ? "rotate-45 translate-y-[7px] bg-[#c9a84c]" : ""
              }`}
            />
            <span
              className={`block h-px w-6 bg-[#666] transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-px w-6 bg-[#666] transition-all duration-300 origin-center ${
                menuOpen ? "-rotate-45 -translate-y-[7px] bg-[#c9a84c]" : ""
              }`}
            />
          </button>
        </nav>
      </motion.header>

      {/* Menu mobile — fullscreen overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[#0a0a0a]/95 backdrop-blur-md flex flex-col items-center justify-center gap-10"
          >
            {/* Ligne déco top */}
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{
                background:
                  "linear-gradient(90deg, transparent 0%, #c9a84c 30%, #e8d5a3 60%, transparent 100%)",
              }}
            />

            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={handleLinkClick}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="font-[Cormorant_Variable] text-5xl font-light text-[#f5f0e8] tracking-wide hover:text-[#c9a84c] transition-colors duration-300"
              >
                {link.label}
              </motion.a>
            ))}

            {/* Email en bas */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="absolute bottom-10 text-[#444] text-[11px] tracking-[0.2em] uppercase"
            >
              {about.email}
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}