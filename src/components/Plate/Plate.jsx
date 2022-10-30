import React from 'react'
import play from '../../assets/img/play.svg';
import './Plate.scss'

function Plate() {
  return (
    <div className="plate-section">
      <div className="container">
        <div className="plate">
          <h3 className="plate__title">
            " Zaytun Med tib " hayotidan lavhalar
          </h3>
          <div className="plate__cards flex-b">
            <div className="plate__card">
              <img src={play} alt="play icon" />
              <span>Ayol bitiruvchilariga sertifikatlar topshirildi</span>
            </div>
            <div className="plate__card space">
              <div className="plate__card-first">
                <span>Malakali <br /> hamshiralar</span>
              </div>
              <div className="plate__card-second">
                <span>Biznes uchun <br /> hamkorlik</span>
              </div>
            </div>
            <div className="plate__card">
              <span>Ustozlarni  bayram bilan tabriklaymiz!</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Plate