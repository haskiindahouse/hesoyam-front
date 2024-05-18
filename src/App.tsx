import { Outlet } from 'react-router-dom'
import { Nav } from './Nav'
import { Footer } from './Footer'
import { PortalProvider } from './PortalProvider'
import { Provider } from 'react-redux'
import { setupStore } from './store'

const store = setupStore()

export function App() {
  return (
    <Provider store={store}>
      <PortalProvider>
        <Nav />
        <main className='max-w-screen-xl mx-auto overflow-auto max-h-screen'>
          <Outlet />
        </main>
        <Footer />
      </PortalProvider>
    </Provider>
  )
}
