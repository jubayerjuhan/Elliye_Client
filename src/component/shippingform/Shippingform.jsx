import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import "./shippingform.css";

const Shippingform = () => {
  const schema = yup
    .object({
      firstName: yup.string().required(),
      lastName: yup.string().required(),
      street: yup.string().required(),
      city: yup.string().required(),
      state: yup.string().required(),
      zipcode: yup.number().required().positive(),
      country: yup.string().required(),
    })
    .required();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="input__group">
        <p>First Name</p>
        <input {...register("firstName")} />
        <p className="error">{errors.firstName && "First Name Required"}</p>
      </div>
      <div className="input__group">
        <p>Last Name</p>
        <input {...register("lastName")} />
        <p className="error">{errors.lastName && "Last Name Required"}</p>
      </div>
      <div className="input__group">
        <p>Address</p>
        <input {...register("address")} />
        <p className="error">{errors.street && "Address is Required"}</p>
      </div>
      <div className="input__group">
        <p>Contact</p>
        <input {...register("contact")} />
        <p className="error">{errors.contact && "Contact Required"}</p>
      </div>
      <div className="input__group">
        <p>City</p>
        <input {...register("city")} />
        <p className="error">{errors.city && "City is Required"}</p>
      </div>
      <div className="input__group">
        <p>State</p>
        <input {...register("state")} />
        <p className="error">{errors.state && "State Required"}</p>
      </div>
      <div className="input__group">
        <p>Zipcode</p>
        <input {...register("zipcode")} />
        <p className="error">{errors.zipcode && "Zipcode Required"}</p>
      </div>
    </form>
  );
};

export default Shippingform;
