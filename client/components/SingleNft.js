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
    // console.log(this.props.nft, "single nft");
    // console.log("id:", this.props.match.params.nftid);
    // this.props.gotNFT(this.props.match.params.orderId);
    this.props.boughtNFT(this.props.nftId);
    console.log('orderId: ', this.props.match.params.orderId);
    console.log('nftid', this.props.nftId);
    if (this.props.gotOrder(this.props.userId) === false) {
      // this.props.createOrder(this.props.userId);
    } else {
      this.props.gotOrder(this.props.userId);
    }
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
    console.log('nft', this.props.nft);
    this.props.gotOrder(this.props.userId);

    let id = this.props.nft.id;
    console.log('fml', this.props.order);
    console.log(
      this.props.boughtNFT({
        orderId: this.props.order[0].id,
        nftId: id,
        price: this.props.nft.price,
        quantity: 1,
      })
    );
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
});
const mapDispatch = (dispatch) => ({
  getSingleNft: (id) => dispatch(getSingleNFT(id)),
  gotNFT: (orderId) => dispatch(gotNFT(orderId)),
  boughtNFT: (nftId) => dispatch(boughtNFT(nftId)),
  gotOrder: (userId) => dispatch(gotOrder(userId)),
});
export default connect(mapState, mapDispatch)(SingleNft);
