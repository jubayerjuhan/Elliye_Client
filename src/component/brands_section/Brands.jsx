import React from "react";
import brands1 from "../../assets/images/brands1.svg";
import brands2 from "../../assets/images/brands2.svg";
import brands3 from "../../assets/images/brands3.svg";
import brands4 from "../../assets/images/brands4.svg";
import "./brands.css";
const Brands = () => {
  return (
    <div
      className="brands__container section__padding"
      style={{ paddingBottom: 0 }}
    >
      <div className="brands__img">
        <img src={brands1} alt="" />
      </div>
      <div className="brands__img">
        <img src={brands2} alt="" />
      </div>
      <div className="brands__img">
        <img src={brands3} alt="" />
      </div>
      <div className="brands__img">
        <img src={brands4} alt="" />
      </div>
    </div>
  );
};

export default Brands;
