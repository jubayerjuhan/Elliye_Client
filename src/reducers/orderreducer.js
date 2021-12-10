export const orderReducer = (state = {}, action) => {
  switch (action.type) {
    case 'PLACE_ORDER_PENDING':
    case 'GET_USER_ORDER_PENDING':
      return {
        ...state,
        loading: true,
      }
    case 'PLACE_ORDER_FULFILLED':
      return {
        ...state,
        loading: false,
        success: true,
      }
    case 'GET_USER_ORDER_FULFILLED':
      return {
        ...state,
        loading: false,
        success: true,
        orders: action.payload,
      }
    case 'PLACE_ORDER_REJECTED':
    case 'GET_USER_ORDER_REJECTED':
      return {
        ...state,
        loading: false,
        error: action.payload,
      }

    default:
      return state;
  }

}