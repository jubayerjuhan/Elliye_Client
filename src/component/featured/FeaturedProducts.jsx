import React from "react";
import { Link } from "react-router-dom";
import "./featuredproducts.css";
import { BsArrowRight } from "react-icons/bs";
import ProductcardPrimary from "./../productcard-primary/ProductcardPrimary";

const FeaturedProducts = () => {
  const products = [
    {
      name: "Macbook 2020",
      price: "$1,000",
      image:
        "https://res.cloudinary.com/juhan-cloud/image/upload/v1638200769/products/mbp-spacegray-select-202011_GEO_US-removebg-preview_awprvn.png",
    },
    {
      name: "Macbook 2020",
      price: "$1,000",
      image:
        "https://res.cloudinary.com/juhan-cloud/image/upload/v1638200769/products/mbp-spacegray-select-202011_GEO_US-removebg-preview_awprvn.png",
    },
    {
      name: "Macbook 2020",
      price: "$1,000",
      image:
        "https://res.cloudinary.com/juhan-cloud/image/upload/v1638200769/products/mbp-spacegray-select-202011_GEO_US-removebg-preview_awprvn.png",
    },
    {
      name: "iPhone 13 Pro Max",
      price: "$1,000",
      image:
        "https://res.cloudinary.com/juhan-cloud/image/upload/v1636820142/products/mbg9mq6vmdzgysosv221.png",
    },
    {
      name: "Macbook 2020",
      price: "$1,000",
      image:
        "https://res.cloudinary.com/juhan-cloud/image/upload/v1638200769/products/mbp-spacegray-select-202011_GEO_US-removebg-preview_awprvn.png",
    },
    {
      name: "Macbook 2020",
      price: "$1,000",
      image: "https://via.placeholder.com/400x400",
    },
    {
      name: "Macbook 2020",
      price: "$1,000",
      image: "https://via.placeholder.com/300x300",
    },
    {
      name: "Bamboo Biriyani asjdhsa dasjdsad sajdasd jashdjsad ajsdhs",
      price: "$1,000",
      image: "https://via.placeholder.com/1200x1200",
    },
  ];

  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    if (product.name.length > 30) {
      product.name = product.name.slice(0, 30) + "...";
    }
  }
  return (
    <div className="fp__container section__padding" id="featured">
      <div className="fp__container-heading">
        <h4>Featured</h4>
        <Link to="/products/featured">
          <p>View All</p>
          <BsArrowRight />
        </Link>
      </div>

      <div className="fp__container-section">
        <div className="fp__banner color">
          <div className="banner__image">
            <img
              src="https://res.cloudinary.com/juhan-cloud/image/upload/v1638200769/products/mbp-spacegray-select-202011_GEO_US-removebg-preview_awprvn.png"
              alt="Banner"
            />
            <h1>5% Discount</h1>
            <p>On Macbooks</p>
          </div>
        </div>
        <div className="fp__products">
          {products.map((product, i) => (
            <Link to={`/products/${product.name}`}>
              <ProductcardPrimary product={product} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
