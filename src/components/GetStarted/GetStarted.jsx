import React from "react";
import "./GetStarted.css";

const GetStarted = () => {
  return (
    <section className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText golden-text">
            Get started with Srivastava Homes
          </span>
          <span className="secondaryText golden-text">
            Subscribe and find super attractive price quotes
            <br />
            Find your residence soon
          </span>
          <button className="button">
            <a href="mailto:ammuvastava@gmail.com" className="golden-text">
              Get Started
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
