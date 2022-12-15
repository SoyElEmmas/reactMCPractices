import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
/* components */
import Paths from './router'
/* styles */
import 'bootstrap/dist/css/bootstrap.css'
import './styles/index.css'

const root = createRoot(document.getElementById('root'))

root.render(
  <>
    {/* exponer las rutas en mi aplicación */}
    <BrowserRouter>
      <Paths />
    </BrowserRouter>
  </>
)