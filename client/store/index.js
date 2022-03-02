import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import auth from "./auth";
import NFTReducer from "./nft";
import SingleNFTReducer from "./singleNft";

const reducer = combineReducers({
  auth,
  allNFTs: NFTReducer,
  singleNFT: SingleNFTReducer,
});
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);

export default store;
export * from "./auth";
