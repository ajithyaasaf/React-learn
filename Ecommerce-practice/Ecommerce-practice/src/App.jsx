import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from "./combonents/Navbar.jsx"
import Hero from './combonents/Hero.jsx'
import Categories from "./combonents/Categories.jsx"
import UsingRef from "./combonents/UsingRef.jsx"
import UsingReducer from "./combonents/UsingReducer.jsx"
import { products } from './data/products.js'
import { Outlet } from 'react-router-dom'

export const cartContext = createContext()

function App() {

  let [cart, setCart] = useState([])

  console.log(cart)



  return (
    <cartContext.Provider value={{ cart, setCart }}>
      <UsingReducer />
      <UsingRef />
      <Navbar />
      <Hero />
      <Categories prod={products} available={true} />
      <Outlet />
    </cartContext.Provider>
  )
}

export default App
