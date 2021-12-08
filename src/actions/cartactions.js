export const addItemstoCart = (product, quantity) => async (dispatch, getState) => {
  const productDetail = {
    _id: product._id,
    name: product.name,
    quantity: quantity,
    price: product.price,
    image: product.image || product.images[0].url,
    stock: product.stock
  }

  dispatch({ type: 'ADD_TO_CART', payload: productDetail })

  localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems))
}