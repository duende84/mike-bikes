import React from 'react';
import { useDispatch } from 'react-redux';
import Truncate from 'react-truncate';
import actions from '../store/actions';
import { FiTrash2 } from "react-icons/fi";

const ShoppingCartItem = ({ item }) => {

  const dispatch = useDispatch();

  var price = (item.price * item.quantity);
  const changePrice = (e) => {
    if (e.target.validity.valid) {
      dispatch(actions.updateCartItem({ item, quantity: parseInt(e.target.value) }));
    } else {
      dispatch(actions.updateCartItem({ item, quantity: 1 }));
    }
  };

  const deleteItem = () => {
    dispatch(actions.deleteCartItem({ item }));
  };

  return(
    <div className="card-body">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-2 text-center">
          <img className="shoppingcart-img" src={item.image.retina_thumbnail.url} alt={item.name}></img>
        </div>
        <div className="col-12 text-sm-center col-sm-12 text-md-left col-md-6">
          <h4 className="product-name"><strong>{item.name}</strong></h4>
          <Truncate lines={3} ellipsis={<span>...</span>}>
            {item.description}
          </Truncate>
        </div>
        <div className="col-12 col-sm-12 text-sm-center col-md-4 text-md-right row">
          <div className="col-3 col-sm-3 col-md-6 text-md-right">
            <span>$ {price} USD</span>
          </div>
          <div className="col-4 col-sm-4 col-md-4">
            <input type="number" step="1" min="1" pattern="[0-9]*" value={item.quantity} className="qty" onChange={ e => changePrice(e) } required/>
          </div>
          <div className="col-2 col-sm-2 col-md-2 text-right">
            <button type="button" className="btn btn-outline-danger btn-xs" onClick={deleteItem}>
            <FiTrash2 size="20"/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartItem;
