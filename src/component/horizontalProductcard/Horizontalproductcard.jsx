import React from "react";
import "./horizontalProductcard.css";

const Horizontalproductcard = () => {
  return (
    <div className="hProductcard__container">
      <div className="hProductcard__image">
        <img src="https://via.placeholder.com/300x300" alt="" />
      </div>
      <div className="hProductcard__info">
        <h2>Product Name </h2>
        <p>$200</p>
      </div>
    </div>
  );
};

export default Horizontalproductcard;
