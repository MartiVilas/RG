import { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import LoginIcon from '@mui/icons-material/Login'
import { Link } from 'react-router-dom'
import RiotLogo from '../assets/riot-games-rgb-logos-web/Riot_Games_RGB_Logos/001_RG_2021_Logomark/001.1_RG_2021_LOGOMARK_RED.png'

export const Header = () => {
  const [username, setUsername] = useState<string | null>(null)

  useEffect(() => {
    setUsername(localStorage.getItem('username'))
    const onStorage = (e: StorageEvent) => {
      if (e.key === 'username') setUsername(e.newValue)
    }
    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  }, [])

  return (
    <Grid className="flex justify-between items-center w-full p-4 bg-gray-950 shadow-md">
      {/* Izquierda: logo + menú */}
      <Grid className="flex items-center gap-8">
        <img src={RiotLogo} className="h-10" alt="Riot Games Logo" />
        <ul className="flex ml-10 gap-10">
          <li className="relative text-white cursor-pointer pb-1">
            <Link to="/home">
              <span className="relative after:content-[''] after:absolute after:left-0 after:bottom-[-28px] after:h-[6px] after:w-0 after:bg-red-500 after:rounded-full after:transition-all after:duration-300 hover:after:w-full">
                Inicio
              </span>
            </Link>
          </li>

          <li className="relative text-white cursor-pointer pb-1">
            <Link to="/about">
              <span className="relative after:content-[''] after:absolute after:left-0 after:bottom-[-28px] after:h-[6px] after:w-0 after:bg-red-500 after:rounded-full after:transition-all after:duration-300 hover:after:w-full">
                Sobre mí
              </span>
            </Link>
          </li>

          <li className="relative text-white cursor-pointer pb-1">
            <Link to="/contact">
              <span className="relative after:content-[''] after:absolute after:left-0 after:bottom-[-28px] after:h-[6px] after:w-0 after:bg-red-500 after:rounded-full after:transition-all after:duration-300 hover:after:w-full">
                Contacto
              </span>
            </Link>
          </li>
        </ul>
      </Grid>

      {/* Derecha: usuario o login */}
      <Grid>
        {username ? (
          <span className="text-white font-semibold text-lg">
           Hola, {username}
          </span>
        ) : (
          <Button
            variant="contained"
            color="error"
            startIcon={<LoginIcon />}
            component={Link}
            to="/login"
            sx={{ textTransform: 'none' }}
          >
            Iniciar sesión
          </Button>
        )}
      </Grid>
    </Grid>
  )
}
