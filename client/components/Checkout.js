import React from 'react';
import { markedFulfilled } from '../store/order';
import { connect } from 'react-redux';

export class Checkout extends React.Component {
  constructor(props) {
    super(props);
  }
  orderConfirmed() {
    alert('Order Confirmed');
  }
  markFulfilled() {
    // NEED TO PASS orderID into markFulfilled
    this.props.markFulfilled(this.props.order.id);
  }
  render() {
    console.log('props', this.props);
    return (
      // COPY AND PASTE FROM CART.JS ONCE COMPLETE
      <div>
        Checkout
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
        <button
          onClick={() => {
            this.orderConfirmed();
            markedFulfilled();
          }}
        >
          Submit Payment
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    order: state.order,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    markedFulfilled: (orderId) => dispatch(markedFulfilled(orderId)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
