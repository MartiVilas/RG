import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import LoginIcon from '@mui/icons-material/Login'
import RiotLogo from '../assets/riot-games-rgb-logos-web/Riot_Games_RGB_Logos/001_RG_2021_Logomark/001.1_RG_2021_LOGOMARK_RED.png'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <Grid className="flex justify-between items-center w-full p-4 bg-gray-950 shadow-md">
      <Grid className="flex items-center gap-8">
        <img src={RiotLogo} className="h-10" alt="Riot Games Logo" />

        <ul className="flex ml-10 gap-10">
          <li>
            <Link
              to="/home"
              className="text-white cursor-pointer px-3 py-1 rounded-md transition-all duration-200 hover:bg-red-600 hover:rounded-lg hover:font-semibold"
            >
              Inicio
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className="text-white cursor-pointer px-3 py-1 rounded-md transition-all duration-200 hover:bg-red-600 hover:rounded-lg hover:font-semibold"
            >
              Sobre mí
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              className="text-white cursor-pointer px-3 py-1 rounded-md transition-all duration-200 hover:bg-red-600 hover:rounded-lg hover:font-semibold"
            >
              Contacto
            </Link>
          </li>
        </ul>
      </Grid>

      <Button
        variant="contained"
        color="error"
        startIcon={<LoginIcon />}
        component={Link}
        to="/login"
      >
        Iniciar sesión
      </Button>
    </Grid>
  )
}
