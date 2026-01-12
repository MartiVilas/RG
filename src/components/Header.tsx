import { useState } from 'react'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import MenuIcon from '@mui/icons-material/Menu'
import LoginIcon from '@mui/icons-material/Login'
import RiotGif from '../assets/riot-3d-fists.gif'
import { Link } from 'react-router-dom'

export const Header = () => {
  const [open, setOpen] = useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Grid
      className="relative flex justify-between items-center w-full p-4 bg-gray-950 shadow-md"
      component="nav"
      role="navigation"
      aria-label="Barra de navegació principal"
    >
      <Grid className="flex items-center gap-8">
        <img src={RiotGif} className="size-20" alt="Riot Games Logo" />

        {!isMobile && (
          <ul className="flex ml-10 gap-10">
            <li>
              <Link
                to="/home"
                className="text-white px-3 py-1 hover:bg-red-600 rounded-md"
                aria-label="Inici"
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-white px-3 py-1 hover:bg-red-600 rounded-md"
                aria-label="Sobre nosaltres"
              >
                Sobre nosotros
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-white px-3 py-1 hover:bg-red-600 rounded-md"
                aria-label="Contacte"
              >
                Contacto
              </Link>
            </li>
          </ul>
        )}
      </Grid>

      {!isMobile ? (
        <Button
          variant="contained"
          color="error"
          startIcon={<LoginIcon />}
          component={Link}
          to="/login"
          aria-label="Iniciar sessió"
        >
          Iniciar sesión
        </Button>
      ) : (
        <IconButton
          onClick={() => setOpen(!open)}
          aria-label="Obrir menú de navegació"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <MenuIcon className="text-white" />
        </IconButton>
      )}

      {isMobile && open && (
        <div
          id="mobile-menu"
          className="absolute top-full right-4 mt-2 w-48 bg-gray-900 rounded-lg shadow-lg z-50"
          role="menu"
          aria-label="Menú de navegació mòbil"
        >
          <Link
            to="/home"
            onClick={() => setOpen(false)}
            className="block px-4 py-2 text-white hover:bg-red-600"
            aria-label="Inici"
            tabIndex={0}
            role="menuitem"
          >
            Inicio
          </Link>
          <Link
            to="/about"
            onClick={() => setOpen(false)}
            className="block px-4 py-2 text-white hover:bg-red-600"
            aria-label="Sobre nosaltres"
            tabIndex={0}
            role="menuitem"
          >
            Sobre nosotros
          </Link>
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="block px-4 py-2 text-white hover:bg-red-600"
            aria-label="Contacte"
            tabIndex={0}
            role="menuitem"
          >
            Contacto
          </Link>
          <Link
            to="/login"
            onClick={() => setOpen(false)}
            className="block px-4 py-2 text-white hover:bg-red-600"
            aria-label="Iniciar sessió"
            tabIndex={0}
            role="menuitem"
          >
            Iniciar sesión
          </Link>
        </div>
      )}
    </Grid>
  )
}
