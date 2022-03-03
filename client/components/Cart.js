import React from 'react';

const Cart = () => {
  let cart = JSON.parse(localStorage.getItem('Cart'))

  let nfts = Object.values(cart)
  console.log('cart', cart)
  console.log('nft',nfts)
  return nfts.map(nft => (
      <div key={nft[0].id}>
        <p>Name:{nft[0].name} Price: {nft[0].price} Quantity: {nft[1]}</p>
      </div>

  ))
};

export default Cart;
