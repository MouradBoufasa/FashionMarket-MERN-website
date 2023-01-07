import {
  faMailBulk,
  faMailForward,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../Styles/contact.css";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="contact-container">
        <div className="contact-row">
          <div className="title">
            <h2>Leave your feedback below</h2>
          </div>

          <form className="contact-form">
            <label htmlFor="firstname">First Name</label>
            <input type="text" id="firstname" placeholder="First Name" />

            <label htmlFor="lastname">Name</label>
            <input type="text" id="lastname" placeholder="Last Name" />

            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" placeholder="Write E-mail" />

            <label htmlFor="phone">Phone Number</label>
            <input
              type="email:phone"
              id="phone"
              placeholder="Write your Phone Number"
            />

            <label htmlFor="feedback">Feedback</label>
            <textarea
              id=""
              cols="50"
              rows="10"
              maxLength={500}
              placeholder="   Leave your feedback...    "
            ></textarea>
            <button type="submit">Submit</button>
          </form>
          <div className="contact-col">
            <p>Thanks for your visit</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
