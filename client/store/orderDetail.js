import axios from 'axios';

// ACTION TYPES
const BUY_NFT = 'BUY_NFT';
const GET_NFT = 'GET_NFT';

// ACTION CREATORS
const buy_NFT = (NFT) => {
  return {
    type: BUY_NFT,
    NFT,
  };
};
const get_NFT = (NFT) => {
  return {
    type: GET_NFT,
    NFT,
  };
};

//THUNK
export const boughtNFT = (nft) => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: 'post',
        url: '/api/orderDetail/add',
        data: nft,
      });
      // console.log(data);
      dispatch(buy_NFT(data));
    } catch (err) {
      console.log('buyNFT error: ', err);
    }
  };
};
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
    case BUY_NFT:
      return action.NFT;
    case GET_NFT:
      return action.NFT;
    default:
      return state;
  }
}
