import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Truncate from 'react-truncate';
import actions from '../store/actions';

const ShoppingCartItem = ({ item }) => {
  const dispatch = useDispatch();
  const [price, setPrice] = useState(item.price);

  const changePrice = (e) => {
    let total = item.price * e.target.value;
    setPrice(total);
    dispatch(actions.updateCartItem({item, quantity: parseInt(e.target.value)}));
  }

  return(
    <div className="card-body">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-2 text-center">
          <img className="img-responsive" src={item.image.retina_thumbnail.url} alt={item.name} width="120" height="80"></img>
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
            <div className="row">
              <input type="number" step="1" max="99" min="1" defaultValue={item.quantity} className="qty" size="1" onChange={e => changePrice(e)}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartItem;