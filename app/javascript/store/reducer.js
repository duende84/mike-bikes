const localStorageItems =JSON.parse(localStorage.getItem('state'));
var initialState;
if(localStorageItems !== null){
  initialState = JSON.parse(localStorage.getItem('state'))
}
else{
  initialState = {
    cartItems: []
  }
}

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
      };
      localStorage.setItem('state', JSON.stringify(state));
      return state;

    case 'UPDATE_ITEM':
      let itemsToUpdate = [...state.cartItems];
      let itemsInUpdate = itemsToUpdate.map((item) => {
        if((item.id === action.payload.item.id) && (item.name === action.payload.item.name)){
          return {
            ...item,
            quantity: action.payload.quantity
          };
        }
        return item;
      });
      state = {
        ...state,
        cartItems: itemsInUpdate
      };
      localStorage.setItem('state', JSON.stringify(state));
      return state;

    case 'DELETE_ITEM':
      let itemsToDelete = [...state.cartItems];
      let itemsInDelete = itemsToDelete.filter((item) => ((item.id !== action.payload.item.id) || (item.name !== action.payload.item.name)));
      state = {
        ...state,
        cartItems: itemsInDelete
      };
      localStorage.setItem('state', JSON.stringify(state));
      return state;

    default:
      return state;
  }
};

export const getCartItems = state => state.cartItems;