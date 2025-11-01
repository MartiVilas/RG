import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { useEffect, useRef, useState } from 'react'

import {GAMES} from '../db/infos'

export default function NuestrosJuegos() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [canLeft, setCanLeft] = useState(false)
  const [canRight, setCanRight] = useState(true)


  const CARD_WIDTH = 400 
  const GAP = 32 
  const ARROW_SIZE = 44 
  const ARROW_MARGIN = 12 
  const GUTTER = ARROW_SIZE + ARROW_MARGIN 

 
  const updateArrows = () => {
    const el = trackRef.current
    if (!el) return
    setCanLeft(el.scrollLeft > 0)
    const epsilon = 1
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - epsilon)
  }

  useEffect(() => {
    updateArrows()
    const el = trackRef.current
    if (!el) return
    el.addEventListener('scroll', updateArrows, { passive: true })
    window.addEventListener('resize', updateArrows)
    return () => {
      el.removeEventListener('scroll', updateArrows)
      window.removeEventListener('resize', updateArrows)
    }
  }, [])

  const scrollByCards = (n: number) => {
    trackRef.current?.scrollBy({ left: n * (CARD_WIDTH + GAP), behavior: 'smooth' })
  }

  return (
    <section className="bg-black text-white w-full px-0 py-10">
      <h2 className="text-l tracking-wide text-white mb-6 text-center">NUESTROS JUEGOS</h2>

      <div className="relative w-full">
        {/* Flecha izquierda */}
        <button
          aria-label="Anterior"
          onClick={() => scrollByCards(-1)}
          disabled={!canLeft}
          className="
            absolute left-3 top-1/2 -translate-y-1/2 z-10
            hidden md:flex items-center justify-center
            w-11 h-11 rounded-full backdrop-blur
            transition
            disabled:opacity-30 disabled:cursor-not-allowed
            bg-white/10 hover:bg-white/20
          "
        >
          <ChevronLeftIcon />
        </button>

        <div
          ref={trackRef}
          className="
            flex gap-8
            overflow-x-auto overflow-y-hidden
            scroll-smooth
            snap-x snap-mandatory
            pb-4
            [scrollbar-width:none]
          "
          style={{
            WebkitOverflowScrolling: 'touch',
            msOverflowStyle: 'none',
            paddingLeft: GUTTER,
            paddingRight: GUTTER,
          }}
        >
          <style>{`div::-webkit-scrollbar{display:none}`}</style>

          {GAMES.map((g) => (
            <a
              key={g.title}
              href={g.href}
              target="_blank"
              rel="noreferrer"
              className="
                group relative shrink-0 snap-start
                w-[min(85vw,400px)]
                rounded-xl overflow-hidden
                shadow-[0_8px_0_rgba(0,0,0,0.25)]
                transition-transform duration-300 hover:scale-[1.05]
              "
            >
              <div
                className="aspect-[16/9] bg-center bg-cover transition-transform duration-300 group-hover:scale-[1.08]"
                style={{ backgroundImage: `url(${g.img})` }}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4 flex items-end justify-between">
                <div>
                  <h3 className="text-lg font-semibold drop-shadow">{g.title}</h3>
                  {g.tag && (
                    <span className="mt-1 inline-block text-[11px] px-2 py-0.5 rounded bg-white/10">
                      {g.tag}
                    </span>
                  )}
                </div>
                <div className="translate-y-1 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <ChevronRightIcon />
                </div>
              </div>
            </a>
          ))}
        </div>

        <button
          aria-label="Siguiente"
          onClick={() => scrollByCards(1)}
          disabled={!canRight}
          className="
            absolute right-3 top-1/2 -translate-y-1/2 z-10
            hidden md:flex items-center justify-center
            w-11 h-11 rounded-full backdrop-blur
            transition
            disabled:opacity-30 disabled:cursor-not-allowed
            bg-white/10 hover:bg-white/20
          "
        >
          <ChevronRightIcon />
        </button>
      </div>
    </section>
  )
}
