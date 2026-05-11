'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import {
  SiReact, SiVite, SiTailwindcss, SiDaisyui,
  SiNodedotjs, SiExpress, SiSpotify,
  SiNextdotjs, SiPrisma, SiVercel, SiShadcnui,
  SiGithub, SiTypescript,
} from 'react-icons/si'
import { HiArrowUpRight, HiXMark, HiChevronLeft, HiChevronRight } from 'react-icons/hi2'
import type { Project } from '@/lib/data'

const techIcons: Record<string, { icon: React.ReactElement; color: string }> = {
  'React':        { icon: <SiReact />,       color: '#61DAFB' },
  'Vite':         { icon: <SiVite />,        color: '#646CFF' },
  'Tailwind':     { icon: <SiTailwindcss />, color: '#06B6D4' },
  'Tailwind CSS': { icon: <SiTailwindcss />, color: '#06B6D4' },
  'DaisyUI':      { icon: <SiDaisyui />,     color: '#FF9903' },
  'Node.js':      { icon: <SiNodedotjs />,   color: '#339933' },
  'Express':      { icon: <SiExpress />,     color: '#888'    },
  'Spotify API':  { icon: <SiSpotify />,     color: '#1DB954' },
  'Next.js':      { icon: <SiNextdotjs />,   color: '#f5f0e8' },
  'Prisma':       { icon: <SiPrisma />,      color: '#2D3748' },
  'Vercel':       { icon: <SiVercel />,      color: '#f5f0e8' },
  'GitHub OAuth': { icon: <SiGithub />,      color: '#f5f0e8' },
  'shadcn/ui':    { icon: <SiShadcnui />,    color: '#f5f0e8' },
  'TypeScript':   { icon: <SiTypescript />,  color: '#3178C6' },
}

const statusLabel: Record<Project['status'], string> = {
  live:     'Live',
  wip:      'In progress',
  archived: 'Archived',
}

const statusColor: Record<Project['status'], string> = {
  live:     'text-green-500 border-green-500/20 bg-green-500/5',
  wip:      'text-[#c9a84c] border-[#c9a84c33] bg-[#c9a84c08]',
  archived: 'text-[#666] border-[#2a2a2a] bg-transparent',
}

interface Props {
  project: Project | null
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: Props) {
  const projectKey = project ? `${project.title}-${project.year}` : null
  const [carousel, setCarousel] = useState<{ key: string | null; idx: number; dir: number }>({
    key: null,
    idx: 0,
    dir: 1,
  })

  // Fermer avec Escape
  useEffect(() => {
    if (!project) return
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [project, onClose])

  // Bloquer le scroll body quand la modale est ouverte
  useEffect(() => {
    document.body.style.overflow = project ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [project])

  const images = project?.images ?? []
  const idx = carousel.key === projectKey ? carousel.idx : 0
  const dir = carousel.key === projectKey ? carousel.dir : 1

  const move = (direction: number) => {
    if (!images.length) return
    setCarousel(prev => {
      const currentIdx = prev.key === projectKey ? prev.idx : 0
      return {
        key: projectKey,
        dir: direction,
        idx: (currentIdx + direction + images.length) % images.length,
      }
    })
  }

  return (
    <AnimatePresence>
      {project && (
        // Overlay
        <motion.div
          key="overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/85 backdrop-blur-md"
          onClick={onClose}
        >
          {/* Modale — stopPropagation pour ne pas fermer au clic intérieur */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0f0f0f] border border-[#1e1e1e]"
            onClick={e => e.stopPropagation()}
          >
            {/* Ligne dorée top */}
            <div
              className="h-px w-full"
              style={{
                background:
                  'linear-gradient(90deg, transparent 0%, #c9a84c 30%, #e8d5a3 60%, transparent 100%)',
              }}
            />

            {/* Header */}
            <div className="flex items-start justify-between gap-4 px-6 md:px-8 py-5 border-b border-[#161616]">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] tracking-[0.22em] uppercase text-[#333]">
                  {String((((project as Project & { index?: number }).index ?? -1) + 1)).padStart(2, '0')} — {project.year}
                </span>
                <h2 className="text-2xl md:text-3xl font-light text-[#f5f0e8]">
                  {project.title}
                </h2>
                <span className={`text-[10px] tracking-[0.2em] uppercase mt-0.5 ${statusColor[project.status].split(' ')[0]}`}>
                  {statusLabel[project.status]}
                </span>
              </div>

              <button
                onClick={onClose}
                className="mt-1 w-8 h-8 rounded-full border border-[#2a2a2a] flex items-center justify-center text-[#555] hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors duration-300 shrink-0"
                aria-label="Fermer"
              >
                <HiXMark className="w-4 h-4" />
              </button>
            </div>

            {/* Carousel — uniquement si images */}
            {images.length > 0 && (
              <div className="relative bg-[#080808] overflow-hidden">
                {/* Track */}
                <div className="relative aspect-video overflow-hidden">
                  <AnimatePresence initial={false} custom={dir}>
                    <motion.div
                      key={idx}
                      custom={dir}
                      variants={{
                        enter: (d) => ({ x: d > 0 ? '100%' : '-100%', opacity: 0 }),
                        center: { x: 0, opacity: 1 },
                        exit:  (d) => ({ x: d > 0 ? '-100%' : '100%', opacity: 0 }),
                      }}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={images[idx]}
                        alt={`${project.title} — screenshot ${idx + 1}`}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 768px"
                        priority={idx === 0}
                      />
                    </motion.div>
                  </AnimatePresence>

                  {/* Prev / Next */}
                  {images.length > 1 && (
                    <>
                      <button
                        onClick={() => move(-1)}
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/75 border border-[#c9a84c33] text-[#c9a84c] flex items-center justify-center hover:border-[#c9a84c88] hover:bg-[#c9a84c12] transition-all duration-300 z-10"
                        aria-label="Image précédente"
                      >
                        <HiChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => move(1)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/75 border border-[#c9a84c33] text-[#c9a84c] flex items-center justify-center hover:border-[#c9a84c88] hover:bg-[#c9a84c12] transition-all duration-300 z-10"
                        aria-label="Image suivante"
                      >
                        <HiChevronRight className="w-4 h-4" />
                      </button>
                    </>
                  )}
                </div>

                {/* Footer carousel */}
                <div className="flex items-center justify-between px-4 py-2.5 border-t border-[#161616]">
                  <span className="text-[10px] tracking-[0.15em] uppercase text-[#333]">
                    {project.slideLabels?.[idx] ?? `Screenshot ${idx + 1}`}
                  </span>
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1.5">
                      {images.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => {
                            setCarousel({ key: projectKey, dir: i > idx ? 1 : -1, idx: i })
                          }}
                          className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                            i === idx ? 'bg-[#c9a84c] scale-125' : 'bg-[#2a2a2a] hover:bg-[#444]'
                          }`}
                          aria-label={`Aller à l'image ${i + 1}`}
                        />
                      ))}
                    </div>
                    <span className="text-[10px] tracking-[0.12em] text-[#333]">
                      {idx + 1} / {images.length}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Body */}
            <div className="px-6 md:px-8 py-6 flex flex-col gap-5">
              {/* Description longue si dispo, sinon description courte */}
              <p className="text-[#666] text-[13px] leading-[1.85] tracking-[0.02em]">
                {project.longDescription ?? project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => {
                  const tech = techIcons[tag]
                  return (
                    <span
                      key={tag}
                      className="flex items-center gap-1.5 text-[10px] tracking-[0.15em] uppercase text-[#666] border border-[#1e1e1e] px-2.5 py-1"
                    >
                      {tech && (
                        <span style={{ color: tech.color }} className="text-[13px] shrink-0">
                          {tech.icon}
                        </span>
                      )}
                      {tag}
                    </span>
                  )
                })}
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3 pt-1 border-t border-[#161616]">
                {project.github && (
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 border border-[#1e1e1e] text-[#555] text-[10px] tracking-[0.2em] uppercase hover:border-[#c9a84c33] hover:text-[#c9a84c] transition-all duration-300 flex items-center gap-1.5"
                  >
                    GitHub
                    <HiArrowUpRight className="w-3 h-3" />
                  </Link>
                )}
                {project.href && (
                  <Link
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-[#c9a84c] text-black text-[10px] tracking-[0.2em] uppercase hover:bg-[#e8d5a3] transition-colors duration-300 flex items-center gap-1.5 font-medium"
                  >
                    Visit Live
                    <HiArrowUpRight className="w-3 h-3" />
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}