import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <img
            src="./Srivastava_homes.png"
            alt="Company Logo"
            className="footer-logo" // Add a class to the image
          />
          <p className="footer-description">
            Our vision is to make all people the best place to live for them.
          </p>
        </div>

        <div className="footer-column">
          <p className="footer-text">Jamshedpur, Jharkhand</p>
        </div>

        <div className="footer-column">
          <h3 className="footer-heading">Explore</h3>
          <ul className="footer-list">
            <li className="footer-list-item">Property</li>
            <li className="footer-list-item">Services</li>
            <li className="footer-list-item">About us</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-text">
          &copy; {new Date().getFullYear()} Srivastava Homes. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
