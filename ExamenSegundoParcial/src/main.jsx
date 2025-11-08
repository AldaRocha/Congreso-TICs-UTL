import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReloadPrompt from './ReloadPrompt.jsx'
import { RouterProvider } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import { Router } from "./router/Router.jsx"
import "./index.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ReloadPrompt/>
    <RouterProvider router={ Router }/>
  </StrictMode>,
)
