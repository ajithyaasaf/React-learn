import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from "./combonents/Navbar.jsx"
import Hero from './combonents/Hero.jsx'
import Categories from "./combonents/Categories.jsx"
import { products } from './data/products.js'
function App() {


  return (
    <>

      <Navbar />
      <Hero />
      <Categories prod={products} available={true} />
    </>
  )
}

export default App
