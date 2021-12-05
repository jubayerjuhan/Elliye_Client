import React from "react";
import Navbar from "../../component/navbar/Navbar";
import "./productlist.css";
import Slider from "@mui/material/Slider";
import { AiFillStar } from "react-icons/ai";
import { IoColorFilterOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import ProductcardPrimary from "../../component/productcard-primary/ProductcardPrimary";
import Pagination from "../../component/pagination/Pagination";
import Footer from "../../component/footer/Footer";

const Productlist = () => {
  const [value] = React.useState([0, 100]);
  const [open, setOpen] = React.useState(false);

  return (
    <>
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
            {products.map((product, i) => (
              <Link to={`/product/${product.name}`}>
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

const products = [
  {
    name: "sjdhsajdhas ajshdjasd jsdhjasd jasdhjas jashdjs",
    price: "$1,000",
    image:
      "https://res.cloudinary.com/juhan-cloud/image/upload/v1638200769/products/mbp-spacegray-select-202011_GEO_US-removebg-preview_awprvn.png",
  },
  {
    name: "Macbook 2020 Macbook 2020 Macbook 2020 Macbook 2020",
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
    name: "Bamboo Biriyani asjdhsa dasjdsad ",
    price: "$1,000",
    image: "https://via.placeholder.com/1200x1200",
  },
  {
    name: "Bamboo Biriyani asjdhsa dasjdsad ",
    price: "$1,000",
    image: "https://via.placeholder.com/1200x1200",
  },
  {
    name: "Bamboo Biriyani asjdhsa dasjdsad ",
    price: "$1,000",
    image: "https://via.placeholder.com/1200x1200",
  },
  {
    name: "Bamboo Biriyani asjdhsa dasjdsad ",
    price: "$1,000",
    image: "https://via.placeholder.com/1200x1200",
  },
  {
    name: "Bamboo Biriyani asjdhsa dasjdsad ",
    price: "$1,000",
    image: "https://via.placeholder.com/1200x1200",
  },
  {
    name: "Bamboo Biriyani asjdhsa dasjdsad ",
    price: "$1,000",
    image: "https://via.placeholder.com/1200x1200",
  },
  {
    name: "Bamboo Biriyani asjdhsa dasjdsad sajdhsa djasdjas djashdas jashdj ",
    price: "$1,000",
    image: "https://via.placeholder.com/1200x1200",
  },
  {
    name: "Bamboo Biriyani asjdhsa dasjdsad ",
    price: "$1,000",
    image: "https://via.placeholder.com/1200x1200",
  },
];
export default Productlist;
