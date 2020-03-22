const initialState = {
  cartItems: []
};

export default (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_ITEM_TO_CART':
      let items = [...state.cartItems];
      items = [
        ...items,
        {
          ...action.payload,
          quantity: 1
        }
      ];
      state = {
        ...state,
        cartItems: items
      }
      return state;

    case 'UPDATE_ITEM':
      let itemsToUpdate = [...state.cartItems];
      let cItems = itemsToUpdate.map((item) => {
        if((item.id === action.payload.item.id) && (item.name === action.payload.item.name)){
          return {
            ...item,
            quantity: action.payload.quantity
          }
        }
        return item;
      });
      state = {
        ...state,
        cartItems: cItems
      }
    default:
      return state;
  }
};

export const getCartItems = state => state.cartItems;