import { useState } from 'react'
import Nav from './static/Nav'

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
