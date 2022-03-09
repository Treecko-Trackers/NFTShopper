import axios from "axios";

// ACTION TYPES
const GOT_ALL_USERS = "GOT_ALL_USERS";

// ACTION CREATORS
const gotAllUsers = (USERS) => {
  return {
    type: GOT_ALL_USERS,
    USERS,
  };
};

// THUNK
export const fetchUsers = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/api/users");
      // console.log('data', data);
      dispatch(gotAllUsers(data));
    } catch (error) {
      console.log("fetchNFTs error: ", error);
    }
  };
};

// REDUCER
const initialState = [];
export default function UserReducer(state = initialState, action) {
  switch (action.type) {
    case GOT_ALL_USERS:
      return action.USERS;
    default:
      return state;
  }
}
