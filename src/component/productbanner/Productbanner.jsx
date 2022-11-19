import React from "react";
import { Link } from "react-router-dom";
import "./productbanner.css";

const Productbanner = () => {
  return (
    <div className="productbanner section__padding">
      <div className="productbanner__grid1">
        <Link to="/products">
          <div className="productbanner__grid1_child color2">
            <p>Casual</p>
            <h1>Collections</h1>
            <img
              src="https://res.cloudinary.com/juhan-cloud/image/upload/v1638282405/products/HLB1QzCrU9zqK1RjSZFLq6An2XXaJ-removebg-preview_asxc20.png"
              alt=""
            />
          </div>
        </Link>

        <Link to="/products">
          <div className="productbanner__grid1_child color3">
            <p>Winter</p>
            <h1>Collections</h1>
            <img
              src="https://res.cloudinary.com/juhan-cloud/image/upload/v1638283608/products/image-removebg-preview_luivfr.png"
              alt=""
            />
          </div>
        </Link>
      </div>

      <Link to="/collections/big-vibe">
        <div className="productbanner__grid2 color">
          <p>Big Vibe</p>
          <h1>Collections</h1>
          <img
            src="https://res.cloudinary.com/juhan-cloud/image/upload/v1638283351/products/Q9080010_mensCasualHub_p1_07-removebg-preview_skpcif.png"
            alt=""
          />
        </div>
      </Link>
    </div>
  );
};

export default Productbanner;
