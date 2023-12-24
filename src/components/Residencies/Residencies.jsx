import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "./Residencies.css";
import data from "../../utils/slider.json";
import { sliderSettings } from "../../utils/common";

const Residencies = () => {
  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexCenter">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">
            <br></br>Popular Residencies
          </span>
        </div>

        <Swiper {...sliderSettings}>
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="r-card">
                <img src={card.image} alt="Residency" />

                <span className="secondaryText">
                  <br></br>
                  {card.name}
                </span>
                <span className="primaryText">
                  <br></br>
                  {card.price}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Residencies;
