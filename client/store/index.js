import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import auth from './auth';
import NFTReducer from './nft';
import SingleNFTReducer from './singleNft';
import orderDetailReducer from './orderDetail';
import orderReducer from './order';

const reducer = combineReducers({
  auth,
  allNFTs: NFTReducer,
  singleNFT: SingleNFTReducer,
  order: orderReducer,
  orderDetail: orderDetailReducer,
});
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);

export default store;
export * from './auth';
