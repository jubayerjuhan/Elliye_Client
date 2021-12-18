import React from "react";
import appsign from "../../assets/images/login.svg";
import Navbar from "../../component/navbar/Navbar";
import Footer from "../../component/footer/Footer.jsx";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../actions/userActions.js";
import { useDispatch, useSelector } from "react-redux";
import { toastError, toastSuccess } from "../../utils/toastify.js";
import Spinner from "./../../component/spinner/Spinner";
import { useLocation } from "react-router-dom";

const schema = yup.object({
  email: yup
    .string()
    .email("Must be a valid email")
    .max(255)
    .required("Email is required"),

  password: yup.string().min(8, "Password must be at least 8 characters"),
});

const Login = () => {
  const { error, success, isloggedin, loading } = useSelector(
    (state) => state.user
  );
  const location = useLocation();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  if (isloggedin) {
    location.state.pathname ? navigate(location.state.pathname) : navigate("/");
  }

  const onSubmit = (data) => {
    dispatch(loginUser(data));
  };

  if (error) {
    toastError(error);
    dispatch({ type: "CLEAR_ERROR" });
  }

  if (success) {
    toastSuccess("Login Successful");
    dispatch({ type: "CLEAR_SUCCESS" });
    // window.location.reload();
  }
  return (
    <>
      {loading && <Spinner />}
      <Navbar />
      <div className="register__container section__full-padding">
        <div className="register__graphicside">
          <div className="register__graphicside__image">
            <img src={appsign} alt="Hero img" />
          </div>
        </div>
        <div className="register__form ">
          <h1>Login</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form__input">
              <p>Email</p>
              <input {...register("email")} />
              <p className="error">{errors.email?.message}</p>
            </div>

            <div className="form__input">
              <p>Password</p>
              <input type="password" {...register("password")} />
              <p className="error">{errors.password?.message}</p>
            </div>

            <input type="submit" className="btn btn-primary" />
          </form>
          <Link to="/forgotten-password">
            <p className="forgotten__pass">Forgotten Password?</p>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
