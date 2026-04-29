"use client";

import { motion } from "framer-motion";
import { fadeUp, fadeIn, staggerContainer, slideLeft, expandLine } from "@/lib/motion";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0a0a0a]">

      {/* Ligne dorée top */}
      <motion.div
        variants={expandLine}
        initial="hidden"
        animate="visible"
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, #c9a84c 30%, #e8d5a3 60%, transparent 100%)",
        }}
      />

      {/* Navbar */}
      <motion.nav
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex items-center justify-between px-10 py-7"
      >
        <motion.span
          variants={fadeIn}
          className="font-[Cormorant_Variable] text-[#c9a84c] text-lg tracking-[0.14em] uppercase font-light"
        >
          YN {/* ← Remplace par tes initiales */}
        </motion.span>

        <motion.ul
          variants={staggerContainer}
          className="flex gap-8 list-none"
        >
          {["Work", "About", "Contact"].map((item) => (
            <motion.li
              key={item}
              variants={fadeIn}
              className="text-[#666] text-[11px] tracking-[0.2em] uppercase hover:text-[#c9a84c] transition-colors duration-300 cursor-pointer"
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>
      </motion.nav>

      {/* Hero content */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 px-10 pt-16 pb-24"
      >
        {/* Eyebrow */}
        <motion.div variants={slideLeft} className="flex items-center gap-3 mb-8">
          <motion.span
            variants={expandLine}
            className="block h-px w-8 bg-[#c9a84c]"
          />
          <span className="text-[#c9a84c] text-[11px] tracking-[0.28em] uppercase">
            Based in Paris · From La Réunion
          </span>
        </motion.div>

        {/* Titre principal */}
        <div className="overflow-hidden mb-3">
          <motion.h1
            variants={fadeUp}
            className="font-[Cormorant_Variable] text-[80px] leading-[0.95] font-light text-[#f5f0e8]"
          >
            Design &
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-8">
          <motion.h1
            variants={fadeUp}
            className="font-[Cormorant_Variable] text-[80px] leading-[0.95] font-light italic text-[#c9a84c]"
          >
            Code.
          </motion.h1>
        </div>

        {/* Sous-titre */}
        <motion.p
          variants={fadeUp}
          className="text-[#555] text-[13px] tracking-[0.08em] leading-[1.9] max-w-xs mb-12"
        >
          Developer crafting clean digital experiences.
          <br />
          Sharp interfaces. Fluid motion. No noise.
        </motion.p>

        {/* Tags */}
        <motion.div variants={staggerContainer} className="flex gap-2 flex-wrap mb-14">
          {[
            { label: "Next.js", gold: true },
            { label: "Framer Motion", gold: true },
            { label: "TypeScript", gold: false },
            { label: "UI / UX", gold: false },
          ].map((tag) => (
            <motion.span
              key={tag.label}
              variants={fadeUp}
              className={`px-3 py-1 rounded-full text-[10px] tracking-[0.18em] uppercase border ${
                tag.gold
                  ? "border-[#c9a84c44] text-[#c9a84c] bg-[#c9a84c0a]"
                  : "border-[#2a2a2a] text-[#666]"
              }`}
            >
              {tag.label}
            </motion.span>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div variants={fadeUp} className="flex items-center gap-5">
          <button className="px-7 py-3 bg-[#c9a84c] text-[#0a0a0a] text-[11px] tracking-[0.22em] uppercase hover:bg-[#e8d5a3] transition-colors duration-300">
            View work
          </button>
          <button className="px-7 py-3 border border-[#2a2a2a] text-[#666] text-[11px] tracking-[0.22em] uppercase hover:border-[#c9a84c44] hover:text-[#c9a84c] transition-all duration-300">
            Get in touch
          </button>
        </motion.div>
      </motion.section>

      {/* Deco cercle — bas droite */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="absolute bottom-10 right-10 opacity-[0.06] pointer-events-none"
      >
        <svg width="260" height="260" viewBox="0 0 260 260" fill="none">
          <circle cx="130" cy="130" r="128" stroke="#c9a84c" strokeWidth="0.5" />
          <circle cx="130" cy="130" r="90" stroke="#c9a84c" strokeWidth="0.5" />
          <line x1="2" y1="130" x2="258" y2="130" stroke="#c9a84c" strokeWidth="0.5" />
          <line x1="130" y1="2" x2="130" y2="258" stroke="#c9a84c" strokeWidth="0.5" />
          <circle cx="130" cy="130" r="4" fill="#c9a84c" opacity="0.5" />
        </svg>
      </motion.div>

      {/* Status — bas gauche */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="absolute bottom-7 left-10 flex items-center gap-2 text-[10px] tracking-[0.16em] uppercase text-[#444]"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
        Available for projects
      </motion.div>
    </main>
  );
}