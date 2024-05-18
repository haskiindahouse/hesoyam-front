import { Outlet } from 'react-router-dom'
import { Nav } from './Nav'
import { Footer } from './Footer'
import { PortalProvider } from './PortalProvider'

export function App() {
  return (
    <PortalProvider>
      <Nav />
      <main className='max-w-screen-xl mx-auto'>
        <Outlet />
      </main>
      <Footer />
    </PortalProvider>
  )
}
