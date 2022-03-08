import React from 'react';
import { gotNFT } from '../store/orderDetail';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export class Cart extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    // i need orderID passed into gotNFT
    this.props.gotNFT(this.props.userId);
    console.log('userid', this.props.userId);
  }
  render() {
    return (
      // <div>
      //   {this.props.orderDetail.map((item) => (
      //     <div key={item.id}>
      //       <h1>{item.name}</h1>
      //       <h3>{item.price}</h3>
      //       <h3>{item.quantity}</h3>
      //     </div>
      //   ))}
      // </div>
      <button type="button">
        <Link to="/checkout">Proceed to Checkout</Link>
      </button>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userId: state.auth.id,
    orderDetail: state.orderDetail,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    gotNFT: (orderId) => dispatch(gotNFT(orderId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
