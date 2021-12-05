import React from "react";
import Navbar from "../../component/navbar/Navbar";
import Footer from "../../component/footer/Footer";
import Materialstepper from "../../component/stepper/Stepper.jsx";

import "./checkoutcomplete.css";
const Checkoutcomplete = () => {
  return (
    <>
      <Navbar />
      <Materialstepper activestep={2} />
      <div className="section__padding" style={{ paddingBottom: "6rem" }}>
        <div className="checkoutcomplete__container">
          <h1>Checkout Complete!</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button>Continue Shopping</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Checkoutcomplete;
