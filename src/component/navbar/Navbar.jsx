import React from "react";
import logo from "../../assets/images/logo.svg";
import { BiSearchAlt2 } from "react-icons/bi";
import { FaOpencart } from "react-icons/fa";
import "./navbar.css";
import { Link } from "react-router-dom";
import { Twirl as Hamburger } from "hamburger-react";
import { FaRegUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import { toastSuccess } from "./../../utils/toastify";
import { useNavigate } from "react-router-dom";
export const Menu = () => (
  <>
    <Link to="#newarrivals">New Arrivals</Link>
    <Link to="/products">Product List</Link>
    <Link to="#categories">Categories</Link>
    <Link to="#featured">Features</Link>
    <Link to="#collections">Collections</Link>
    <Link to="#discount">Discount</Link>
  </>
);
const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setOpen] = React.useState(false);
  const [keyword, setKeyword] = React.useState("");
  console.log(isOpen);
  const { isloggedin } = useSelector((state) => state.user);
  console.log(isloggedin, "lgd");
  const [userbar, setUserbar] = React.useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
    toastSuccess("Logout Successfully");
  };

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/products?searchkeyword=" + keyword);
  };

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
            <form action="" onSubmit={handleSubmit}>
              <input
                type="search"
                placeholder="Search"
                onChange={handleChange}
                onSubmit={handleSubmit}
              />
              <button>
                <BiSearchAlt2 />
              </button>
            </form>
          </div>

          <div className="navbar__icon-menu__btn">
            <Link to="/cart">
              <FaOpencart />
            </Link>
            {isloggedin === true ? (
              <FaRegUserCircle onClick={() => setUserbar(!userbar)} />
            ) : (
              <Link to="/login">
                <button className="navbar__sign-in  btn-primary">Login</button>
              </Link>
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
        {userbar && (
          <div className="userbar__container fade-in">
            <Link to="/orders">Orders</Link>
            <Link to="/profile">Profile</Link>
            <button onClick={handleLogout}>Logout</button>
          </div>
        )}
        <div className="navbar__container-menu ">
          <Menu></Menu>
        </div>
      </div>
    </>
  );
};

export default Navbar;
