import React from 'react'
import './Master.scss'
import doctor1 from '../../assets/img/doctor.png'
import doctor2 from '../../assets/img/doctor2.png'
import doctor3 from '../../assets/img/doctor3.png'
import doctor4 from '../../assets/img/doctor4.png'
import doctor5 from '../../assets/img/doctor5.png'

function Master() {
  return (
    <div className="master-section">
      <div className="container">
        <div className="master">
          <h3 className="master__title">
            Malakali mutaxassislarimiz
          </h3>
          <p>
            We offer complete healthcare to individuals with various health concerns
          </p>
        </div>
      </div>
      <div className="cards flex-c">
        <div className="card">
          <img src={doctor1} alt="Doctor images" />
          <strong>Maria Andarolo</strong>
          <span>Dentist</span>
        </div>
        <div className="card">
          <img src={doctor2} alt="Doctor images" />
          <strong>Maria Andarolo</strong>
          <span>Dentist</span>
        </div>
        <div className="card">
          <img src={doctor3} alt="Doctor images" />
          <strong>Maria Andarolo</strong>
          <span>Dentist</span>
        </div>
        <div className="card">
          <img src={doctor4} alt="Doctor images" />
          <strong>Maria Andarolo</strong>
          <span>Dentist</span>
        </div>
        <div className="card">
          <img src={doctor5} alt="Doctor images" />
          <strong>Maria Andarolo</strong>
          <span>Dentist</span>
        </div>
      </div>
    </div>
  )
}

export default Master