/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './Logotip.scss'
import siteLogo from '../../assets/img/site-logo.svg'
import vazirlik from '../../assets/img/vazirlik.svg'
import akfa from '../../assets/img/akfa.svg'
import plus from '../../assets/img/plus.svg'
import hijoma from '../../assets/img/hijoma.svg'
import a from '../../assets/img/a.svg'


function Logotip() {
  return (
    <div className="site-logotip">
      <div className="container">
        <div className="logotip">
          <div className="logotip__top flex-b">
            <div className="logotip">
              <div className="logotip__link flex">
                <a href="#"><img src={siteLogo} alt="Site Logo" /></a>
                <ul className="flex-b">
                  <li><a href="#">Xizmatlar</a></li>
                  <li><a href="#">Darsonavl</a></li>
                  <li><a href="#">Konsultatsiya</a></li>
                  <li><a href="#">Kurslar</a></li>
                  <li><a href="#">Tabobat asoslari</a></li>
                  <li><a href="#">Hijoma</a></li>
                </ul>
              </div>
              <div className="logotip__img flex">
                <p>We have a mission to make people around the world better through a healthier diet</p>
                <div className="flex-b">
                  <a href="#">
                    <img width="107" height="85" src={vazirlik} alt="Sog'liqni saqlash vazirligi logotipi" />
                  </a>
                  <a href="#">
                    <img width="107" height="85" src={akfa} alt="Akfa medline logotipi" />
                  </a>
                  <a href="#">
                    <img width="107" height="85" src={plus} alt="Logotip" />
                  </a>
                  <a href="#">
                    <img width="107" height="85" src={hijoma} alt="Hijom logotip" />
                  </a>
                  <a href="#">
                    <img width="107" height="85" src={a} alt="Logotip" />
                  </a>
                </div>
              </div>
            </div>
            <div className="logotip__contact">
              <a href="tel:99-123-45-67">Call us +998 99 123 45 67</a>
              <a href="mailto:info@zaytunmed.com">Email us:info@zaytunmed.com</a>
              <a href="#">4/7, Chilonzor, Tashkent, Uzbekistan</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Logotip