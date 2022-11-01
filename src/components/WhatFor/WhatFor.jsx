import React from 'react'
import './WhatFor.scss'
import img1 from '../../assets/img/whatFor.svg'

function WhatFor() {
  return (
    <div className="whatFor-section">
      <div className="container">
        <div className="whatFor">
          <h3>Nimaga bizni tanlashingiz kerak?</h3>
          <div className="whatFor__cards flex">
            <div className="whatFor__card flex-c">
              <img src={img1} alt="" />
              <p>ishonchli maxsulotlar</p>
            </div>
            <div className="whatFor__card flex-c">
              <img src={img1} alt="" />
              <p>ishonchli maxsulotlar</p>
            </div>
            <div className="whatFor__card flex-c">
              <img src={img1} alt="" />
              <p>ishonchli maxsulotlar</p>
            </div>
            <div className="whatFor__card flex-c">
              <img src={img1} alt="" />
              <p>ishonchli maxsulotlar</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhatFor