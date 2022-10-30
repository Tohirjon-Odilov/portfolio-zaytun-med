import React, { useState } from 'react'
import './Questions.scss'
import down from '../../assets/img/down.svg'
import up from '../../assets/img/up.svg'
// import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

function Questions() {
  const [info, setInfo] = useState(false)
  const [info1, setInfo1] = useState(false)
  const [info2, setInfo2] = useState(false)
  const [info3, setInfo3] = useState(false)
  return (
    <div className="questions-section">
      <div className="container">
        <div className="questions flex">
          <div className="questions__toggle">
            <h3 className="questions__title">
              eng ko’p beriladigan savollar
            </h3>
            <ul>
              <li>
                <div className="flex-b">
                  <h4>Hijoma nima va u kimlarda qo’llanilishi mumkin?</h4>
                  <button onClick={() => setInfo(prev => !prev)}>{info ? <img src={down} alt="arrow down" /> : <img src={up} alt="arrow down" />}</button>
                </div>
                {info && <div className="down">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</div>}
              </li>
              <li>
                <div className="flex-b">
                  <h4>Darsonavl nima?</h4>
                  <button onClick={() => setInfo1(prev => !prev)}>{info1 ? <img src={down} alt="" /> : <img src={up} alt="arrow down" />}</button>
                </div>
                {info1 && <div className="down">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</div>}
              </li>
              <li>
                <div className="flex-b">
                  <h4>Zuluk bilan davolash ayollarga to'g'ri keladimi?</h4>
                  <button onClick={() => setInfo2(prev => !prev)}>{info2 ? <img src={down} alt="" /> : <img src={up} alt="arrow down" />}</button>
                </div>
                {info2 && <div className="down">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</div>}
              </li>
              <li>
                <div className="flex-b">
                  <h4>Mahsulotlaringizni yetkazib berish xizmati mavjudmi?</h4>
                  <button onClick={() => setInfo3(prev => !prev)}>{info3 ? <img src={down} alt="" /> : <img src={up} alt="arrow down" />}</button>
                </div>
                {info3 && <div className="down">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</div>}
              </li>
            </ul>
          </div>
          <div className="questions__info">
            <p>
              Fikr - kuchli kasallikni keltirib chiqarish va uni davolashga qodir.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Questions