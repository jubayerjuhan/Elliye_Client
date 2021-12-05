import React from "react";
import Horizontalproductcard from "../horizontalProductcard/Horizontalproductcard";
import "./hotsection.css";
const Hotsection = () => {
  return (
    <div className="hotsection__container section__padding">
      <div className="hotsection__new-arrival">
        <h4 className="hotsection__title">New Arrival</h4>
        <div className="hotsection__new-arrival_products">
          <Horizontalproductcard></Horizontalproductcard>
          <Horizontalproductcard></Horizontalproductcard>
          <Horizontalproductcard></Horizontalproductcard>
          <Horizontalproductcard></Horizontalproductcard>
        </div>
      </div>

      <div className="hotsection__popular-week">
        <h4 className="hotsection__title">Popular This Week</h4>
        <div className="hotsection__popular-week_products">
          <Horizontalproductcard></Horizontalproductcard>
          <Horizontalproductcard></Horizontalproductcard>
          <Horizontalproductcard></Horizontalproductcard>
          <Horizontalproductcard></Horizontalproductcard>
        </div>
      </div>
    </div>
  );
};

export default Hotsection;
