const initialOrder = {
  orderItems: []
}

export default (state = initialOrder, action) => {
  switch(action.type) {
    case 'ADD_ITEM_TO_ORDER':
      let items = [...state.orderItems];
      items = [
        ...items,
        action.payload
      ];
      state = {
        ...state,
        orderItems: items
      }
      console.log("new order: ", state)
      return state;
    default:
      return state;
  }
};

export const getOrderItems = state => state.orderItems;