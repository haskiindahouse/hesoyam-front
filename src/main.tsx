import ReactDOM from 'react-dom/client'
import './globals.css'
import { RouterProvider } from 'react-router-dom'
import { StrictMode } from 'react'
import { router } from './router.tsx'

const start = async () => {
  if (import.meta.env.DEV && import.meta.env.VITE_ENABLE_MOCKS) {
    const { worker } = await import('./mocks/browser')

    await worker.start({
      onUnhandledRequest: 'warn'
    })
  }

  ReactDOM.createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  )
}

start()
