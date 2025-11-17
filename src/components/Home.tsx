import { Grid } from '@mui/material'
import NuestrosJuegos from './NuestrosJuegos'
import Hero from './Hero'
import { Actualidad } from './Actualidad'

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
