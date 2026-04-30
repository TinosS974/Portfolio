"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { fadeUp, fadeIn, staggerContainer, slideLeft, expandLine } from "@/lib/motion";
import { about } from "@/lib/data";
import Projects from "@/components/sections/Projects";
import Experiences from "@/components/sections/Experiences";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <main className="relative min-h-screen overflow-hidden bg-[#0a0a0a]">

        <motion.div
          variants={expandLine}
          initial="hidden"
          animate="visible"
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background: "linear-gradient(90deg, transparent 0%, #c9a84c 30%, #e8d5a3 60%, transparent 100%)",
          }}
        />

        <motion.section
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative z-10 min-h-screen px-6 md:px-16 lg:px-24 pt-32 pb-16 flex flex-col justify-between"
        >
          <div>
            {/* Eyebrow */}
            <motion.div variants={slideLeft} className="flex items-center gap-3 mb-16">
              <motion.span variants={expandLine} className="block h-px w-8 bg-[#c9a84c]" />
              <span className="text-[#c9a84c] text-[11px] tracking-[0.28em] uppercase">
                Based in Paris · From La Réunion
              </span>
            </motion.div>

            {/* Nom + stack */}
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
              <motion.div variants={fadeUp}>
                <h1 className="font-[Cormorant_Variable] text-[72px] md:text-[96px] lg:text-[120px] leading-[0.88] font-light text-[#f5f0e8]">
                  {about.name.split(" ")[0]}
                  <br />
                  <span className="italic text-[#c9a84c]">{about.name.split(" ")[1]}</span>
                </h1>
              </motion.div>

              <motion.div variants={fadeUp} className="lg:text-right pb-2 shrink-0 max-w-xs">
                {[
                  { label: "Next.js", gold: true },
                  { label: "TypeScript", gold: false },
                  { label: "React · Node.js", gold: false },
                  { label: "Framer Motion", gold: true },
                  { label: "PostgreSQL · Docker", gold: false },
                ].map((tech) => (
                  <p
                    key={tech.label}
                    className={`font-[Cormorant_Variable] text-[22px] md:text-[26px] leading-[1.4] font-light ${
                      tech.gold ? "text-[#c9a84c]" : "text-[#2e2e2e]"
                    }`}
                  >
                    {tech.label}
                  </p>
                ))}
              </motion.div>
            </div>

            {/* Ligne séparatrice */}
            <motion.div
              variants={expandLine}
              className="h-px w-full mb-10"
              style={{
                background: "linear-gradient(90deg, #1a1a1a 0%, rgba(201,168,76,0.15) 50%, transparent 100%)",
              }}
            />

            {/* Bio + CTA */}
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
              <motion.div variants={fadeUp} className="max-w-lg">
                <p className="text-[#c8c0b0] text-[14px] leading-[1.9] tracking-[0.02em] mb-3">
                  {about.bio[0]}
                </p>
                <p className="text-[#555] text-[12px] leading-[1.9] tracking-[0.02em]">
                  {about.bio[1]}
                </p>
              </motion.div>

              <motion.div variants={fadeUp} className="flex items-center gap-5 flex-wrap shrink-0">
                <Link
                  href="#projects"
                  className="px-7 py-3 bg-[#c9a84c] text-[#0a0a0a] text-[11px] tracking-[0.22em] uppercase hover:bg-[#e8d5a3] transition-colors duration-300"
                >
                  View work
                </Link>
                <Link
                  href="#contact"
                  className="px-7 py-3 border border-[#2a2a2a] text-[#666] text-[11px] tracking-[0.22em] uppercase hover:border-[#c9a84c44] hover:text-[#c9a84c] transition-all duration-300"
                >
                  Get in touch
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Bas — interests + status */}
          <motion.div
            variants={fadeIn}
            className="flex items-center justify-between flex-wrap gap-4 pt-10"
          >
            <div className="flex items-center gap-3 flex-wrap">
              {about.interests.map((interest) => (
                <span
                  key={interest}
                  className="text-[10px] tracking-[0.22em] uppercase text-[#333] border border-[#1a1a1a] px-3 py-1.5"
                >
                  {interest}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-2 text-[10px] tracking-[0.16em] uppercase text-[#444]">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
              Available for projects
            </div>
          </motion.div>
        </motion.section>

      </main>

      <Projects />
      <Experiences />
      <Contact />
    </>
  );
}