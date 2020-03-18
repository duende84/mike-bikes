const addOrderItem = orderItem => {
  return {
    type: 'ADD_ITEM_TO_ORDER',
    payload: orderItem
  }
};

export default addOrderItem;