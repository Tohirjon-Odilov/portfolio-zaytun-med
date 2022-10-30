import React from 'react'
import Footer from "../../Footer/Footer"
import Header from "../../Header/Header"
import KlinikHero from "../../KlinikHero/KlinikHero"
import Logotip from "../../Logotip/Logotip"
import MainInfo from "../../MainInfo/MainInfo"
import Master from "../../Master/Master"
import Questions from "../../Questions/Questions"
import './Klinika.scss'

function Klinika() {
  return (
    <React.Fragment>
      <Header />
      <KlinikHero />
      <MainInfo />
      <Questions />
      <Master />
      <Logotip />
      <Footer />
    </React.Fragment>
  )
}

export default Klinika