import React, { useEffect } from "react";
import Navbar from "../../component/navbar/Navbar";
import "./productlist.css";
import Slider from "@mui/material/Slider";
import { AiFillStar } from "react-icons/ai";
import { IoColorFilterOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import ProductcardPrimary from "../../component/productcard-primary/ProductcardPrimary";
import Pagination from "../../component/pagination/Pagination";
import Footer from "../../component/footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../component/spinner/Spinner.jsx";
import { getallProducts } from "../../actions/productactions.js";

const Productlist = () => {
  const dispatch = useDispatch();
  const [value] = React.useState([0, 100]);
  const [open, setOpen] = React.useState(false);
  const { products, success, loading } = useSelector(
    (state) => state.allproducts
  );

  useEffect(() => {
    dispatch(getallProducts());
  }, [dispatch]);

  if (success) {
    dispatch({ type: "RESET_SUCCESS" });
  }

  return (
    <>
      {loading && <Spinner />}
      <Navbar />
      <div className="productlist__container section__padding">
        <div className="show_filters" onClick={() => setOpen(!open)}>
          <IoColorFilterOutline />
          <p>Show Filters</p>
        </div>
        {open ? (
          <div className="slide-left">
            <ProductlistFilterLeft value={value} />
          </div>
        ) : (
          ""
        )}
        <div className="productlist__content__title">
          <h4>Product List</h4>
        </div>
        <div className="productlist__content">
          <ProductlistFilterLeft value={value} />
          <div className="productlist__all-products">
            {products &&
              products.map((product, i) => (
                <Link to={`/product/${product._id}`}>
                  <ProductcardPrimary key={i} product={product} />
                </Link>
              ))}
          </div>
        </div>
        <Pagination />
      </div>
      <Footer />
    </>
  );
};

const ProductlistFilterLeft = ({ value }) => (
  <div className="productlist__filter">
    <div className="filter__category">
      <p>Filter By Category</p>
      <select>
        <option>All</option>
        <option>Category 1</option>
        <option>Category 2</option>
        <option>Category 3</option>
      </select>
    </div>

    <div className="filter__price">
      <p>Filter By Price</p>
      <Slider value={value}></Slider>
    </div>

    <div className="filter__review">
      <p>Filter By review</p>
      <form action="">
        <div className="review__checkbox">
          <input type="checkbox" name="" id="" value="1" />
          <AiFillStar />
        </div>
        <div className="review__checkbox">
          <input type="checkbox" name="" id="" value="1" />
          <AiFillStar />
          <AiFillStar />
        </div>
        <div className="review__checkbox">
          <input type="checkbox" name="" id="" value="1" />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <div className="review__checkbox">
          <input type="checkbox" name="" id="" value="1" />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <div className="review__checkbox">
          <input type="checkbox" name="" id="" value="1" />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
      </form>
    </div>
  </div>
);

export default Productlist;
