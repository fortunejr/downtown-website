import React from 'react'
import Nav from '../../Components/Nav/Nav'
import Herosection from '../../Components/Herosection/Herosection'
import CTA from '../../Components/CTA/CTA'
import FAQ from '../../Components/FAQ/FAQ'
import Footer from '../../Components/Footer/Footer'

const Homepage = () => {
  return (
    <div>
      <Nav />
      <Herosection />
      <CTA />
      <FAQ/>
      <Footer/>
    </div>
  )
}

export default Homepage