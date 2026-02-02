// src/components/Register.tsx
import { useState } from 'react'
import { Grid, Button, Typography } from '@mui/material'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import { useNavigate, Link } from 'react-router-dom'
import { registerUser } from '../api/auth'
import BgImg from '../assets/entrance-sign.webp'

export const Register = () => {
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [error, setError] = useState<string | null>(null)
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (!email || !username || !password) {
      setError('Rellena todos los campos.')
      return
    }
    if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres.')
      return
    }
    if (password !== confirm) {
      setError('Las contraseñas no coinciden.')
      return
    }

    const res = await registerUser(email, username, password)
    if (!res.ok) {
      setError(res.error)
      return
    }
    navigate('/home')
  }

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      className="min-h-screen text-white bg-cover bg-center bg-no-repeat relative"
      sx={{ backgroundImage: `url(${BgImg})` }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      <Grid className="relative z-10 rounded-2xl shadow-xl p-8 bg-gray-900/80 backdrop-blur w-[420px]">
        <Typography variant="h5" fontWeight={700} align="center" className="mb-6 text-red-500">
          Crear cuenta
        </Typography>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2 text-sm font-semibold">
              Correo electrónico
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-[#1e1e1e] border border-gray-700 text-white text-sm rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none p-3 placeholder-gray-400"
              placeholder="tuemail@ejemplo.com"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="username" className="mb-2 text-sm font-semibold">
              Nombre de usuario
            </label>
            <input
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="bg-[#1e1e1e] border border-gray-700 text-white text-sm rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none p-3 placeholder-gray-400"
              placeholder="Tu nick"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="mb-2 text-sm font-semibold">
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-[#1e1e1e] border border-gray-700 text-white text-sm rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none p-3 placeholder-gray-400"
              placeholder="••••••••"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="confirm" className="mb-2 text-sm font-semibold">
              Repite la contraseña
            </label>
            <input
              id="confirm"
              type="password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              className="bg-[#1e1e1e] border border-gray-700 text-white text-sm rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none p-3 placeholder-gray-400"
              placeholder="••••••••"
              required
            />
          </div>

          {error && <div className="text-red-400 text-sm -mt-2">{error}</div>}

          <Button
            type="submit"
            variant="contained"
            color="error"
            startIcon={<PersonAddIcon />}
            fullWidth
          >
            Registrarse
          </Button>

          <div className="text-center text-sm text-gray-400">
            ¿Ya tienes cuenta?
            <Link to="/login" className="text-red-500 hover:underline">
              Inicia sesión
            </Link>
          </div>
        </form>
      </Grid>
    </Grid>
  )
}
