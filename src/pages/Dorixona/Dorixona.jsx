import React from 'react'
import DorixonaCard from "../../components/DorixonaCard/DorixonaCard"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import Logotip from "../../components/Logotip/Logotip"
import Search from "../../components/Search/Search"
import WhatFor from "../../components/WhatFor/WhatFor"

function Dorixona() {
  return (
    <div>
      <Header />
      <Search />
      <DorixonaCard />
      <WhatFor />
      <Logotip />
      <Footer />
    </div>
  )
}

export default Dorixona