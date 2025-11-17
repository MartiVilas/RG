import '../src/styles/index.css'
import App from './App.tsx'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from './components/Login'
import { Register } from './components/Register.tsx'
import { WorkingOn } from './components/WorkinOn.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/home" element={<App />} />
      <Route path="/about" element={<WorkingOn />} />
      <Route path="/contact" element={<WorkingOn />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  </BrowserRouter>,
)
