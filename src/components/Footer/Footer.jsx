import React from 'react'
import './Footer.scss'
import telegram from '../../assets/img/telegram.svg'
import facebook from '../../assets/img/facebook.svg'
import youtube from '../../assets/img/youtube.svg'
import instagram from '../../assets/img/instagram.svg'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer flex-b">
          <p>Copyright @ ZAYTUNMED_2022. All rights reserved. </p>
          <div className="flex">
            <p>Find us:</p>
            <a href="#telegram">
              <img src={telegram} alt="Telegram images" />
            </a>
            <a href="#youtube">
              <img src={youtube} alt="Youtube images" />
            </a>
            <a href="#facebook">
              <img src={facebook} alt="Facebook images" />
            </a>
            <a href="#instagram">
              <img src={instagram} alt="Instagram images" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer