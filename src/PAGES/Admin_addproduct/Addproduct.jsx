import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Navbar from "../../component/navbar/Navbar";
import Footer from "../../component/footer/Footer";
import { useSelector, useDispatch } from "react-redux";
import { addproduct } from "../../actions/productactions.js";
import { toastSuccess, toastError } from "../../utils/toastify.js";
import Spinner from "../../component/spinner/Spinner.jsx";
const Addproduct = () => {
  const [allimages, setAllimages] = React.useState("");
  const dispatch = useDispatch();

  const schema = yup
    .object({
      name: yup.string().required(),
      description: yup.string().required(),
      price: yup.number().required(),
      category: yup.string().required(),
      stock: yup.number().required(),
    })
    .required();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleChange = (e) => {
    const files = Array.from(e.target.files);

    setAllimages([]);

    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setAllimages((old) => [...old, reader.result]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", data.price);
    formData.append("category", data.category);
    formData.append("stock", data.stock);
    allimages.forEach((elem) => {
      formData.append("images", elem);
    });
    console.log(formData);
    dispatch(addproduct(formData));
  };

  const { success, error, loading } = useSelector((state) => state.addproduct);
  if (success) {
    toastSuccess("Product Added Successfully");
    dispatch({ type: "RESET_SUCCESS" });
  }
  if (error) {
    toastError("Something went wrong");
    dispatch({ type: "CLEAR_ERROR" });
  }

  return (
    <>
      {loading && <Spinner />}
      <Navbar />
      <div className="addproduct__container section__padding">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input__group">
            <p>Product Name</p>
            <input {...register("name")} />
            <p className="error">{errors.name && "Product Name Required"}</p>
          </div>
          <div className="input__group">
            <p>Description</p>
            <input {...register("description")} />
            <p className="error">
              {errors.description && "description Required"}
            </p>
          </div>
          <div className="input__group">
            <p>Price</p>
            <input {...register("price")} />
            <p className="error">{errors.price && "Price is Required"}</p>
          </div>
          <div className="input__group">
            <p>Category</p>
            <input {...register("category")} />
            <p className="error">{errors.category && "Category Required"}</p>
          </div>
          <div className="input__group">
            <p>Stock</p>
            <input {...register("stock")} />
            <p className="error">{errors.stock && "Stock is Required"}</p>
          </div>
          <div className="input__group">
            <p>Image</p>
            <input onChange={handleChange} type="file" multiple />
            <p className="error">{errors.images && "State Required"}</p>
            <input type="submit" />
          </div>
        </form>
      </div>
    </>
  );
};

export default Addproduct;
