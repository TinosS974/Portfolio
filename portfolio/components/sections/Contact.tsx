"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { about } from "@/lib/data";
import { staggerContainer, fadeUp, fadeIn, expandLine } from "@/lib/motion";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText(about.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="px-6 md:px-16 lg:px-24 py-24 md:py-32 border-t border-[#141414]"
    >
      {/* Header */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="mb-16"
      >
        <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
          <span className="block h-px w-8 bg-[#c9a84c]" />
          <span className="text-[#c9a84c] text-[11px] tracking-[0.28em] uppercase">
            Contact
          </span>
        </motion.div>

        <motion.h2
          variants={fadeUp}
          className="font-[Cormorant_Variable] text-[52px] md:text-[72px] font-light leading-[0.92] text-[#f5f0e8]"
        >
          Let&apos;s work<br />
          <span className="italic text-[#c9a84c]">together.</span>
        </motion.h2>
      </motion.div>

      {/* Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

        {/* Gauche — email + socials + status */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col gap-8"
        >
          <motion.p
            variants={fadeUp}
            className="text-[#555] text-[13px] leading-[1.9] tracking-[0.02em] max-w-sm"
          >
            Open to freelance missions, full-time roles or one-off collaborations.
            Feel free to reach out.
          </motion.p>

          {/* Email block */}
          <motion.div variants={fadeUp} className="flex flex-col gap-2">
            <span className="text-[10px] tracking-[0.22em] uppercase text-[#333]">
              Email
            </span>
            <div className="flex items-center gap-4 flex-wrap">
              <span className="font-[Cormorant_Variable] text-2xl font-light text-[#f5f0e8]">
                {about.email}
              </span>
              <button
                onClick={handleCopyEmail}
                className="text-[10px] tracking-[0.2em] uppercase border border-[#1e1e1e] px-3 py-1.5 text-[#444] hover:border-[#c9a84c33] hover:text-[#c9a84c] transition-all duration-300"
              >
                {copied ? "Copied ✓" : "Copy"}
              </button>
            </div>
          </motion.div>

          {/* Socials */}
          <motion.div
            variants={staggerContainer}
            className="flex flex-col border border-[#141414]"
          >
            {[
              { label: "LinkedIn", href: about.social.linkedin },
              { label: "GitHub", href: about.social.github },
            ].map((link) =>
              link.href ? (
                <motion.div key={link.label} variants={fadeIn}>
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-5 py-4 border-b border-[#141414] last:border-b-0 group hover:bg-[#0f0f0f] transition-colors duration-300"
                  >
                    <span className="text-[11px] tracking-[0.2em] uppercase text-[#444] group-hover:text-[#c9a84c] transition-colors duration-300">
                      {link.label}
                    </span>
                    <span className="text-[#333] group-hover:text-[#c9a84c] transition-colors duration-300">
                      ↗
                    </span>
                  </Link>
                </motion.div>
              ) : null
            )}
          </motion.div>

          <motion.div variants={fadeUp} className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
            <span className="text-[10px] tracking-[0.22em] uppercase text-[#444]">
              Available · Paris, France · Remote friendly
            </span>
          </motion.div>
        </motion.div>

        {/* Droite — citation alignée sur le bloc socials */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col"
        >
          {/* Spacer qui pousse la citation au niveau du bloc email/socials */}
          <div className="flex flex-col gap-8">
            {/* Espace équivalent au paragraphe intro gauche */}
            <div className="text-[13px] leading-[1.9] opacity-0 select-none pointer-events-none">
              Open to freelance missions, full-time roles or one-off collaborations.
              Feel free to reach out.
            </div>

            {/* Espace équivalent au bloc email gauche */}
            <div className="opacity-0 select-none pointer-events-none flex flex-col gap-2">
              <span className="text-[10px]">Email</span>
              <span className="text-2xl">placeholder</span>
            </div>

            {/* Citation — alignée avec le bloc socials */}
            <motion.div variants={fadeUp} className="flex flex-col">
              <motion.div
                variants={expandLine}
                className="w-12 h-px bg-[#c9a84c] mb-8"
              />
              <motion.p
                variants={fadeUp}
                className="font-[Cormorant_Variable] text-[36px] md:text-[48px] font-light italic text-[#222] leading-[1.1]"
              >
                Build clean.<br />Ship fast.<br />Care about the details.
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="mt-20 pt-8 border-t border-[#141414] flex items-center justify-between flex-wrap gap-4"
      >
        <motion.span
          variants={fadeIn}
          className="font-[Cormorant_Variable] text-[#2a2a2a] text-lg tracking-[0.14em] uppercase"
        >
          {about.initials}
        </motion.span>

        <motion.span
          variants={fadeIn}
          className="text-[10px] tracking-[0.18em] uppercase text-[#2a2a2a]"
        >
          © {new Date().getFullYear()} {about.name}
        </motion.span>

        <motion.span
          variants={fadeIn}
          className="text-[10px] tracking-[0.18em] uppercase text-[#2a2a2a]"
        >
          Paris · La Réunion
        </motion.span>
      </motion.div>
    </section>
  );
}