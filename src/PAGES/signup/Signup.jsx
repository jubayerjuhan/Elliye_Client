import React from "react";
import appsign from "../../assets/images/appsign.svg";
import "./signup.css";
import Navbar from "../../component/navbar/Navbar";
import Footer from "../../component/footer/Footer.jsx";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "./../../actions/userActions";
import Errordialog from "../../component/errordialog/Errordialog.jsx";
import { toastError, toastSuccess } from "../../utils/toastify.js";
import { useNavigate } from "react-router-dom";
const schema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Must be a valid email")
    .max(255)
    .required("Email is required"),

  password: yup.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: yup
    .string()
    .min(8, "Password must be at least 8 characters"),
});

const Signup = () => {
  const navigate = useNavigate();
  const { success, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data) => {
    dispatch(registerUser(data));
  };
  if (success) {
    toastSuccess("Registered Successfully");
    dispatch({ type: "RESET_SUCCESS" });
    navigate("/");
  }
  if (error) {
    toastError(error);
    dispatch({ type: "CLEAR_ERROR" });
  }
  return (
    <>
      <Navbar />
      {success ? (
        <Errordialog message="Account created Successfully"></Errordialog>
      ) : null}
      <div className="register__container section__full-padding">
        <div className="register__graphicside">
          <div className="register__graphicside__image">
            <img src={appsign} alt="Hero img" />
          </div>
        </div>
        <div className="register__form ">
          <h1>Register</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form__input">
              <p>Name</p>
              <input {...register("name")} />
              <p className="error">{errors.name?.message}</p>
            </div>
            <div className="form__input">
              <p>Email</p>
              <input {...register("email")} />
              <p className="error">{errors.email?.message}</p>
            </div>

            <div className="form__input">
              <p>Password</p>
              <input {...register("password")} />
              <p className="error">{errors.password?.message}</p>
            </div>
            <div className="form__input">
              <p>Confirm Password</p>
              <input {...register("confirmPassword")} />
              <p className="error">{errors.confirmPassword?.message}</p>
            </div>
            <input type="submit" className="btn btn-primary" />
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
