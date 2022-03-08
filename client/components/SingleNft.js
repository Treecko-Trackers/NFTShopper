import React from "react";
import { connect } from "react-redux";
import { getSingleNFT } from "../store/singleNft";
import { getOrder } from "../store/order";
import { createOrder } from "../store/order";
import { getOrderDetails } from "../store/orderDetail";
import { createOrderDetail } from "../store/singleOrderDetail";
import { getOrderNft } from "../store/singleOrderDetail";
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
    console.log(this.props, "Props on Mount");
    this.props.getSingleNft(this.props.match.params.nftid);
    this.props.getOrderNFT(this.props.userId, this.props.match.params.nftid);
    this.props.getOrder(this.props.userId);
    if (
      this.props.currentOrder &&
      typeof this.props.currentOrder === "object"
    ) {
      this.props.createOrder(this.props.userId);
    } else this.props.getOrder(this.props.userId);
  }

  componentDidUpdate(prevProps) {
    // console.log(this.props, "Props on UPDATE");
    if (this.props.currentOrder.id !== undefined && this.state.quantity >= 1) {
      if (
        Array.isArray(this.props.orderDetail) &&
        this.props.orderDetail.length >= 1
      ) {
        console.log(this.state);
        this.props.updateOrderDetail({
          orderId: this.props.currentOrder.id,
          nftId: this.props.match.params.nftid,
          quantity: this.state.quantity,
        });
      } else {
        this.props.createOrderDetail(...this.state);
      }
    }
  }

  addToCartHandler() {
    // console.log(this.props, "Props on Click");
    console.log(this.props.currentOrder.id);
    this.setState((prevState) => {
      return {
        ...prevState,
        orderId: this.props.currentOrder.id,
        nftId: this.props.nft.id,
        cost: Number(this.props.nft.price),
        quantity: prevState.quantity + 1,
      };
    });

    // console.log('currentOrder', this.props.currentOrder)
    // console.log('currentOrder', this.props.currentOrder)
    // console.log('currentNFT', this.props.nft)
    // console.log(this.state, "ON CLICK");
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
