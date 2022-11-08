import React from 'react'
import {faArrowRightToBracket, faHeart, faShoppingBasket, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'
import "../Styles/navbar.css"


const Navbar = () => {
  return (
<div className="n-container">
    <div className="n-row">
        <div className="n-col">
            <span className="n-email">boufasamourad@outlook.fr</span><span className="guestuser"><FontAwesomeIcon icon={faUser}/>Guest</span>
        </div>
        <div className="n-col">
            <div className="socials">
                <a href=""><img id="socials" src="/Images/socials/facebook.svg" alt="my facebook" /></a>
                <a href=""><img id="socials" src="/Images/socials/instagram.svg" alt="my instagram" /></a>
                <a href=""><img id="socials" src="/Images/socials/twitter.svg" alt="my twitter" /></a>
            </div>
        </div>
    </div>

    <div className="n-row">
        <div className="n-col">
                <NavLink to="/"><span id="logo"><span id="capital">F</span>ashion<span id="capital">s</span>hop</span></NavLink>
        </div>
        <div className="n-col">
            <div className="icons">
                    <a href="/login"><span><FontAwesomeIcon icon={faArrowRightToBracket} /><span>Login</span></span></a>
                    <a href="/wish"><span><FontAwesomeIcon icon={faHeart} /><span className="totalItems">0</span></span></a>
                    <a href="/cart"><span><FontAwesomeIcon icon={faShoppingBasket} /><span className="totalItems">0</span></span></a>
            </div>
        </div>
    </div>

    <div className="n-row">
        <nav className="nav">
            <ul classname="items">
                <li className="list"><NavLink to="/" activeClassName="active">Home</NavLink></li>
                <li className="list"><NavLink to="/shop" activeClassName="active">Shop</NavLink></li>
                <li className="list"><NavLink to="/about" activeClassName="active">About</NavLink></li>
                <li className="list"><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
            </ul>
            <button className="btn">BTN</button>
        </nav>
    </div>  
</div>
  )
}

export default Navbar