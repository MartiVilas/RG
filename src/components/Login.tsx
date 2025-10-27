import { useState } from 'react'
import { Grid, Button, Typography, Box } from '@mui/material'
import LoginIcon from '@mui/icons-material/Login'
import { Link } from 'react-router-dom'
import { loginUser } from '../api/auth'
import BgImg from '../assets/pc-cafe-2.jpeg'

export const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const result = await loginUser(email, password)
    console.log(result)
  }

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      className="
        min-h-screen text-white 
        bg-cover bg-center bg-no-repeat relative
      "
      sx={{
        backgroundImage: `url(${BgImg})`,
      }}
    >
      <Grid
        className="
          relative z-10
          rounded-2xl shadow-xl p-8 
          bg-gray-900 w-[380px]
        "
      >
        <Typography variant="h5" fontWeight={700} align="center" className="mb-6 text-red-500">
          Iniciar Sesión
        </Typography>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2 text-sm font-semibold text-white">
              Correo electrónico
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="
                bg-[#1e1e1e] border border-gray-700 text-white text-sm rounded-lg
                focus:ring-2 focus:ring-red-500 focus:outline-none
                p-3 transition placeholder-gray-400
              "
              placeholder="NOMBRE DE USUARIO"
              required
            />
          </div>

          <Grid className="flex flex-col">
            <label htmlFor="password" className="mb-2 text-sm font-semibold text-white">
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="
                bg-[#1e1e1e] border border-gray-700 text-white text-sm rounded-lg
                focus:ring-2 focus:ring-red-500 focus:outline-none
                p-3 transition placeholder-gray-400
              "
              placeholder="CONTRASEÑA"
              required
            />
          </Grid>

          <Button
            type="submit"
            variant="contained"
            color="error"
            startIcon={<LoginIcon />}
            fullWidth
            className="mt-2 py-2"
          >
            Entrar
          </Button>
        </form>

        <Box className="mt-6 text-center text-sm text-gray-400">
          ¿No tienes cuenta?{' '}
          <Link to="/register" className="text-red-500 hover:underline">
            Regístrate aquí
          </Link>
        </Box>
      </Grid>
    </Grid>
  )
}
