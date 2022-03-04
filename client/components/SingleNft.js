import React from 'react';
import { connect } from 'react-redux';
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
  }
  handleSubmit() {
    let cart = JSON.parse(localStorage.getItem('Cart'));
    let id = this.props.nft.id;
    if (id in cart) {
      cart[id][1]++;
      localStorage.setItem('Cart', JSON.stringify(cart));
    } else {
      cart[id] = [this.props.nft, 1];
      localStorage.setItem('Cart', JSON.stringify(cart));
    }
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
});
const mapDispatch = (dispatch) => ({
  getSingleNft: (id) => dispatch(getSingleNFT(id)),
});
export default connect(mapState, mapDispatch)(SingleNft);
