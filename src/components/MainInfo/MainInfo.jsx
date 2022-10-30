import React from 'react'
import './MainInfo.scss'
import img1 from '../../assets/img/service-img.png'
import img2 from '../../assets/img/service-img2.png'
import img3 from '../../assets/img/service-img3.png'
import img4 from '../../assets/img/service-img4.png'
import img5 from '../../assets/img/service-img5.png'
import img6 from '../../assets/img/service-img6.png'
import arrowLeft from '../../assets/img/arrow-left.svg'
import arrowRight from '../../assets/img/arrow-right.svg'

function MainInfo() {
  return (
    <section class="main-info-site">
      <div class="container">
        <div class="main-info">
          <div class="main-info__head">
            <h2 class="main-info__title">
              Bizning xizmatlarimiz
            </h2>
            <p class="main-info__text">
              We offer complete healthcare to individuals with various health concerns
            </p>
          </div>
          <div class="main-info__arrow">
            <img src={arrowLeft} id="arrow-left" alt="arrow" />
            <img src={arrowRight} id="arrow-right" alt="arrow" />
          </div>
        </div>
        <div class="service-wrapper">
          <div class="service-card">
            <ul class="card-list">
              <li class="card-text">
                <p>ochlik va mevali parxez</p>
                <p class="card-text2">Ochlik
                  va mevali parxez</p>
              </li>
              <li class="card-img">
                <img src={img1} alt="service-img" />
              </li>
            </ul>
          </div>
          <div class="service-card">
            <ul class="card-list">
              <li class="card-text">
                <p>hijoma</p>
                <p class="card-text2">Ochlik
                  va mevali parxez</p>
              </li>
              <li class="card-img">
                <img src={img2} alt="service-img" />
              </li>
            </ul>
          </div>
          <div class="service-card">
            <ul class="card-list">
              <li class="card-text">
                <p>zuluk bilan davolash</p>
                <p class="card-text2">Ochlik
                  va mevali parxez</p>
              </li>
              <li class="card-img">
                <img src={img3} alt="service-img" />
              </li>
            </ul>
          </div>
          <div class="service-card">
            <ul class="card-list">
              <li class="card-text">
                <p>igna terapiya</p>
                <p class="card-text2">Ochlik
                  va mevali parxez</p>
              </li>
              <li class="card-img">
                <img src={img4} alt="service-img" />
              </li>
            </ul>
          </div>
          <div class="service-card">
            <ul class="card-list">
              <li class="card-text">
                <p>darsonavl</p>
                <p class="card-text2">Ochlik
                  va mevali parxez</p>
              </li>
              <li class="card-img">
                <img src={img5} alt="service-img" />
              </li>
            </ul>
          </div>
          <div class="service-card">
            <ul class="card-list">
              <li class="card-text">
                <p>Asalari chaqtirib davolash</p>
                <p class="card-text2">Ochlik
                  va mevali parxez</p>
              </li>
              <li class="card-img">
                <img src={img6} alt="service-img" />
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}

export default MainInfo