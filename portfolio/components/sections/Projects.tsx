"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
  SiReact, SiVite, SiTailwindcss, SiDaisyui,
  SiNodedotjs, SiExpress, SiSpotify,
  SiNextdotjs, SiPrisma, SiVercel, SiShadcnui,
  SiGithub, SiTypescript,
} from "react-icons/si";
import { projects } from "@/lib/data";
import { staggerContainer, fadeUp } from "@/lib/motion";
import type { Project } from "@/lib/data";

const techIcons: Record<string, { icon: React.ReactElement; color: string }> = {
  "React":        { icon: <SiReact />,       color: "#61DAFB" },
  "Vite":         { icon: <SiVite />,        color: "#646CFF" },
  "Tailwind":     { icon: <SiTailwindcss />, color: "#06B6D4" },
  "Tailwind CSS": { icon: <SiTailwindcss />, color: "#06B6D4" },
  "DaisyUI":      { icon: <SiDaisyui />,     color: "#FF9903" },
  "Node.js":      { icon: <SiNodedotjs />,   color: "#339933" },
  "Express":      { icon: <SiExpress />,     color: "#888"    },
  "Spotify API":  { icon: <SiSpotify />,     color: "#1DB954" },
  "Next.js":      { icon: <SiNextdotjs />,   color: "#f5f0e8" },
  "Prisma":       { icon: <SiPrisma />,      color: "#2D3748" },
  "Vercel":       { icon: <SiVercel />,      color: "#f5f0e8" },
  "GitHub OAuth": { icon: <SiGithub />,      color: "#f5f0e8" },
  "shadcn/ui":    { icon: <SiShadcnui />,    color: "#f5f0e8" },
  "TypeScript":   { icon: <SiTypescript />,  color: "#3178C6" },
};

const statusLabel: Record<Project["status"], string> = {
  live: "Live",
  wip: "In progress",
  archived: "Archived",
};

const statusColor: Record<Project["status"], string> = {
  live: "text-green-500 border-green-500/20 bg-green-500/5",
  wip: "text-[#c9a84c] border-[#c9a84c33] bg-[#c9a84c08]",
  archived: "text-[#666] border-[#2a2a2a] bg-transparent",
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      variants={fadeUp}
      custom={index}
      className="group relative border border-[#1a1a1a] hover:border-[#c9a84c33] transition-all duration-500 p-6 md:p-8 flex flex-col gap-5 bg-[#0a0a0a] hover:bg-[#0f0f0f] h-full"
    >
      {/* Top row */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-1.5">
          <span className="text-[#333] text-4xl font-light leading-none select-none">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="text-[#f5f0e8] text-2xl md:text-3xl font-light group-hover:text-[#c9a84c] transition-colors duration-300">
            {project.title}
          </h3>
        </div>

        <span className={`shrink-0 mt-1 px-3 py-1 text-[10px] tracking-[0.18em] uppercase border rounded-full ${statusColor[project.status]}`}>
          {statusLabel[project.status]}
        </span>
      </div>

      {/* Description */}
      <p className="text-[#888] text-[13px] leading-[1.85] tracking-[0.02em] flex-1">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => {
          const tech = techIcons[tag];
          return (
            <span
              key={tag}
              className="flex items-center gap-1.5 text-[10px] tracking-[0.15em] uppercase text-[#777] border border-[#2a2a2a] px-2.5 py-1"
            >
              {tech && (
                <span style={{ color: tech.color }} className="text-[12px] shrink-0">
                  {tech.icon}
                </span>
              )}
              {tag}
            </span>
          );
        })}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-2 border-t border-[#1e1e1e]">
        <span className="text-[11px] tracking-[0.2em] text-[#555] uppercase">
          {project.year}
        </span>

        <div className="flex items-center gap-4">
          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] tracking-[0.18em] uppercase text-[#777] hover:text-[#c9a84c] transition-colors duration-300"
            >
              GitHub
            </Link>
          )}
          {project.href && (
            <Link
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] tracking-[0.18em] uppercase text-[#c9a84c] hover:text-[#e8d5a3] transition-colors duration-300 flex items-center gap-1.5"
            >
              Visit
              <span className="text-base leading-none">↗</span>
            </Link>
          )}
        </div>
      </div>

      {/* Hover line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-[#c9a84c] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </motion.article>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" ref={ref} className="px-6 md:px-16 lg:px-24 py-16 md:py-20 border-t border-[#141414]">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="flex items-end justify-between mb-10 gap-4 flex-wrap"
      >
        <div>
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
            <span className="block h-px w-8 bg-[#c9a84c]" />
            <span className="text-[#c9a84c] text-[11px] tracking-[0.28em] uppercase">
              Selected work
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="text-[44px] md:text-[56px] font-light leading-[0.95] text-[#f5f0e8]"
          >
            Projects
          </motion.h2>
        </div>

        <motion.span
          variants={fadeUp}
          className="text-[#666] text-[11px] tracking-[0.2em] uppercase"
        >
          {projects.length} projects
        </motion.span>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#141414] items-stretch"
      >
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </motion.div>
    </section>
  );
}