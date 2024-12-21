import { useState } from 'react'
import Nav from './static/Nav'
import "./js/animate.js"
import "./js/add.js"
import "./js/scripts.js"
import "./js/update.js"
import Hero from './components/sections/Hero'
import Login from './components/sections/Login'

function App() {

  return (
    <>
      <Nav/>
      <Hero/>
      <Login/>
    </>
  )
}

export default App
