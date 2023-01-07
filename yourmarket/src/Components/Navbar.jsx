import React, { useContext } from "react";
import {
   faArrowRightToBracket,
   faHeart,
   faShoppingBasket,
   faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink } from "react-router-dom";
import "../Styles/navbar.css";
import Cart from "../Pages/Cart";
import { Store } from "../Store";

const Navbar = () => {
   const { state, dispatch: ctxDispatch } = useContext(Store);
   const { cart, wish, userInfo } = state;

   const signoutHandler = () => {
      ctxDispatch({ type: "USER_SIGNOUT", userInfo: userInfo });
   };

   return (
      <div className="n-container">
         <div className="n-row">
            <div className="n-col">
               <span className="n-email">boufasamourad@outlook.fr</span>
               {userInfo ? (
                  <Link to="/account">
                     <span className="guestuser">
                        <FontAwesomeIcon icon={faUser} />
                        {userInfo.name}
                     </span>
                  </Link>
               ) : (
                  <span className="guestuser">
                     <FontAwesomeIcon icon={faUser} />
                     Guest
                  </span>
               )}
            </div>
            <div className="n-col">
               <div className="socials">
                  <a
                     href="https://www.facebook.com/MouradObito/"
                     target="_blank">
                     <img
                        id="socials"
                        src="/Images/socials/facebook.svg"
                        alt="my facebook"
                     />
                  </a>
                  <a
                     href="https://www.instagram.com/mourad.boufasa/"
                     target="_blank">
                     <img
                        id="socials"
                        src="/Images/socials/instagram.svg"
                        alt="my instagram"
                     />
                  </a>
               </div>
            </div>
         </div>

         <div className="n-row">
            <div className="n-col">
               <NavLink to="/">
                  <span id="logo">
                     <span id="capital">F</span>ashion
                     <span id="capital">s</span>hop
                  </span>
               </NavLink>
            </div>
            <div className="n-col">
               <div className="icons">
                  {userInfo ? (
                     <Link to="#signout" onClick={signoutHandler}>
                        <span>
                           <FontAwesomeIcon icon={faArrowRightToBracket} />
                           <span>Login</span>
                        </span>
                     </Link>
                  ) : (
                     <Link to="/login">
                        <span>
                           <FontAwesomeIcon icon={faArrowRightToBracket} />
                           <span>Login</span>
                        </span>
                     </Link>
                  )}
                  <a href="/wish">
                     <span>
                        <FontAwesomeIcon icon={faHeart} />
                        {wish.wishItems.length > 0 && (
                           <span className="totalItems">
                              {wish.wishItems.length}
                           </span>
                        )}
                     </span>
                  </a>
                  <a href="/cart">
                     <span>
                        <FontAwesomeIcon icon={faShoppingBasket} />
                        {cart.cartItems.length > 0 && (
                           <span className="totalItems">
                              {cart.cartItems.reduce(
                                 (a, c) => a + c.quantity,
                                 0
                              )}
                           </span>
                        )}
                     </span>
                  </a>
               </div>
            </div>
         </div>

         <div className="n-row">
            <nav className="nav">
               <ul className="items">
                  <li className="list">
                     <NavLink to="/" end activeclassname="active">
                        Home
                     </NavLink>
                  </li>
                  <li className="list">
                     <NavLink to="/shop" activeclassname="active">
                        Shop
                     </NavLink>
                  </li>
                  <li className="list">
                     <NavLink to="/about" activeclassname="active">
                        About
                     </NavLink>
                  </li>
                  <li className="list">
                     <NavLink to="/contact" activeclassname="active">
                        Contact
                     </NavLink>
                  </li>
               </ul>
               <button className="btn">BTN</button>
            </nav>
         </div>
      </div>
   );
};

export default Navbar;
