import { Grid } from '@mui/material'
import NuestrosJuegos from './components/NuestrosJuegos'
import Hero from './components/Hero'
import { Actualidad } from './components/Actualidad'

export const Home = () => {
  return (
    <Grid className="bg-black min-h-screen text-white">
      <Hero />

      <Grid container spacing={2} className="p-8">
        <Actualidad />
        <NuestrosJuegos />
      </Grid>
    </Grid>
  )
}
