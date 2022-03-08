import axios from "axios"

// ACTION TYPES
const GET_CURRENT_ORDER = "GET_CURRENT_ORDER"
const CREATE_ORDER = "CREATE_ORDER"

// ACTION CREATORS

// gets current order that's unfulfilled
const get_CurrentOrder = (currentOrder) => {
  return {
    type: GET_CURRENT_ORDER,
    currentOrder
  }
}

//creates new order
const create_Order = (newOrder) => {
  return {
    type: CREATE_ORDER,
    newOrder
  }
}

//THUNK
export const getOrder = (userId) => {
  return async (dispatch) => {
    try {
      const {data} = await axios.get(`/api/order/currentOrder/${userId}`)
      dispatch(get_CurrentOrder(data))
    } catch(error) {
      console.log('gotOrder Thunk Error: ', error)
    }
  }
}

export const createOrder = (userId) => {
  return async (dispatch) => {
    try {
      const {data} = await axios.post(`/api/order/${userId}`)
      dispatch(create_Order(data))
    } catch (error) {
      console.log('createOrder error: ', error)
    }
  }
}
export default function orderReducer(state = {}, action) {
  switch (action.type) {
    case CREATE_ORDER:
      return action.newOrder
    case GET_CURRENT_ORDER:
      return action.currentOrder
    default:
      return state;
  }
}
