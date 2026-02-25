import { useState } from "react"
import MenuIcon from "@mui/icons-material/Menu"
import LoginIcon from "@mui/icons-material/Login"
import RiotGif from "../assets/riot-3d-fists.gif"
import { Link } from "react-router-dom"

import "../styles/header.scss"

export const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav className="rg-header" role="navigation" aria-label="Barra de navegació principal">
      <div className="rg-header__left">
        <img src={RiotGif} className="rg-header__logo" alt="Riot Games Logo" loading="lazy" />

        {/* Menú DESKTOP (CSS l'amaga en mòbil) */}
        <ul className="rg-header__nav" aria-label="Navegació principal">
          <li>
            <Link to="/home" className="rg-header__link rg-nav__item--1" aria-label="Inici">
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/about" className="rg-header__link rg-nav__item--2" aria-label="Sobre nosaltres">
              Sobre nosotros
            </Link>
          </li>
          <li>
            <Link to="/contact" className="rg-header__link rg-nav__item--3" aria-label="Contacte">
              Contacto
            </Link>
          </li>
        </ul>
      </div>

      {/* Login DESKTOP (CSS l'amaga en mòbil) */}
      <Link to="/login" className="rg-header__login" aria-label="Iniciar sessió">
        <LoginIcon fontSize="small" />
        Iniciar sesión
      </Link>

      {/* Hamburguesa MÒBIL (CSS l'amaga en escriptori) */}
      <button
        type="button"
        className="rg-header__toggle"
        onClick={() => setOpen((v) => !v)}
        aria-label="Obrir menú de navegació"
        aria-expanded={open}
        aria-controls="mobile-menu"
      >
        <MenuIcon />
      </button>
      
      <div
        id="mobile-menu"
        className={`rg-header__mobile ${open ? "is-open" : ""}`}
        role="menu"
        aria-label="Menú de navegació mòbil"
      >
        <Link to="/home" onClick={() => setOpen(false)} role="menuitem" tabIndex={0}>
          Inicio
        </Link>
        <Link to="/about" onClick={() => setOpen(false)} role="menuitem" tabIndex={0}>
          Sobre nosotros
        </Link>
        <Link to="/contact" onClick={() => setOpen(false)} role="menuitem" tabIndex={0}>
          Contacto
        </Link>
        <Link to="/login" onClick={() => setOpen(false)} role="menuitem" tabIndex={0}>
          Iniciar sesión
        </Link>
      </div>
    </nav>
  )
}