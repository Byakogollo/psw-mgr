import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Fondo from './Fondo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Fondo />
    <App />
  </StrictMode>,
)
