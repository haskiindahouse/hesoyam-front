import { createBrowserRouter } from 'react-router-dom'
import { App } from './App'
import { Home } from 'src/pages/home/Home'
import { Categories } from 'src/pages/categories/Categories'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'categories', element: <Categories /> }
    ]
  }
])
