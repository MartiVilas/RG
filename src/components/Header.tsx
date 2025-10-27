import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import LoginIcon from '@mui/icons-material/Login'
import RiotLogo from '../assets/riot-games-rgb-logos-web/Riot_Games_RGB_Logos/001_RG_2021_Logomark/001.1_RG_2021_LOGOMARK_RED.png'

export const Header = () => {
  return (
    <Grid className="flex justify-between items-center w-full p-4 bg-gray-950 shadow-md">
      <Grid className="flex items-center gap-8">
        <img src={RiotLogo} className="h-10" alt="Riot Games Logo" />
        <ul className="flex ml-10 gap-10">
          <a href="/home">
            <li className="relative text-white cursor-pointer pb-1">
              <span className="relative after:content-[''] after:absolute after:left-0 after:bottom-[-28px] after:h-[6px] after:w-0 after:bg-red-500 after:rounded-full after:transition-all after:duration-300 hover:after:w-full">
                Inicio
              </span>
            </li>
          </a>

          <li className="relative text-white cursor-pointer pb-1">
            <span className="relative after:content-[''] after:absolute after:left-0 after:bottom-[-28px] after:h-[6px] after:w-0 after:bg-red-500 after:rounded-full after:transition-all after:duration-300 hover:after:w-full">
              Sobre mí
            </span>
          </li>

          <li className="relative text-white cursor-pointer pb-1">
            <span className="relative after:content-[''] after:absolute after:left-0 after:bottom-[-28px] after:h-[6px] after:w-0 after:bg-red-500 after:rounded-full after:transition-all after:duration-300 hover:after:w-full">
              Contacto
            </span>
          </li>
        </ul>
      </Grid>

      <Button variant="contained" color="error" startIcon={<LoginIcon />}>
        Iniciar sesión
      </Button>
    </Grid>
  )
}
