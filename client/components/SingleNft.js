import React from "react";
import { connect } from "react-redux";
import { getSingleNFT } from "../store/singleNft";
import { getOrder } from "../store/order";
import { createOrder } from "../store/order";
import { getOrderDetails } from "../store/orderDetail";
import { createOrderDetail } from "../store/singleOrderDetail";
import { getOrderNft } from "../store/singleOrderDetail";
import { updateOrderDetail } from "../store/singleOrderDetail";
class SingleNft extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orderId: 0,
      nftId: 0,
      cost: 0,
      quantity: 0,
    };
    this.addToCartHandler = this.addToCartHandler.bind(this);
  }

  componentDidMount() {
    this.props.getSingleNft(this.props.match.params.nftid);
    //
    this.props.getOrder(this.props.userId);
    this.props, "Props on Mount";

    if (this.props.currentOrder.id > 0) {
      ("GET ORDER NFT");
      this.props.getOrderNFT(
        this.props.currentOrder.id,
        this.props.match.params.nftid
      );
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.currentOrder === "")
      this.props.createOrder(this.props.userId);
  }

  addToCartHandler() {
    this.props.getOrderNFT(
      this.props.currentOrder.id,
      this.props.match.params.nftid
    );

    this.setState((prevState) => {
      return {
        ...prevState,
        orderId: this.props.currentOrder.id,
        nftId: this.props.nft.id,
        cost: Number(this.props.nft.price),
        quantity: prevState.quantity + 1,
      };
    });

    if (this.props.singleOrderDetail !== {}) {
      this.props.updateOrderDetail({
        orderId: this.props.currentOrder.id,
        nftId: this.props.match.params.nftid,
        quantity: this.state.quantity,
      });
    } else {
      this.props.createOrderDetail({
        ...this.state,
      });
    }

    // this.props.createOrderDetail({
    //   ...this.state,
    // });

    // ('currentOrder', this.props.currentOrder)
    // ('currentOrder', this.props.currentOrder)
    // ('currentNFT', this.props.nft)
    // (this.state, "ON CLICK");
  }
  render() {
    return this.props.nft ? (
      <div
        style={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        <img src={this.props.nft.imageUrl} style={{ maxWidth: "400px" }} />
        <h1>{this.props.nft.name}</h1>
        <h3>{this.props.nft.artist}</h3>
        <p>${this.props.nft.price}</p>
        <p>Quantity: {this.props.nft.quantity}</p>
        <button onClick={this.addToCartHandler}>Add To Cart</button>
      </div>
    ) : (
      "loading"
    );
  }
}
const mapState = (state) => ({
  nft: state.singleNFT,
  currentOrder: state.order,
  userId: state.auth.id,
  orderDetail: state.orderDetails,
  singleOrderDetail: state.singleOrder,
});
const mapDispatch = (dispatch) => ({
  getSingleNft: (id) => dispatch(getSingleNFT(id)),
  getOrder: (userId) => dispatch(getOrder(userId)),
  createOrder: (userId) => dispatch(createOrder(userId)),
  getOrderDetails: (orderId) => dispatch(getOrderDetails(orderId)),
  createOrderDetail: (orderDetail) => dispatch(createOrderDetail(orderDetail)),
  getOrderNFT: (orderId, nftId) => dispatch(getOrderNft(orderId, nftId)),
  updateOrderDetail: (orderId, nftId) =>
    dispatch(updateOrderDetail(orderId, nftId)),
});
export default connect(mapState, mapDispatch)(SingleNft);
