import ReactDOM from 'react-dom/client'
import './globals.css'
import { RouterProvider } from 'react-router-dom'
import { StrictMode } from 'react'
import { router } from './router.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
