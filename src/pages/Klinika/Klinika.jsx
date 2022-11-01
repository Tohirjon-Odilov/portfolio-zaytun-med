import React from 'react'
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import KlinikHero from "../../components/KlinikHero/KlinikHero"
import Logotip from "../../components/Logotip/Logotip"
import MainInfo from "../../components/MainInfo/MainInfo"
import Master from "../../components/Master/Master"
import Questions from "../../components/Questions/Questions"
// import './Klinika.scss'

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