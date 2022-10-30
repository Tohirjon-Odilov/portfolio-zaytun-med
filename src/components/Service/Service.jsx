import React from 'react'
import "./Service.scss"
import heart from "../../assets/img/service-1.png"
import service from "../../assets/img/service-2.png"
import doctor from "../../assets/img/service-doctor.png"

function Card() {
  return (
    <div className="service-section">
      <div className="container">
        <div className="service">
          <h3 className="service__title">
            Bizning xizmatlarimiz
          </h3>
          <div className="card__wrapper">
            <div className="service__card">
              <div className="card__body">
                <h4 className="card__title">
                  Klinika
                </h4>
                <p className="card__text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae egestas facilisis aliquet.
                </p>
                <img src={heart} alt="" className="card-img" />
              </div>
              <a href="/" className="card__btn">
                Batafsil
              </a>
            </div>
            <div className="service__card">
              <div className="card__body">
                <h4 className="card__title">
                  Tabobat <br /> giyohlari
                </h4>
                <p className="card__text card__text2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae egestas facilisis aliquet.
                </p>
                <img src={service} alt="" className="card-img" />
              </div>
              <a href="/" className="card__btn">
                Batafsil
              </a>
            </div>
            <div className="service__card">
              <div className="card__body">
                <h4 className="card__title">
                  Kurslar
                </h4>
                <p className="card__text card__text3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae egestas facilisis aliquet.
                </p>
                <img src={doctor} alt="" className="card-img" />
              </div>
              <a href="/" className="card__btn">
                Batafsil
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card