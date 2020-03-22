const addCartItem = cartItem => {
  return {
    type: 'ADD_ITEM_TO_CART',
    payload: cartItem
  }
};

const updateCartItem = cartItem => {
  return {
    type: 'UPDATE_ITEM',
    payload: cartItem
  }
};

const actions = {
  addCartItem,
  updateCartItem
};

export default actions;