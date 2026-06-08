"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { about } from "@/lib/data";
import { staggerContainer, fadeUp } from "@/lib/motion";

export default function Approach() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="approach"
      ref={ref}
      className="py-16 md:py-20 border-t border-[#141414]"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">

        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-12 max-w-2xl"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
            <span className="block h-px w-8 bg-[#c9a84c]" />
            <span className="text-[#c9a84c] text-[13px] tracking-[0.28em] uppercase">
              Way of working
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="text-[44px] md:text-[56px] font-light leading-[0.95] text-[#f5f0e8] mb-5"
          >
            How I work
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-[#a09888] text-[15px] leading-[1.9] tracking-[0.02em]"
          >
            {about.approachIntro}
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {about.approach.map((item, index) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              className="group relative border border-[#1e1e1e] hover:border-[#c9a84c33] transition-all duration-500 p-7 flex flex-col gap-4 overflow-hidden"
            >
              {/* Halo doré au survol */}
              <div
                aria-hidden
                className="absolute -top-16 -right-16 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{
                  background:
                    "radial-gradient(circle, rgba(201,168,76,0.18), transparent 70%)",
                }}
              />

              {/* Numéro + ligne */}
              <div className="flex items-center gap-3">
                <span className="text-[#c9a84c] text-[13px] tracking-[0.2em] tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="block h-px w-6 bg-[#2a2a2a] group-hover:bg-[#c9a84c] transition-colors duration-500" />
              </div>

              <h3 className="text-xl font-light text-[#f5f0e8] group-hover:text-[#c9a84c] transition-colors duration-300 leading-snug">
                {item.title}
              </h3>

              <p className="text-[#888] text-[13px] leading-[1.85]">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto pt-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] tracking-[0.15em] uppercase text-[#777] border border-[#2a2a2a] px-2.5 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
