// add product to the server
import { authaxios, instance } from "./../utils/axios";

export const addproduct = (productdata) => async (dispatch) => {
  console.log(productdata, 'odododod')
  try {
    dispatch({ type: "ADD_PRODUCT_PENDING" })
    const { data } = await authaxios.post("/admin/product/new", productdata);
    dispatch({ type: "ADD_PRODUCT_FULFILLED", payload: data.success })

  } catch (err) {
    dispatch({ type: "ADD_PRODUCT_REJECTED", error: err.response.data.message || err.message })
  }
}