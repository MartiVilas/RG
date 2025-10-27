import { Grid } from '@mui/material'
import hero from '../assets/act5-hero-banner-3840x1600-nonotch.png'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import championsLogo from '../assets/Valorant_Champions_Tour_logo.png'

export default function Hero() {
  return (
    <Grid className="relative w-full overflow-hidden bg-black">
      {/* Imagen de fondo */}
      <img
        src={hero}
        alt="Worlds"
        className="w-full h-[420px] md:h-[560px] object-cover object-top"
      />
      <Grid className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

      <Grid className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />

      <Grid className="absolute inset-0 flex items-center">
        <Grid className="px-6 md:px-12 max-w-xl">
          <img src={championsLogo} alt="Worlds 25" className="h-30  mb-2" />
          <h2 className="text-3xl md:text-5xl font-semibold text-white mb-4">
            El Mundial 2025 empieza ya
          </h2>
          <p className="text-white/80 leading-relaxed mb-6">
            La batalla para labrarse un legado eterno está a punto de comenzar…
          </p>

          <a
            href="#"
            className="inline-flex items-center gap-3 rounded-full px-6 py-3 text-lg font-semibold
                       text-white bg-gradient-to-r from-sky-500 to-cyan-400 shadow-lg
                       hover:from-sky-400 hover:to-cyan-300 transition"
          >
            <span className="inline-grid place-items-center h-6 w-6 rounded-full bg-black/30">
              {<ChevronRightIcon />}
            </span>
            Ver ahora
          </a>
        </Grid>
      </Grid>
    </Grid>
  )
}
