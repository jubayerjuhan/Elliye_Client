import React from "react";
import Horizontalproductcard from "../horizontalProductcard/Horizontalproductcard";
import "./hotsection.css";
import { useSelector } from "react-redux";
const Hotsection = () => {
  let { products } = useSelector((state) => state.allproducts);
  const newArrival = products?.slice(0, 4);

  const popular = [];

  if (products) {
    for (let i = 0; i < 4; i++) {
      let randomNumber = Math.floor(Math.random(1, 100) * products?.length);
      let isExist = popular.find((item) => item === products[randomNumber]);
      if (!isExist) {
        popular.push(products[randomNumber]);
      } else {
        i--;
      }
    }
  }
  console.log(popular);

  return (
    <div className="hotsection__container section__padding">
      <div className="hotsection__new-arrival">
        <h4 className="hotsection__title">New Arrival</h4>
        <div className="hotsection__new-arrival_products">
          {newArrival &&
            newArrival.map((product, i) => (
              <Horizontalproductcard key={i} product={product} />
            ))}
        </div>
      </div>

      <div className="hotsection__popular-week">
        <h4 className="hotsection__title">Popular This Week</h4>
        <div className="hotsection__popular-week_products">
          {popular &&
            popular.map((product, i) => (
              <Horizontalproductcard key={i} product={product} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Hotsection;
