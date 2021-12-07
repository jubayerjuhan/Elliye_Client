export const productreducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT_PENDING':
      return {
        ...state,
        loading: true,
      }
    case 'ADD_PRODUCT_FULFILLED':
      return {
        ...state,
        loading: false,
        success: action.payload,
      }
    case "RESET_SUCCESS":
      return {
        ...state,
        success: null,
      }
    case 'ADD_PRODUCT_REJECTED':
      return {
        ...state,
        loading: false,
        error: action.payload,
      }

    default:
      return state;
  }
}