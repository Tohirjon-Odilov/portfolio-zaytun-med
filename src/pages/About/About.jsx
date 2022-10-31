import React from 'react'
import Service from "../../components/Service/Service"
import Header from "../../components/Header/Header"
import Hero from "../../components/Hero/Hero"
import News from "../../components/News/News"
import Plate from "../../components/Plate/Plate"
import Logotip from "../../components/Logotip/Logotip"
import Footer from "../../components/Footer/Footer"

function About() {
  return (
    <React.Fragment>
      <Header />
      <Hero />
      <Service />
      <News />
      <Plate />
      <Logotip />
      <Footer />
    </React.Fragment>
  )
}

export default About