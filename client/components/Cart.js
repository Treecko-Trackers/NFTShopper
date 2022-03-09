import React from 'react';
import { getOrderDetails } from '../store/orderDetail';
import { getOrder } from '../store/order';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export class Cart extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    // i need orderID passed into gotNFT
    // const orderID = this.props.getOrder(this.props.userId);
    this.props.getOrderDetails(this.props.orderId);
  }
  render() {
    // console.log('userid', this.props.userId);
    console.log('props', this.props);
    console.log('orderID', this.props.orderId);
    console.log('orderDetails:', this.props.orderDetails);
    // let orderByUser = Object.values(this.props.orderDetails);
    // console.log('did this work', orderByUser);
    const order = this.props.orderDetails;
    return (
      <div>
        {/* <div>
          {order.map((item) => (
            <div key={item.orderId}>
              <h1>Name: {item.nftId}</h1>
              <h3>Price: ${item.cost}</h3>
              <h3>Quantity: {item.quantity}</h3>
            </div>
          ))}
        </div> */}
        <div>
          <h1>Name: {order.nftId}</h1>
          <h3>Price: ${order.cost}</h3>
          <h3>Quantity: {order.quantity}</h3>
        </div>
        <button type="button">
          <Link to="/checkout">Proceed to Checkout</Link>
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userId: state.auth.id,
    // order: state.order,
    orderDetails: state.orderDetails,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // getOrder: (userId) => dispatch(getOrder(userId)),
    getOrderDetails: (orderId) => dispatch(getOrderDetails(orderId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
