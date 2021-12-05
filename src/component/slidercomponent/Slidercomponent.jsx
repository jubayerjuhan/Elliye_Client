import React from "react";
import "./slidercomponent.css";
import { BsPhone, BsArrowRight } from "react-icons/bs";
import { GiConverseShoe, GiSleevelessJacket } from "react-icons/gi";

const Slidercomponent = () => {
  return (
    <div className="slider__container">
      <div className="slider__category">
        <div className="slider__category-icon">
          <BsPhone />
          <p>Phone</p>
        </div>
        <div className="slider__category-icon">
          <span class="iconify" data-icon="ion:shirt-outline"></span>
          <p>Shirt</p>
        </div>
        <div className="slider__category-icon">
          <GiConverseShoe />
          <p>Shoe</p>
        </div>
        <div className="slider__category-icon">
          <span class="iconify" data-icon="ps:pant"></span>
          <p>Pants</p>
        </div>
        <div className="slider__category-icon">
          <GiSleevelessJacket />
          <p>Jacket</p>
        </div>
        <div className="slider__category-icon">
          <span class="iconify" data-icon="ion:shirt-outline"></span>
          <p>Pants</p>
        </div>
      </div>
      <div className="slider__title_button">
        <p>50% Off Now</p>
        <h1>Winter Collection</h1>
        <button>
          Shop Now <BsArrowRight />
        </button>
      </div>

      <div className="slider__image">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/3/37/Vue_sur_le_Tanargue.JPG"
          alt=""
        />
      </div>
    </div>
  );
};

export default Slidercomponent;
