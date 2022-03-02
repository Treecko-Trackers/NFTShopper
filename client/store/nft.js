import axios from "axios";

// ACTION TYPES
const GOT_ALL_NFT = "GOT_ALL_NFT";
const GOT_SINGLE_NFT = "GOT_SINGLE_NFT";

// ACTION CREATORS
const gotAllNFTs = (NFTs) => {
  return {
    type: GOT_ALL_NFT,
    NFTs,
  };
};
const gotSingleNFT = (NFT) => {
  return {
    type: GOT_SINGLE_NFT,
    NFT,
  };
};

// THUNK
export const fetchNFTs = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/api/nft");
      // console.log('data', data);
      dispatch(gotAllNFTs(data));
    } catch (error) {
      console.log("fetchNFTs error: ", error);
    }
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

// REDUCER
const initialState = [];
export default function NFTReducer(state = initialState, action) {
  switch (action.type) {
    case GOT_ALL_NFT:
      return action.NFTs;
    case GOT_SINGLE_NFT:
      return action.NFT;
    default:
      return state;
  }
}
