import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProductDetails from './pages/ProductDetails.jsx'
import { NotFound } from './pages/404.jsx'
import Cart from "./pages/Cart.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [

      {
        path: "products/:id",
        element: <ProductDetails />
      },
      {
        path: "cart",
        element: <Cart />
      },
      {
        path: "*",
        element: <NotFound />
      }
    ]
  },
])
createRoot(document.getElementById('root')).render(

  <RouterProvider router={router} />

)
