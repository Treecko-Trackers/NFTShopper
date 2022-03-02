import axios from 'axios';

// ACTION TYPES
const GOT_ALL_FT = 'GOT_ALL_FT';

// ACTION CREATORS
const gotAllFTs = (FTs) => {
  return {
    type: GOT_ALL_FT,
    FTs,
  };
};

// THUNK
export const fetchFTs = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get('/api/nft');
      // console.log('data', data);
      dispatch(gotAllFTs(data));
    } catch (error) {
      console.log('fetchFTs error: ', error);
    }
  };
};

// REDUCER
const initialState = [];
export default function FTReducer(state = initialState, action) {
  switch (action.type) {
    case GOT_ALL_FT:
      return action.FTs;
    default:
      return state;
  }
}
