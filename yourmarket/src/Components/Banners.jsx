import {
   faArrowRightArrowLeft,
   faCheck,
   faPhoneVolume,
   faShippingFast,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../Styles/banners.css";
const Banners = () => {
   return (
      <div className="b-container">
         <div className="b-row">
            <div className="b-col">
               <FontAwesomeIcon icon={faCheck} />
               <span>Qaulity Product</span>
            </div>
            <div className="b-col">
               <FontAwesomeIcon icon={faShippingFast} />
               <span>Free Shipping</span>
            </div>
            <div className="b-col">
               <FontAwesomeIcon icon={faArrowRightArrowLeft} />
               <span>14-Day Return</span>
            </div>
            <div className="b-col">
               <FontAwesomeIcon icon={faPhoneVolume} />
               <span>24/7 Support</span>
            </div>
         </div>
      </div>
   );
};

export default Banners;
