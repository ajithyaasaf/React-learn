import { createContext, useEffect, useState } from 'react'
import './App.css'
import Navbar from "./combonents/Navbar.jsx"
import { Outlet } from 'react-router-dom'

export const cartContext = createContext()

function App() {

  let [cart, setCart] = useState(() => {
    const savedcart = localStorage.getItem("cart")
    return savedcart ? JSON.parse(savedcart) : []
  })

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  return (
    <cartContext.Provider value={{ cart, setCart }}>
      <Navbar />
      <Outlet />
    </cartContext.Provider>
  )
}

export default App
