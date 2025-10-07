import { useState, React } from 'react'
import { Routes, Route} from "react-router-dom"
import Homepage from './Pages/Homepage/Homepage'
import About from './Pages/About/About'
import Privacy from './Pages/Privacy/Privacy'
import Terms from './Pages/Terms/Terms'
import ScrollToTop from './Components/ScrollToTop'

function App() {

  return (
    <>
    <ScrollToTop/>
      <Routes>
        <Route path = "/"  element = {<Homepage />}/>
        <Route path = "/about-company"  element = {<About />}/>
        <Route path = "/privacy-policy"  element = {<Privacy />}/>
        <Route path = "/terms-of-use"  element = {<Terms />}/>
      </Routes>
    </>
  )
}

export default App
