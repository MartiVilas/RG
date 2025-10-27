import { Grid } from '@mui/material'

import ACTUALIDAD from '../assets/web-rb-header-final-v04-kv.png'

import NOT2 from '../assets/wmv25-textless-image-riotclient-251010-min.jpg'
import NOT1 from '../assets/dd-aram-textless-banner.jpg'
import NOT3 from '../assets/1920x1080-textles.jpg'
import LOR from '../assets/lor-icon.png'
import LOL from '../assets/League_of_Legends_icon.svg'

export const Actualidad = () => {
  return (
    <Grid
      container
      display="flex"
      flexDirection={{ xs: 'column', md: 'row' }}
      alignItems="flex-start"
      justifyContent="center"
      gap={4}
      px={4}
      py={8}
    >
      <Grid>
        <h2 className="text-2xl font-bold mb-4">ACTUALIDAD</h2>
        <a href="https://www.youtube.com/@leagueoflegends" target="_blank" rel="noreferrer">
          <img
            src={ACTUALIDAD}
            alt="Imagen de actualidad"
            className="h-[600px] w-full max-w-[900px] object-cover rounded-xl shadow-lg"
          />
        </a>
        <Grid mt={2} fontSize="24px" fontWeight={700}>
          Nuestro canal de YouTube
        </Grid>
      </Grid>

      <Grid className="h-[600px] flex flex-col justify-between gap-4 mt-12 ml-12">
        {[
          {
            title: 'Bocetos del desarrollo: ARAM',
            img: NOT1,
            logo: LOL,
          },
          {
            title: 'Videoclip del himno del Mundial 2025',
            img: NOT2,
            logo: LOL,
          },
          {
            title: 'Avance de la versión 6.3 - League of Legends: Wild Rift',
            img: NOT3,
            logo: LOR,
          },
        ].map((news, i) => (
          <a
            key={i}
            href="#"
            className="flex items-center justify-between bg-white/5 hover:bg-white/10 transition rounded-2xl ring-1 ring-white/10 hover:ring-white/20 px-3 py-3"
            style={{ height: '32%' }}
          >
            <div className="flex-1 pr-3">
              <div className="text-white font-semibold text-[16px] leading-snug">{news.title}</div>
              <div className="mt-2 flex items-center gap-2 text-[11px] uppercase tracking-wide text-white/60">
                {news.logo ? (
                  <img
                    src={news.logo}
                    alt="Logo"
                    className="h-5 w-5 rounded-full object-contain bg-white/10 p-0.5"
                  />
                ) : (
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/10">
                    📰
                  </span>
                )}
                <span>Noticias</span>
              </div>
            </div>

            <img
              src={news.img}
              alt={news.title}
              className="h-[80px] w-[140px] object-cover rounded-lg flex-shrink-0"
            />
          </a>
        ))}
      </Grid>
    </Grid>
  )
}
