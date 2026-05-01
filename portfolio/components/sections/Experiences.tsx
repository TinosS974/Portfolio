"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { experiences, education, about } from "@/lib/data";
import { staggerContainer, fadeUp, fadeIn } from "@/lib/motion";

export default function Experiences() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    { label: "Front-end", items: about.skills.frontend },
    { label: "Back-end", items: about.skills.backend },
    { label: "Database", items: about.skills.database },
    { label: "DevOps", items: about.skills.devops },
    { label: "Testing", items: about.skills.testing },
    { label: "Methods", items: about.skills.methods },
  ];

  return (
    <section id="experience" ref={ref} className="py-16 md:py-20 border-t border-[#141414]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">

        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-10"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
            <span className="block h-px w-8 bg-[#c9a84c]" />
            <span className="text-[#c9a84c] text-[11px] tracking-[0.28em] uppercase">
              Background
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-[Cormorant_Variable] text-[44px] md:text-[56px] font-light leading-[0.95] text-[#f5f0e8]"
          >
            Experience
          </motion.h2>
        </motion.div>

        {/* Layout 2 colonnes */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12 lg:gap-16">

          {/* Colonne gauche */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="flex flex-col"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={fadeUp}
                className="group relative flex gap-6 md:gap-8 pb-10 last:pb-0"
              >
                {/* Timeline */}
                <div className="flex flex-col items-center pt-1 shrink-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#333] group-hover:bg-[#c9a84c] transition-colors duration-300 mt-[5px]" />
                  {index < experiences.length - 1 && (
                    <div className="w-px flex-1 bg-[#222] mt-3" />
                  )}
                </div>

                {/* Contenu */}
                <div className="flex flex-col gap-3 pb-2">
                  <span className="text-[10px] tracking-[0.22em] uppercase text-[#666]">
                    {exp.period}
                  </span>

                  <div>
                    <h3 className="font-[Cormorant_Variable] text-xl md:text-2xl font-light text-[#f5f0e8] group-hover:text-[#c9a84c] transition-colors duration-300">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[12px] tracking-[0.12em] text-[#888]">
                        {exp.company}
                      </span>
                      <span className="text-[#444]">·</span>
                      <span className="text-[12px] tracking-[0.12em] text-[#777]">
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <p className="text-[#888] text-[13px] leading-[1.85]">
                    {exp.description}
                  </p>

                  <ul className="flex flex-col gap-1.5">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-3 text-[12px] text-[#777] leading-[1.7]">
                        <span className="text-[#c9a84c] mt-[5px] shrink-0 text-[8px]">◆</span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] tracking-[0.15em] uppercase text-[#777] border border-[#2a2a2a] px-2.5 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Colonne droite — Education + Skills */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="flex flex-col gap-px"
          >
            {/* Education label */}
            <motion.div variants={fadeIn} className="flex items-center gap-3 mb-6">
              <span className="block h-px w-6 bg-[#333]" />
              <span className="text-[#666] text-[10px] tracking-[0.28em] uppercase">
                Education
              </span>
            </motion.div>

            {education.map((edu) => (
              <motion.div
                key={edu.id}
                variants={fadeUp}
                className="group border border-[#1e1e1e] hover:border-[#c9a84c22] transition-all duration-500 p-4 flex flex-col gap-2.5 mb-3 last:mb-0"
              >
                <div className="flex items-start justify-between gap-3">
                  <h4 className="font-[Cormorant_Variable] text-lg font-light text-[#f5f0e8] group-hover:text-[#c9a84c] transition-colors duration-300 leading-snug">
                    {edu.school}
                  </h4>
                  <span className="text-[10px] tracking-[0.15em] text-[#666] uppercase shrink-0 mt-1">
                    {edu.period}
                  </span>
                </div>

                <p className="text-[12px] tracking-[0.06em] text-[#c9a84c] font-light">
                  {edu.degree}
                </p>

                <p className="text-[12px] text-[#777] leading-[1.75]">
                  {edu.description}
                </p>

                <span className="text-[10px] tracking-[0.18em] uppercase text-[#555]">
                  {edu.location}
                </span>
              </motion.div>
            ))}

            {/* Skills */}
            <motion.div variants={fadeUp} className="mt-8">
              <div className="flex items-center gap-3 mb-5">
                <span className="block h-px w-6 bg-[#333]" />
                <span className="text-[#666] text-[10px] tracking-[0.28em] uppercase">
                  Skills
                </span>
              </div>

              <div className="flex flex-col gap-4">
                {skillCategories.map((cat) => (
                  <motion.div key={cat.label} variants={fadeUp}>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-[#c9a84c] block mb-1.5">
                      {cat.label}
                    </span>
                    <p className="text-[11px] text-[#777] leading-[1.7]">
                      {cat.items.join(" · ")}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}