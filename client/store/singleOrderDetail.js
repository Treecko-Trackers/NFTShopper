import axios from "axios";
const GET_ORDER_NFT = "GET_ORDER_NFT";
const UPDATE_ORDER_DETAIL = "UPDATE_ORDER_DETAIL";
const CREATE_ORDER_DETAIL = "CREATE_ORDER_DETAILS";
const get_orderNft = (orderDetail) => {
  return {
    type: GET_ORDER_NFT,
    orderDetail,
  };
};

const update_orderDetail = (updatedOrder) => {
  return {
    type: UPDATE_ORDER_DETAIL,
    updatedOrder,
  };
};
const create_orderDetail = (createOrder) => {
  return {
    type: CREATE_ORDER_DETAIL,
    createOrder,
  };
};

export const updateOrderDetail = (update) => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "put",
        url: `/api/orderDetail/${update.orderId}/nft/${update.nftId}`,
        data: update,
      });
      dispatch(update_orderDetail(data));
    } catch (error) {
      console.log("getOrderNFT THUNK ERROR", error);
    }
  };
};
export const createOrderDetail = (orderDetail) => {
  return async (dispatch) => {
    try {
      // console.log(orderDetail);
      // const {data} = await axios.post(`/api/orderDetail/${orderDetail.orderId}`, orderDetail)
      const { data } = await axios({
        method: "post",
        url: `/api/orderDetail/${orderDetail.orderId}`,
        data: orderDetail,
      });
      dispatch(create_orderDetail(data));
    } catch (error) {
      console.log("createOrderDetail error: ", error);
    }
  };
};

export const getOrderNft = (orderId, nftId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `/api/orderDetail/${orderId}/nft/${nftId}`
      );
      dispatch(get_orderNft(data));
    } catch (error) {
      console.log("getOrderNFT THUNK ERROR", error);
    }
  };
};

export default function singleOrderDetailReducer(
  state = {
    createdOrder: {},
    updateOrder: {},
    getOrderNft: {},
  },
  action
) {
  switch (action.type) {
    case CREATE_ORDER_DETAIL:
      return { ...state, createOrder: action.createOrder };
    case UPDATE_ORDER_DETAIL:
      return { ...state, updateOrder: action.updatedOrder };
    case GET_ORDER_NFT:
      return { ...state, getOrderNft: action.orderDetail };
    default:
      return state;
  }
}
