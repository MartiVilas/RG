import { Grid } from '@mui/material'
import ActualidadImg from './assets/web-rb-header-final-v04-kv.png'
import NuestrosJuegos from './NuestrosJuegos'
import Hero from './Hero'
import { Actualidad } from './Actualidad'

export const Home = () => {
  return (
    <Grid className="bg-black min-h-screen text-white">
      <Hero />

      <Grid container spacing={2} className="p-8">
        <Actualidad img={ActualidadImg} />
        <NuestrosJuegos />
      </Grid>
    </Grid>
  )
}
