import React from "react";
import logo from "../../assets/images/logo.svg";
import { BiSearchAlt2 } from "react-icons/bi";
import { FaOpencart } from "react-icons/fa";
import "./navbar.css";
import { Link } from "react-router-dom";
import { Twirl as Hamburger } from "hamburger-react";
import { FaRegUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
export const Menu = () => (
  <>
    <Link to="#newarrivals">New Arrivals</Link>
    <Link to="/allproducts">Product List</Link>
    <Link to="#categories">Categories</Link>
    <Link to="#featured">Features</Link>
    <Link to="#collections">Collections</Link>
    <Link to="#discount">Discount</Link>
  </>
);
const Navbar = () => {
  const [isOpen, setOpen] = React.useState(false);
  console.log(isOpen);
  const { isloggedin } = useSelector((state) => state.user);

  return (
    <>
      {isOpen && (
        <div className="navbar__mobile-menu slide-left">
          <Menu />
          <button className="navbar__mobile__button">Login</button>
        </div>
      )}

      <div
        className="navbar__container section__padding"
        style={{ paddingTop: "1rem", paddingBottom: "1rem" }}
      >
        <div className="navbar__container-top">
          <div className="navbar__logo">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>

          <div className="navbar__searchbar">
            <input type="search" placeholder="Search" />
            <button>
              <BiSearchAlt2 />
            </button>
          </div>

          <div className="navbar__icon-menu__btn">
            <Link to="/cart">
              <FaOpencart />
            </Link>
            {isloggedin ? (
              <button className="navbar__sign-in  btn-primary">Login</button>
            ) : (
              <FaRegUserCircle />
            )}
            <div
              className={
                isOpen
                  ? "lightText navbar__mobile-hamburger"
                  : "navbar__mobile-hamburger"
              }
            >
              <Hamburger toggled={isOpen} toggle={setOpen} />
            </div>
          </div>
        </div>
        <div className="navbar__container-menu">
          <Menu></Menu>
        </div>
      </div>
    </>
  );
};

export default Navbar;
