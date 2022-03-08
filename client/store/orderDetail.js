Skip to content
Search or jump to…
Pull requests
Issues
Marketplace
Explore

@allanywang
Treecko-Trackers
/
NFTShopper
Public
Code
Issues
10
Pull requests
Discussions
Actions
Projects
1
Wiki
Security
Insights
More
NFTShopper/client/store/orderDetail.js /
@allanywang
allanywang posting to orderdetail table but not in correct state
Latest commit 064b0cc 9 hours ago
 History
 1 contributor
62 lines (56 sloc)  1.45 KB

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
