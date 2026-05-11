"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { fadeUp, fadeIn, staggerContainer, slideLeft, expandLine } from "@/lib/motion";
import { about } from "@/lib/data";
import Projects from "@/components/sections/Projects";
import Experiences from "@/components/sections/Experiences";
import Contact from "@/components/sections/Contact";

// Techs — plus de gold/non-gold, on gère le style via le composant animé
const techStack = [
  "Next.js",
  "TypeScript",
  "React · Node.js",
  "Framer Motion",
  "Django · PostgreSQL",
];

export default function Home() {
  return (
    <>
      {/* Styles injectés pour l'animation de vague — plus léger qu'une lib externe */}
      <style>{`
        @keyframes waveShift {
          0%   { background-position: 0% 50%;   }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%;   }
        }

        .tech-wave {
          background: linear-gradient(
            90deg,
            #2a2a2a 0%,
            #2a2a2a 30%,
            #c9a84c 50%,
            #e8d5a3 60%,
            #c9a84c 70%,
            #2a2a2a 90%,
            #2a2a2a 100%
          );
          background-size: 250% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
          animation: waveShift 5s ease-in-out infinite;
          /* Chaque ligne décalée pour que la vague se propage de haut en bas */
        }

        .tech-wave-1 { animation-delay: 0s;    }
        .tech-wave-2 { animation-delay: 0.3s;  }
        .tech-wave-3 { animation-delay: 0.6s;  }
        .tech-wave-4 { animation-delay: 0.9s;  }
        .tech-wave-5 { animation-delay: 1.2s;  }
      `}</style>

      <main className="relative min-h-screen overflow-hidden bg-[#0a0a0a]">

        {/* Ligne dorée top */}
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
                <h1 className="text-[72px] md:text-[96px] lg:text-[120px] leading-[0.88] font-black text-[#f5f0e8]">
                  {about.name.split(" ")[0]}
                  <br />
                  <span className="italic text-[#c9a84c]">{about.name.split(" ")[1]}</span>
                </h1>
              </motion.div>

              {/* Stack avec vague animée */}
              <motion.div variants={fadeUp} className="lg:text-right pb-2 shrink-0 max-w-xs">
                {techStack.map((label, i) => (
                  <p
                    key={label}
                    className={`tech-wave tech-wave-${i + 1} text-[22px] md:text-[26px] leading-[1.4] font-light`}
                  >
                    {label}
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
                {/* Paragraphe principal — bien visible */}
                <p className="text-[#b8b0a0] text-[15px] leading-[1.9] tracking-[0.02em] mb-4">
                  {about.bio[0]}
                </p>
                {/* Paragraphes secondaires — hiérarchie claire mais lisibles */}
                <p className="text-[#666] text-[14px] leading-[1.9] tracking-[0.02em] mb-2">
                  {about.bio[1]}
                </p>
                <p className="text-[#666] text-[14px] leading-[1.9] tracking-[0.02em]">
                  {about.bio[2]}
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