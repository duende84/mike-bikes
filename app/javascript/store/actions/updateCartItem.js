const updateCartItem = cartItem => {
  return {
    type: 'UPDATE_ITEM',
    payload: cartItem
  }
};
export default updateCartItem;