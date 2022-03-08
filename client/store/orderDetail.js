import axios from "axios"

// ACTION TYPES
const GET_ORDER_DETAILS = "GET_CURRENT_DETAILS"
const CREATE_ORDER_DETAIL = "CREATE_ORDER_DETAILS"

// ACTION CREATORS

// gets current order that's unfulfilled
const get_orderDetails = (orderDetails) => {
  return {
    type: GET_ORDER_DETAILS,
    orderDetails
  }
}

//creates new order
const create_orderDetail = (orderDetail) => {
  return {
    type: CREATE_ORDER_DETAIL,
    orderDetail
  }
}

//THUNK
export const getOrderDetails = (orderId) => {
  return async (dispatch) => {
    try {
      const {data} = await axios.get(`/api/orderDetail/${orderId}`)
      dispatch(get_orderDetails(data))
    } catch(error) {
      console.log('gotOrderDetails Thunk Error: ', error)
    }
  }
}

export const createOrderDetail = (orderDetail) => {
  return async (dispatch) => {
    try {
      console.log(orderDetail)
      // const {data} = await axios.post(`/api/orderDetail/${orderDetail.orderId}`, orderDetail)
      const {data} = await axios({
        method:'post',
        url: `/api/orderDetail/${orderDetail.orderId}`,
        data: orderDetail
      })
      dispatch(create_orderDetail(data))
    } catch (error) {
      console.log('createOrderDetail error: ', error)
    }
  }
}
export default function orderDetailReducer(state = {}, action) {
  switch (action.type) {
    case CREATE_ORDER_DETAIL:
      return action.orderDetail
    case GET_ORDER_DETAILS:
      return action.orderDetails
    default:
      return state;
  }
}
<<<<<<< HEAD
© 2022 GitHub, Inc.
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
Loading complete
=======
>>>>>>> efa81d6649f2e5665741bd36c4db07b5f6988fc0
