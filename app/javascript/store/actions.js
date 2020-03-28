const addCartItem = (cartItem, itemType) => {
  return {
    type: 'ADD_ITEM_TO_CART',
    payload: cartItem,
    itemType: itemType
  }
};

const updateCartItem = cartItem => {
  return {
    type: 'UPDATE_ITEM',
    payload: cartItem
  }
};

const deleteCartItem = cartItem => {
  return {
    type: 'DELETE_ITEM',
    payload: cartItem
  }
};

const actions = {
  addCartItem,
  updateCartItem,
  deleteCartItem
};

export default actions;