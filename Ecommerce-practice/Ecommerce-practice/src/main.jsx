import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import ProductDetails from './pages/ProductDetails.jsx'
import { NotFound } from './pages/404.jsx'
import Cart from "./pages/Cart.jsx"
import UsingRef from "./combonents/UsingRef.jsx"
import UsingReducer from "./combonents/UsingReducer.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "products/:id",
        element: <ProductDetails />
      },
      {
        path: "cart",
        element: <Cart />
      },
      {
        path: "practice",
        element: (
          <div style={{ padding: "20px" }}>
            <UsingReducer />
            <UsingRef />
          </div>
        )
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
