import axios from "axios";
const GOT_SINGLE_NFT = "GOT_SINGLE_NFT";
const gotSingleNFT = (NFT) => {
  return {
    type: GOT_SINGLE_NFT,
    NFT,
  };
};

export const getSingleNFT = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/nft/${id}`);
      // console.log('data', data);
      dispatch(gotSingleNFT(data));
    } catch (error) {
      console.log("fetchSinglehNFT error: ", error);
    }
  };
};

const initialState = {};
export default function SingleNFTReducer(state = initialState, action) {
  switch (action.type) {
    case GOT_SINGLE_NFT:
      return action.NFT;
    default:
      return state;
  }
}
