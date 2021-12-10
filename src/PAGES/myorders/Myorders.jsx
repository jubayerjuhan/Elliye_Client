import React from "react";
import Footer from "../../component/footer/Footer.jsx";
import Navbar from "../../component/navbar/Navbar.jsx";
import "./myorders.css";
import { useDispatch, useSelector } from "react-redux";
import { toastError, toastSuccess } from "../../utils/toastify.js";
import Spinner from "./../../component/spinner/Spinner";
import { getUserOrder } from "../../actions/orderactions.js";
const Myorders = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getUserOrder());
  }, [dispatch]);
  const { loading, orders, error, success } = useSelector(
    (state) => state.order
  );

  if (error) {
    toastError("Unknown Error Occured");
  }

  return (
    <>
      {loading && <Spinner />}
      <Navbar />
      <div className="myorders__container section__full-padding">
        <div className="orders__wrapper">
          <div className="order__header">
            <p>Order Id</p>
            <p>Order Status</p>
            <p>Order Total Price</p>
          </div>
          {orders &&
            orders.map((order, i) => (
              <div className="order" key={i}>
                <div className="order__id">
                  <p>{order._id}</p>
                </div>
                <div className="order__status">
                  <p
                    className={
                      order.orderStatus === "Processing" ? "red" : "green"
                    }
                  >
                    {order.orderStatus}
                  </p>
                </div>
                <div className="order__price">
                  <p>{order.priceBreakdown.totalPrice}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Myorders;
