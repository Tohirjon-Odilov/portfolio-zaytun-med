import React from 'react'
import "./Hero.scss"

function Hero() {
  return (
    <div className="hero-section">
      <div className="container">
        <div className="hero flex-b">
          <div className="hero-wrapper">
            <h2 className="hero__title">
              Boshlang’ich tabobat
            </h2>
            <span>asoslari</span>
          </div>
          <a href="/">
            Mutaxassis bilan bog’lanish
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero