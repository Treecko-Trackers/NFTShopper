import React from 'react';

const Cart = () => {
  for (let key in localStorage) {
    console.log(key);
  }
  return <div>Cart</div>;
};

export default Cart;
