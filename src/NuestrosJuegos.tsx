import Valorant from './assets/valorant-s25a1-riot-games-homepage-product-card-1920x1080.png'
import TFT from './assets/tft-st1525-platform-riotbar-gamecard-1920x1080-v001-summoner.png'
import LOL from './assets/lol-sn24-1920x1080-kv-final.jpg'
import LOR from './assets/lor-set924-dp-riotbarapplicationswitcher-1920x1080.jpg'
import WR from './assets/wr-2025-patch-5a-kv-1920x1080.png'
import TwoXKO from './assets/rg-com-whoweare-2xko-productcard.jpg'

type Game = {
  title: string
  href: string
  img: string  // ruta a la imagen de fondo de la card
  tag?: string // opcional: “PC”, “Móvil”, etc.
}

const GAMES: Game[] = [
  {
    title: 'League of Legends',
    href: 'https://www.leagueoflegends.com/',
    img: LOL, 
    tag: 'PC'
  },
  {
    title: 'VALORANT',
    href: 'https://playvalorant.com/',
    img: Valorant,
    tag: 'PC'
  },
  {
    title: 'Teamfight Tactics',
    href: 'https://teamfighttactics.leagueoflegends.com/',
    img: TFT,
    tag: 'PC + Móvil'
  },
  {
    title: 'Legends of Runeterra',
    href: 'https://playruneterra.com/',
    img: LOR,
    tag: 'PC + Móvil'
  },
  {
    title: 'League of Legends: Wild Rift',
    href: 'https://wildrift.leagueoflegends.com/',
    img: WR,
    tag: 'Móvil'
  },
  {
    title: '2XKO',
    href: 'https://2xko.riotgames.com/',
    img: TwoXKO,
    tag: 'PC'
  }
]

export default function NuestrosJuegos() {
  return (
    <section className="bg-black text-white px-6 md:px-10 py-10">
      <h2 className="text-l tracking-wide text-white mb-4">NUESTROS JUEGOS</h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {GAMES.map((g) => (
          <a
            key={g.title}
            href={g.href}
            target="_blank"
            rel="noreferrer"
            className="group relative rounded-lg overflow-hidden shadow-[0_8px_0_rgba(0,0,0,0.25)]"
          >
            {/* Imagen de fondo */}
            <div
              className="aspect-[16/9] bg-center bg-cover transition-transform duration-300 group-hover:scale-[1.03]"
              style={{ backgroundImage: `url(${g.img})` }}
            />

            {/* Overlay degradado abajo (para legibilidad) */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            {/* Contenido inferior */}
            <div className="absolute inset-x-0 bottom-0 p-4 flex items-end justify-between">
              <div>
                <h3 className="text-lg font-semibold drop-shadow">
                  {g.title}
                </h3>
                {g.tag && (
                  <span className="mt-1 inline-block text-[11px] px-2 py-0.5 rounded bg-white/10">
                    {g.tag}
                  </span>
                )}
              </div>

              {/* Flecha / CTA sutil */}
              <div className="translate-y-1 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M13.172 12 8.222 7.05l1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
                </svg>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
