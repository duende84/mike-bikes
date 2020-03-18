const initialState = {
  cartItems: []
};

export default (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_ITEM_TO_CART':
      let items = [...state.cartItems];
      items = [
        ...items,
        action.payload
      ];
      state = {
        ...state,
        cartItems: items
      }
      console.log("new state: ", state)
      return state;
    default:
      return state;
  }
};

export const getCartItems = state => state.cartItems;