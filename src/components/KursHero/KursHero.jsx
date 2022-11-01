import React from 'react'
import './KursHero.scss'

function KursHero() {
  return (
    <div className="kursHero-section">
      <div className="container">
        <div className="kursHero">
          <h3>Boshlang’ich tabobat asoslari va Hijoma</h3>
          <h4>Ayollar uchun maxsus 2 oylik kurs</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae egestas facilisis aliquet velit in sapien sed sed proin.</p>
          <div className="flex">
            <a href="#startLesson">Darsni boshlash</a>
            <a href="#view">Boshqa kurslarni ko’rish</a>
          </div>
        </div>
      </div>

    </div>
  )
}

export default KursHero