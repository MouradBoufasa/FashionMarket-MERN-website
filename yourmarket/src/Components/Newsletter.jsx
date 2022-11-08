import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import "../Styles/newsletter.css"
const Newsletter = () => {
  return (
<div className="news-container">
    <div className="news-row">
      <div className="news-col">
        <h2 className="news-title">Newsletter</h2>
        <p className="news-desc">Get timely updated from your favorite store</p>
        <div className="input-container">
          <input type="text" placeholder='Your E-mail' />
          <button><FontAwesomeIcon icon={faPaperPlane} /></button>
        </div>
      </div>
    </div>
</div>
  )
}

export default Newsletter