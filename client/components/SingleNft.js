import React from "react";
import { connect } from "react-redux";
import { getSingleNFT } from "../store/singleNft";
import {getOrder, createOrder} from "../store/order"

class SingleNft extends React.Component {
  constructor(props) {
    super(props);
    this.addToCartHandler = this.addToCartHandler.bind(this);
  }

  componentDidMount() {
    this.props.getSingleNft(this.props.match.params.nftid);
    this.props.getOrder(this.props.userId)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currentOrder != this.props.currentOrder) {
      if (this.props.currentOrder.length !== 0)
        console.log('here', this.props.currentOrder)
      // this.props.getOrder(this.props.userId)
    }
  }
  addToCartHandler() {
    // console.log('currentOrder', this.props.currentOrder)
    if (this.props.currentOrder.length === 0)
      this.props.createOrder(this.props.userId)
    else
      this.props.getOrder(this.props.userId)

    console.log('currentOrder', this.props.currentOrder)
    console.log('currentNFT', this.props.nft)
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
  userId: state.auth.id
});
const mapDispatch = (dispatch) => ({
  getSingleNft: (id) => dispatch(getSingleNFT(id)),
  getOrder: (userId) => dispatch(getOrder(userId)),
  createOrder: (userId) => dispatch(createOrder(userId))
});
export default connect(mapState, mapDispatch)(SingleNft);
