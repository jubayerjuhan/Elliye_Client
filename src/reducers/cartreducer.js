export const cartreducer = (state = {
  cartItems: []
}, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const isExist = state.cartItems.find(cartItem => cartItem._id === action.payload._id)

      console.log("isexist", isExist)
      if (isExist) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item._id === action.payload._id ? action.payload : item
          )
        }
      }
      else {
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload]
        }
      }

    case 'ADD_SHIPPING_ADDRESS':
      return {
        ...state,
        shippingAddress: action.payload
      }

    default:
      return state;
  }

}