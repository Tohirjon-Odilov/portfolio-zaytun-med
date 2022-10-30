import React from 'react'
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
                <a className="active" href="Biz haqimizda">Biz haqimizda</a></li>
              <li className="header__item">
                <a href="Klinika">Klinika</a></li>
              <li className="header__item">
                <a href="Dorixona">Dorixona</a></li>
              <li className="header__item">
                <a href="Kurslar">Kurslar</a></li>
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