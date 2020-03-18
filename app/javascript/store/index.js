import { createStore, combineReducers } from 'redux';
import cartReducer from './reducers/cartReducer';
import orderReducer from './reducers/orderReducer';

const reducers = combineReducers({
  cartReducer,
  orderReducer
});

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;