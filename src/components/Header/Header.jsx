import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Header.scss"

function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <div className="header flex-b">
          <div className="flex-b">
            <a href="/" className="header__link">
              <img src="/site-logo.svg" alt="site logo" />
            </a>
            <ul className="header__list flex-b">
              <li className="header__item">
                <NavLink to={'/'} href="Biz haqimizda">Biz haqimizda</NavLink>
              </li>
              <li className="header__item">
                <NavLink to={'/klinika'} href="Biz haqimizda">Kilinika</NavLink>
              </li>
              <li className="header__item">
                <NavLink to={'/dorixona'} href="Dorixona">Dorixona</NavLink>
              </li>
              <li className="header__item">
                <NavLink to={'/kurslar'} href="Kurslar">Kurslar</NavLink>
              </li>
            </ul>
          </div>
          <select name="lang" id="lang">
            <option value="uzb">O'zbekcha</option>
            <option value="eng">Ingilizcha</option>
            <option value="ru">Ruscha</option>
          </select>
        </div>
      </div>
    </header>
  )
}

export default Header