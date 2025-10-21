import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { useEffect, useRef, useState } from 'react'

import Valorant from './assets/valorant-s25a1-riot-games-homepage-product-card-1920x1080.png'
import TFT from './assets/tft-st1525-platform-riotbar-gamecard-1920x1080-v001-summoner.png'
import LOL from './assets/lol-sn24-1920x1080-kv-final.jpg'
import LOR from './assets/lor-set924-dp-riotbarapplicationswitcher-1920x1080.jpg'
import WR from './assets/wr-2025-patch-5a-kv-1920x1080.png'
import TwoXKO from './assets/rg-com-whoweare-2xko-productcard.jpg'

type Game = {
  title: string
  href: string
  img: string // ruta a la imagen de fondo de la card
  tag?: string // opcional: “PC”, “Móvil”, etc.
}

const GAMES: Game[] = [
  {
    title: 'League of Legends',
    href: 'https://www.leagueoflegends.com/',
    img: LOL,
    tag: 'PC',
  },
  {
    title: 'VALORANT',
    href: 'https://playvalorant.com/',
    img: Valorant,
    tag: 'PC',
  },
  {
    title: 'Teamfight Tactics',
    href: 'https://teamfighttactics.leagueoflegends.com/',
    img: TFT,
    tag: 'PC + Móvil',
  },
  {
    title: 'Legends of Runeterra',
    href: 'https://playruneterra.com/',
    img: LOR,
    tag: 'PC + Móvil',
  },
  {
    title: 'League of Legends: Wild Rift',
    href: 'https://wildrift.leagueoflegends.com/',
    img: WR,
    tag: 'Móvil',
  },
  {
    title: '2XKO',
    href: 'https://2xko.riotgames.com/',
    img: TwoXKO,
    tag: 'PC',
  },
]

export default function NuestrosJuegos() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [canLeft, setCanLeft] = useState(false)
  const [canRight, setCanRight] = useState(true)

  // actualiza estado de flechas según posición de scroll
  const updateArrows = () => {
    const el = trackRef.current
    if (!el) return
    setCanLeft(el.scrollLeft > 0)
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1)
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

  const CARD_WIDTH = 400 // ancho de cada card (ajusta a tu gusto)
  const GAP = 32 // gap-8 = 32px
  const scrollByCards = (n: number) => {
    trackRef.current?.scrollBy({ left: n * (CARD_WIDTH + GAP), behavior: 'smooth' })
  }

  return (
    <section className="bg-black text-white px-6 md:px-10 py-10">
      <h2 className="text-l tracking-wide text-white mb-6 text-center">NUESTROS JUEGOS</h2>

      <div className="relative mx-auto max-w-7xl">
        {/* Flecha izquierda */}
        <button
          aria-label="Anterior"
          onClick={() => scrollByCards(-1)}
          disabled={!canLeft}
          className="
            absolute left-0 top-1/2 -translate-y-1/2 z-10
            hidden md:flex items-center justify-center
            size-10 rounded-full backdrop-blur
            transition
            disabled:opacity-30 disabled:cursor-not-allowed
            bg-white/10 hover:bg-white/20
          "
        >
          <ChevronLeftIcon />
        </button>

        {/* Pista horizontal con snap */}
        <div
          ref={trackRef}
          className="
            flex gap-8
            overflow-x-auto overflow-y-hidden
            scroll-smooth
            snap-x snap-mandatory
            pb-4 px-2 md:px-8
            [scrollbar-width:none]
          "
          style={{ WebkitOverflowScrolling: 'touch', msOverflowStyle: 'none' }}
        >
          {/* Ocultar scrollbar WebKit */}
          <style>{`div::-webkit-scrollbar{display:none}`}</style>

          {GAMES.map((g) => (
            <a
              key={g.title}
              href={g.href}
              target="_blank"
              rel="noreferrer"
              className="
                group relative shrink-0 snap-start
                w-[400px]
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

        {/* Flecha derecha */}
        <button
          aria-label="Siguiente"
          onClick={() => scrollByCards(1)}
          disabled={!canRight}
          className="
            absolute right-0 top-1/2 -translate-y-1/2 z-10
            hidden md:flex items-center justify-center
            size-10 rounded-full backdrop-blur
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
