import React from 'react';
import { markedFulfilled } from '../store/order';
import { connect } from 'react-redux';
import { getOrder } from '../store/order';
import { getOrderDetails } from '../store/orderDetail';

export class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.orderConfirmed = this.orderConfirmed.bind(this);
    this.markFulfilled = this.markFulfilled.bind(this);
  }
  componentDidMount() {
    this.props.getOrder(this.props.userId);
    this.props.getOrderDetails(this.props.orderId);
  }
  orderConfirmed() {
    alert('Order Confirmed');
  }
  fulfillOrder() {
    // NEED TO PASS orderID into markFulfilled
    this.props.markFulfilled(this.props.userId);
  }
  render() {
    console.log('props', this.props);
    console.log('user id', this.props.userId);
    const order = this.props.orderDetails;
    return (
      <div>
        <h2>Checkout:</h2>
        <div>
          <input type="text" placeholder="Card Number" />
          <input type="text" placeholder="MM/YY" />
          <input type="text" placeholder="CVC" />
          <br />
          <input type="text" placeholder="Street Address" />
          <input type="text" placeholder="Apt, unit, suite, etc. (Optional)" />
          <br />
          <select>
            <option>United States</option>
            <option>United Kingdom</option>
            <option>Canada</option>
            <option>Italy</option>
          </select>
          <br />
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
          <input type="text" placeholder="Zip Code" />
        </div>
        <br />
        <button
          onClick={() => {
            this.orderConfirmed();
            this.props.fulfillOrder();
          }}
        >
          Submit Payment
        </button>

        <div>
          <br />
          <h2>Order Summary:</h2>
          <h3>Name: {order.nftId}</h3>
          <h3>Price: ${order.cost}</h3>
          <h3>Quantity: {order.quantity}</h3>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    order: state.order,
    orderDetails: state.orderDetails,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getOrder: (orderId) => dispatch(getOrder(orderId)),
    markedFulfilled: (userId) => dispatch(markedFulfilled(userId)),
    getOrderDetails: (orderId) => dispatch(getOrderDetails(orderId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
