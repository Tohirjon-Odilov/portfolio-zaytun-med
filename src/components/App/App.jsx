import React from 'react'
import Service from "../Service/Service"
import Header from "../Header/Header"
import Hero from "../Hero/Hero"
import News from "../News/News"
import Plate from "../Plate/Plate"
import Logotip from "../Logotip/Logotip"
import Footer from "../Footer/Footer"

function App() {
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

export default App