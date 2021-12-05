import React from "react";
import Navbar from "../../component/navbar/Navbar";
import Footer from "../../component/footer/Footer";
import Stapper from "../../component/stepper/Stepper";
import "./checkout.css";
import Shippingform from "./../../component/shippingform/Shippingform";

const Checkout = () => {
  return (
    <>
      <Navbar />
      <Stapper activestep={1} />
      <div className="checkout__container section__padding">
        <div className="shipping__address-section">
          <p className="shipping__address-section-title">Buyer Info</p>
          <Shippingform />
        </div>
        <div className="checkout__section-cc">b</div>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
