import React from 'react'
import newsImg from '../../assets/img/news-1.png'
import pikker from '../../assets/img/color-picker.svg'
import heart from '../../assets/img/u_heart-rate.svg'
import arrowRight from '../../assets/img/arrow-right.png'
import './News.scss'

function News() {
  return (
    <div className="news-section">
      <div className="container">
        <div className="news">
          <h3 className="news__title">
            " Zaytun Med tib " dan Yangilik
          </h3>
          <div className="news__wrapper">
            <div className="offer flex-b">
              <div className="offer__left">
                <div className="offer__card">
                  <div className="offer__card-info flex-b">
                    <div>
                      <h4 className="offer__card-title">
                        Maxsus takliflar sizni kutmoqda
                      </h4>
                      <p className="offer__card-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae egestas facilisis aliquet velit in sapien sed sed proin.
                      </p>
                    </div>
                    <img src={newsImg} alt="Maxsus takliflar jamlanmasi doira shaklida keltiriglagan" className="offer__card-img" />
                  </div>
                  <div className="offer__card-wrapper flex-b">
                    <div className="card-wrapper__item flex">
                      <div className="flex-c">
                        <img src={pikker} alt="Color Pikker" />
                      </div>
                      <span>Igna terapiya</span>
                    </div>
                    <div className="card-wrapper__item flex">
                      <div className="flex-c">
                        <img src={heart} alt="Heart rate" />
                      </div>
                      <span>Darsonval</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="offer__right">
                <div className="offer__right-body">
                  <div className="flex-b">
                    <div className="offer__right__wrapper flex-c">
                      <img src={heart} alt="Heart rate" />
                    </div>
                    <h4>Shifobaxsh damlama</h4>
                  </div>
                  <p>Lorem ipsum dolor sit amet,  egastas elitvitae consectetur  adipiscing.</p>
                </div>
                <div className="offer__right-footer flex-b">
                  <strong>Ko’proq ma’lumot</strong>
                  <img src={arrowRight} alt="Arrow right" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default News