import { Grid } from '@mui/material'

type ActualidadProps = {
  img: string
}

export const Actualidad = ({ img }: ActualidadProps) => {
  return (
    <Grid container display={'flex'} flexDirection={'column'}>
      <Grid>
        <h2>ACTUALIDAD</h2>
        <a href="https://www.youtube.com/@leagueoflegends" target="_blank" rel="noreferrer">
          <img src={img} alt="Imagen de actualidad" className="h-[600px] w-[900px]" />
        </a>
        <Grid mt={2} fontSize={'24px'} fontWeight={700}>
          Nuestro canal de Youtube
        </Grid>
      </Grid>

      <Grid>
        <Grid mt={2} fontSize={'24px'} fontWeight={700}>
          Noticia 1
        </Grid>
      </Grid>
    </Grid>
  )
}
