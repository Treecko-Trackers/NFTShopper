import axios from "axios";

// ACTION TYPES
const GOT_ALL_NFT = "GOT_ALL_NFT";

// ACTION CREATORS
const gotAllNFTs = (NFTs) => {
  return {
    type: GOT_ALL_NFT,
    NFTs,
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

// REDUCER
const initialState = [];
export default function NFTReducer(state = initialState, action) {
  switch (action.type) {
    case GOT_ALL_NFT:
      return action.NFTs;
    default:
      return state;
  }
}
