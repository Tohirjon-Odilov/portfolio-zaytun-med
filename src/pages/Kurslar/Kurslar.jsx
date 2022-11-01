import React from 'react'
import Child from "../../components/Child/Child"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import KursHero from "../../components/KursHero/KursHero"
import Logotip from "../../components/Logotip/Logotip"

function Kurslar() {
  return (
    <div>
      <Header />
      <KursHero />
      <Child />
      <Logotip />
      <Footer />
    </div>
  )
}

export default Kurslar