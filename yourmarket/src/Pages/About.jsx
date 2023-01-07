import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../Styles/about.css";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="contact-container">
        <div className="contact-row">
          <div className="about-title">
            <h2>FashionShop</h2>
          </div>
          <div className="about-website">
            <p>
              An e-commerce website is one that allows people to buy and sell
              physical goods, services, and digital products over the internet
              rather than at a brick-and-mortar location. Through an e-commerce
              website, a business can process orders, accept payments, manage
              shipping and logistics, and provide customer service.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
