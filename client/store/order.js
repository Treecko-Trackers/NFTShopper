import axios from 'axios'

// ACTION TYPES
const CREATE_ORDER = 'CREATE_ORDER';

// ACTION CREATORS
const create_Order = (order) => {
  return {
    type: CREATE_ORDER,
    order
  }
}
//THUNK
export const createOrder = (userId) => {
  return async (dispatch) => {
    try {
      console.log('think')
      const {data} = await axios.post(`/api/order/${userId}`)
      console.log(data)
      dispatch(create_Order(data))
    } catch (err){
      console.log('createOrder error: ', err)
    }
  }
}

// REDUCER
const initialState = {};
export default function orderReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_ORDER:
      return action.order;
    default:
      return state;
  }
}
