import React, { useRef } from "react";
import Navbar from "../../component/navbar/Navbar";
import Footer from "../../component/footer/Footer";
import Stapper from "../../component/stepper/Stepper";
import "./checkout.css";
import Shippingform from "./../../component/shippingform/Shippingform";
import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { authaxios } from "../../utils/axios.js";
import { toastError, toastSuccess } from "../../utils/toastify.js";
import { useDispatch, useSelector } from "react-redux";
import { placeOrder } from "../../actions/orderactions.js";
import { useNavigate } from "react-router";
import Spinner from "./../../component/spinner/Spinner";

const Checkout = () => {
  const navigate = useNavigate();
  const paybtn = useRef(null);
  const stripe = useStripe();
  const elements = useElements();
  const { shippingAddress, cartItems } = useSelector((state) => state.cart);
  const { success, error } = useSelector((state) => state.order);
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(false);

  const paymentData = {
    amount: Math.round(JSON.parse(sessionStorage.getItem("amount")).totalPrice),
  };
  console.log(paymentData);

  if (success) {
    toastSuccess("Order Placed Successfully");
    dispatch({ type: "RESET_SUCCESS" });
  }
  if (error) {
    toastError(Error);
    dispatch({ type: "CLEAR_ERROR" });
  }

  const handleCheckout = async (e) => {
    const orderData = {
      shippingInfo: shippingAddress,
      orderItems: cartItems,
      priceBreakdown: JSON.parse(sessionStorage.getItem("amount")),
    };

    e.preventDefault();
    paybtn.current.disabled = true;
    setLoading(true);
    try {
      const { data } = await authaxios.post("/payment/process", paymentData);

      if (!stripe || !elements) {
        paybtn.current.disabled = false;
        setLoading(false);
        return;
      }
      const result = await stripe.confirmCardPayment(data.client_secret, {
        payment_method: {
          card: elements.getElement(CardNumberElement),
          billing_details: {
            name: "Juhan",
            email: "juhan@gmail.com",
            address: {
              line1: "shippingInfo.street",
              city: "shippingInfo.city",
              state: "shippingInfo.state",
              postal_code: "shippingInfo.zipcode",
              country: "BD",
            },
          },
        },
      });

      if (result.error) {
        toastError(result.error.message);
        paybtn.current.disabled = false;
        setLoading(false);
      } else {
        // If Payment Success Then This Will Happen
        if (result.paymentIntent.status === "succeeded") {
          paybtn.current.disabled = false;
          setLoading(false);
          toastSuccess("Payment Successful");
          orderData.paymentInfo = {
            id: result.paymentIntent.id,
            status: result.paymentIntent.status,
          };
          dispatch(placeOrder(orderData));
          localStorage.removeItem("cart");
          navigate("/checkout-complete");
        } else {
          setLoading(false);
          paybtn.current.disabled = false;
          toastError("Payment Failed");
        }
      }
    } catch (err) {
      console.log(err);
      toastError("Unexpected Error While Processing Payment");
      paybtn.current.disabled = true;
      setLoading(false);
    }
  };
  return (
    <>
      {loading && <Spinner />}
      <Navbar />
      <Stapper activestep={1} />
      <div className="checkout__container section__padding">
        <div className="shipping__address-section">
          <p className="shipping__address-section-title">Buyer Info</p>
          <Shippingform />
        </div>
        <div className="checkout__section-cc">
          {shippingAddress && (
            <form onSubmit={handleCheckout}>
              <CardNumberElement className="cardInput" />
              <CardExpiryElement className="cardInput" />
              <CardCvcElement className="cardInput" />
              <button ref={paybtn} className="paybtn">
                Pay Now
              </button>
            </form>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
