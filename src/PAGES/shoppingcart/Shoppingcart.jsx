import React from "react";
import Navbar from "../../component/navbar/Navbar";
import Footer from "../../component/footer/Footer";
import Stepper from "../../component/stepper/Stepper";
import "./shoppingcart.css";

const Shoppingcart = () => {
  return (
    <>
      <Navbar />
      <Stepper activestep={0} />
      <div className="shopping-cart__container section__padding">
        <div className="shopping-cart__item-header">
          <p>Product</p>
          <p>Quantity</p>
          <p>Price</p>
          <p>Total</p>
        </div>
        <div className="shopping-cart__items-container">
          <ShoppingcartItem />
          <ShoppingcartItem />
          <ShoppingcartItem />
        </div>

        <div className="shopping-cart__pricing">
          <div className="shopping-cart__pricing-subtotal">
            <p>Subtotal</p>
            <p>$2323</p>
          </div>
          <div className="shopping-cart__pricing-tax">
            <p>Tax</p>
            <p>$230</p>
          </div>
          <div className="shopping-cart__total">
            <p>Total</p>
            <p>$28287</p>
          </div>
        </div>

        <div className="shopping-cart__action_btn">
          <button>Continue Shopping</button>
          <button>Chackout</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

const ShoppingcartItem = () => (
  <div className="shopping-cart__items">
    <div className="cart-items__image_name">
      <img src="https://via.placeholder.com/400x400" alt="" />
      <p>iPhone 13 Pro Max 2021 Edition</p>
    </div>

    <div className="cart-items__quantity">
      <button className="cart-items__quantity-button">-</button>
      <p>1</p>
      <button className="cart-items__quantity-button">+</button>
    </div>

    <div className="cart-items__price">
      <p>$1,000.00</p>
    </div>
    <div className="cart-items__total-price">
      <p>$1,000.00</p>
    </div>
  </div>
);
export default Shoppingcart;
