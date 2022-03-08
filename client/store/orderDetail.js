import axios from "axios";

// ACTION TYPES
const GET_ORDER_DETAILS = "GET_CURRENT_DETAILS";

// ACTION CREATORS

// gets current order that's unfulfilled
const get_orderDetails = (orderDetails) => {
  return {
    type: GET_ORDER_DETAILS,
    orderDetails,
  };
};

//creates new order

//THUNK
export const getOrderDetails = (orderId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/orderDetail/${orderId}`);
      dispatch(get_orderDetails(data));
    } catch (error) {
      console.log("gotOrderDetails Thunk Error: ", error);
    }
  };
};

export default function orderDetailReducer(state = [], action) {
  switch (action.type) {
    case GET_ORDER_DETAILS:
      return action.orderDetails;
    default:
      return state;
  }
}
