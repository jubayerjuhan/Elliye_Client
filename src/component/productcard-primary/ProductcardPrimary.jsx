import React from "react";
import "./productcardprimary.css";

const ProductcardPrimary = ({ product }) => {
  return (
    <div className="productCard">
      <div className="productCard__image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="productCard__name">
        <h3>{product.name}</h3>
      </div>
      <div className="productCard__price">
        <p>{product.price}</p>
      </div>
    </div>
  );
};

export default ProductcardPrimary;
