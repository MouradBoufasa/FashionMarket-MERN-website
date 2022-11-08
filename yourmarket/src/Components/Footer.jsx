import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Styles/footer.css'
const Footer = () => {
  return (
<div className="f-container">
  <div className="f-row">
    <div className="f-col">
    <NavLink to="/"><span id="logo"><span id="capital">F</span>ashion<span id="capital">s</span>hop</span></NavLink>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo qui quod vel sequi accusamus iure, ducimus voluptas aliquid impedit magni, adipisci id porro corrupti.</p>
    </div>
    <div className="f-col">
      <h2>Quick Links</h2>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/shop">Shop</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </div>
    <div className="f-col">
    <h2>Category</h2>
      <ul>
        <li>
          <NavLink to="/">Men</NavLink>
        </li>
        <li>
          <NavLink to="/">Women</NavLink>
        </li>
        <li>
          <NavLink to="/">Kids</NavLink>
        </li>
      </ul>
    </div>
    <div className="f-col">
      <h2>Stay in touch with me</h2>
              <div className="socials">
                <a href=""><img id="socials" src="/Images/socials/facebook.svg" alt="my facebook" /></a>
                <a href=""><img id="socials" src="/Images/socials/instagram.svg" alt="my instagram" /></a>
                <a href=""><img id="socials" src="/Images/socials/twitter.svg" alt="my twitter" /></a>
            </div>
    </div>
  </div>
  <div className="f-copyrow">
    <p>&copy; 2022. All Rights Reserved. Powered by Mourad Boufasa</p>
  </div>
</div>
  )
}

export default Footer