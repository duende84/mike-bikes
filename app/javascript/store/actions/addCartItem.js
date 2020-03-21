const addCartItem = cartItem => {
  return {
    type: 'ADD_ITEM_TO_CART',
    payload: cartItem
  }
};
export default addCartItem;