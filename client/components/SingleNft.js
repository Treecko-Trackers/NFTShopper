import React from 'react';
import { connect } from 'react-redux';
import { gotOrder } from '../store/order';
import { boughtNFT, gotNFT } from '../store/orderDetail';
import { getSingleNFT } from '../store/singleNft';

class SingleNft extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.getSingleNft(this.props.match.params.nftid);
    this.props.gotOrder(this.props.userId);
    // if (this.props.gotOrder(this.props.userId) === false) {
    //   // this.props.createOrder(this.props.userId);
    // } else {
    //   this.props.gotOrder(this.props.userId);
    // }
    // this.props.gotNFT(this.props.order[0].id);
  }
  // handleSubmit() {
  //   let cart = JSON.parse(localStorage.getItem('Cart'));
  //   let id = this.props.nft.id;
  //   if (id in cart) {
  //     cart[id][1]++;
  //     localStorage.setItem('Cart', JSON.stringify(cart));
  //   } else {
  //     cart[id] = [this.props.nft, 1];
  //     localStorage.setItem('Cart', JSON.stringify(cart));
  //   }
  // }
  handleSubmit() {
    // this.props.gotOrder(this.props.userId);
    this.props.gotNFT(this.props.order[0].id);
    console.log('orderDetail', this.props.orderDetail);
    let id = this.props.nft.id;
    if (
      this.props.orderDetail.filter((orderDetail) => orderDetail.nftId === id)
    )
      this.props.orderDetail.quantity = this.props.orderDetail.quantity + 1;
    // this.props.gotOrder(this.props.userId);
    this.props.boughtNFT({
      orderId: this.props.order[0].id,
      nftId: id,
      price: this.props.nft.price,
      quantity: 1,
    });
  }

  render() {
    return this.props.nft ? (
      <div
        style={{
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
        }}
      >
        <img src={this.props.nft.imageUrl} style={{ maxWidth: '400px' }} />
        <h1>{this.props.nft.name}</h1>
        <h3>{this.props.nft.artist}</h3>
        <p>${this.props.nft.price}</p>
        <p>Quantity: {this.props.nft.quantity}</p>
        <button onClick={this.handleSubmit}>Add to Cart</button>
      </div>
    ) : (
      'loading'
    );
  }
}
const mapState = (state) => ({
  nft: state.singleNFT,
  userId: state.auth.id,
  order: state.order,
  orderDetail: state.orderDetail,
});
const mapDispatch = (dispatch) => ({
  getSingleNft: (id) => dispatch(getSingleNFT(id)),
  gotNFT: (orderId) => dispatch(gotNFT(orderId)),
  boughtNFT: (nftId) => dispatch(boughtNFT(nftId)),
  gotOrder: (userId) => dispatch(gotOrder(userId)),
});
export default connect(mapState, mapDispatch)(SingleNft);
