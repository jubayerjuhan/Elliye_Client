import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./featuredproducts.css";
import { BsArrowRight } from "react-icons/bs";
import ProductcardPrimary from "./../productcard-primary/ProductcardPrimary";
import { useDispatch, useSelector } from "react-redux";
import { toastError } from "../../utils/toastify.js";
import Spinner from "../spinner/Spinner.jsx";
import { getallProducts } from "../../actions/productactions.js";

const FeaturedProducts = () => {
  const { products, success, loading, error } = useSelector(
    (state) => state.allproducts
  );
  const dispatch = useDispatch();

  if (products) {
    for (let i = 0; i < products.length; i++) {
      const product = products[i];
      if (product.name.length > 30) {
        product.name = product.name.slice(0, 30) + "...";
      }
    }
  }
  useEffect(() => {
    dispatch(getallProducts());
  }, [dispatch]);

  if (error) {
    toastError(error);
  }

  return (
    <>
      {loading && <Spinner />}
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
            {products?.map((product, i) => (
              <Link key={i} to={`/products/${product.name}`}>
                <ProductcardPrimary product={product} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedProducts;
