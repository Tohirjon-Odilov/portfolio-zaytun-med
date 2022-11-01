import React from 'react'
import "./Search.scss"

function Search() {
  return (
    <div className="search-section">
      <div className="container">
        <div className="search">
          <form action="echo.htmlacademy.ru" method="POST" className="search-form flex-b">
            <select name="" id="" className="search-kategoriya">
              <option defaultValue hidden>Kategoriyalar</option>
              <option value="Siroplar">Siroplar</option>
              <option value="Ma’junlar">Ma’junlar</option>
              <option value="Tabletkalar">Tabletkalar</option>
              <option value="Poroshoklar">Poroshoklar</option>
            </select>
            <input type="search" placeholder="Dori nomini kiriting" />
            <button type="submit">
              Korzina
            </button>
          </form>
          <div className="search-card">
            <div className="search-foiz">
              25% <br /> <span>off</span>
            </div>
            <div className="search-box">
              <h3>
                Barcha siroplarga chegirma
              </h3>
              <a href="#buyurtma">
                hoziroq buyurtma bering
              </a></div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Search