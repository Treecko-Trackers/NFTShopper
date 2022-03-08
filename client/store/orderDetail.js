import axios from 'axios';

// ACTION TYPES
const GET_NFT = 'GET_NFT';

// ACTION CREATORS
const get_NFT = (NFT) => {
  return {
    type: GET_NFT,
    NFT,
  };
};

//THUNK
export const gotNFT = (orderId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/orderDetail/order/${orderId}`);
      dispatch(get_NFT(data));
    } catch (error) {
      console.log('gotNFT thunk error ', error);
    }
  };
};

// REDUCER
const initialState = {};
export default function orderDetailReducer(state = initialState, action) {
  switch (action.type) {
    case GET_NFT:
      return action.NFT;
    default:
      return state;
  }
}
