import React from 'react'
import Hero from "./components/Hero.jsx";
import NavBar from "./components/Navbar.jsx";

const App = () => {
  return (
    <main>
      <NavBar/>
      <Hero className='relative min-h-screen w-screen overflow-x-hidden'/>

    </main>
  )
}
export default App
