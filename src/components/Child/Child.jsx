import React from 'react'
import './Child.scss'

function Child() {
  return (
    <div className="child-section">
      <div className="container">
        <div className="child flex-b">
          <div>
            <h4>Bolalar  massaji  </h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae egestas facilisis aliquet.</p>
          </div>
          <form action="" className="flex-b">
            <input type="text" placeholder="Emailingizni  kiriting..." />
            <button type="submit">
              A’zo bo’lish
            </button>
          </form>
        </div>
      </div>

    </div>
  )
}

export default Child