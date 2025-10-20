import { Grid } from '@mui/material'
import Actualidad from './assets/web-rb-header-final-v04-kv.png'
import NuestrosJuegos from './NuestrosJuegos'
import Hero from './Hero'

export const Home = () => {
  return (
    <Grid className="bg-black min-h-screen text-white">
      <Hero/>

      <Grid container spacing={2} className="p-8">
        <Grid>
          <h2 className="text-2xl font-bold mb-4">ACTUALIDAD</h2>
        </Grid>

        <Grid>
            <img src={Actualidad} alt="" />
            <NuestrosJuegos/>
        </Grid>
      </Grid>
    </Grid>
  )
}
