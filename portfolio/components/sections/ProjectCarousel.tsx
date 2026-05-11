'use client'
import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

export default function ProjectCarousel({ images }: { images: string[] }) {
  const [idx, setIdx] = useState(0)
  const [dir, setDir] = useState(1)

  const move = (direction: number) => {
    setDir(direction)
    setIdx(i => (i + direction + images.length) % images.length)
  }

  return (
    <div className="relative overflow-hidden rounded-sm aspect-video bg-[#111] group/carousel">
      <AnimatePresence initial={false} custom={dir}>
        <motion.div
          key={idx}
          custom={dir}
          variants={{
            enter: (d) => ({ x: d > 0 ? '100%' : '-100%', opacity: 0 }),
            center: { x: 0, opacity: 1 },
            exit: (d) => ({ x: d > 0 ? '-100%' : '100%', opacity: 0 }),
          }}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute inset-0"
        >
          <Image
            src={images[idx]}
            alt={`Screenshot ${idx + 1}`}
            fill
            className="object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
      </AnimatePresence>

      {/* Prev / Next — visibles uniquement au hover de la card parente */}
      {images.length > 1 && (
        <>
          <button
            onClick={() => move(-1)}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/70 border border-[#c9a84c33] text-[#c9a84c] flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 hover:border-[#c9a84c88] z-10"
          >
            ←
          </button>
          <button
            onClick={() => move(1)}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/70 border border-[#c9a84c33] text-[#c9a84c] flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 hover:border-[#c9a84c88] z-10"
          >
            →
          </button>
        </>
      )}

      {/* Dots + counter */}
      <div className="absolute bottom-2 right-3 flex items-center gap-2 z-10">
        <span className="text-[9px] tracking-[0.15em] text-[#444]">
          {idx + 1} / {images.length}
        </span>
        <div className="flex gap-1">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDir(i > idx ? 1 : -1); setIdx(i) }}
              className={`w-1 h-1 rounded-full transition-all duration-300 ${
                i === idx ? 'bg-[#c9a84c] scale-125' : 'bg-[#333]'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}