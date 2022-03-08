import axios from 'axios';

// ACTION TYPE
const MARK_FULFILLED = 'MARK_FULFILLED';

// ACTION CREATOR
const markFulfilled = (order) => {
  return {
    type: MARK_FULFILLED,
    order,
  };
};

// THUNK
export const markedFulfilled = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(`/api/order/${id}/complete`);
      dispatch(markFulfilled(data));
    } catch (error) {
      console.log('markedFulfilled thunk error: ', error);
    }
  };
};

// REDUCER
const initialState = {};
export default function orderReducer(state = initialState, action) {
  switch (action.type) {
    case MARK_FULFILLED:
      return action.order;
    default:
      return state;
  }
}
