
import Header from '../Component/Header'
import Slider from '../Component/Slider.jsx'
import Services from '../Component/Services'
import Footer from '../Component/Footer'
import '../CSS/Home.css'
import React from 'react'

function Home() {
  return (
    <div>
      <Header/>
      <Slider/>
      <Services/>
      <Footer/>

    </div>
  )
}

export default Home