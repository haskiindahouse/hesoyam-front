import { Outlet } from 'react-router-dom'
import { Nav } from './Nav'
import { Footer } from './Footer'

export function App() {
  return (
    <>
      <Nav />
      <main className='max-w-screen-xl mx-auto'>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
