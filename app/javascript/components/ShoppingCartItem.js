import React, { useState } from 'react';
import { connect } from "react-redux";
import updateCartItem from '../store/actions/updateCartItem';

const ShoppingCartItem = ({ product, updateCartItem }) => {
  const [price, setPrice] = useState(product.price);
  var initialPrice=product.price
  const changePrice = (e) => {
    var total = initialPrice*e.target.value
    setPrice(total)
    updateCartItem({product: product, quantity: parseInt(e.target.value)})
  }
  return(
    <div className="card-body">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-2 text-center">
          <img className="img-responsive" src={product.image.retina_thumbnail.url} alt="prewiew" width="120" height="80"></img>
        </div>
        <div className="col-12 text-sm-center col-sm-12 text-md-left col-md-6">
          <h4 className="product-name"><strong>{product.name}</strong></h4>
          <h4>
            <small>{product.description}</small>
          </h4>
        </div>
        <div className="col-12 col-sm-12 text-sm-center col-md-4 text-md-right row">
          <div className="col-3 col-sm-3 col-md-6 text-md-right" >
            <h6><strong><span className="text-muted">$ {price} USD</span></strong></h6>
          </div>
          <div className="col-4 col-sm-4 col-md-4">
            <div className="row">
              <input type="number" step="1" max="99" min="1" defaultValue={product.quantity} name="Qty" className="qty" size="1" onChange={e => changePrice(e)}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect(null, {updateCartItem})(ShoppingCartItem);