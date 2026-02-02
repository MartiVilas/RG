import { Grid } from '@mui/material'
import Video from '../assets/playerfirst.mp4'
import { Header } from './Header'
import RiotGif from '../assets/riot-3d-fists.gif'
import AudioCEO from '../assets/discurso.mp3'

export const About = () => {
  return (
    <Grid className="min-h-screen text-white">
      <Header />

      <div className="relative w-full h-[350px] overflow-hidden">
        <video src={Video} autoPlay loop muted playsInline className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold drop-shadow-lg">Sobre Nosotros</h1>
        </div>
      </div>

      <div className="flex justify-center px-10 py-16 text-black bg-white">
        <img
          src={RiotGif}
          alt="Riot Games Logo"
          className="w-[400px] h-[400px] mr-10"
          loading="lazy"
        />

        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold mb-4">¿Quiénes somos?</h2>
          <p className="leading-relaxed text-lg">
            Riot Games se fundó en 2006 con el objetivo de desarrollar juegos y mejorar la
            experiencia de los jugadores. Desde entonces, tenemos más de 4500 Rioters en más de 20
            oficinas a lo largo del mundo, por lo que contamos con una visión global en los juegos
            que creamos y los personajes que forman parte de ellos. Desde las calles de Piltover a
            los laboratorios de radianta de Tierra Alfa, apostamos por crear juegos y estar al
            servicio de quienes tanto los adoran.
          </p>

          <p className="leading-relaxed text-lg mb-2 mt-2">
            Y aquí un mensaje de nuestro CEO: Dylan Jadeja
          </p>

          <audio src={AudioCEO} controls />
        </div>
      </div>
    </Grid>
  )
}
