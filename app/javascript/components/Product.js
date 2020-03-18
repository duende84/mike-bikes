import React from 'react';
import { useAlert } from 'react-alert';
import { connect, useSelector } from "react-redux";
import { MdAddShoppingCart } from "react-icons/md";
import Truncate from 'react-truncate';
import addCartItem from '../store/actions/addCartItem';

const Product = ({ product, addCartItem }) => {
  const cartItems = useSelector(state => {
    return state.cartReducer.cartItems
  })
  const alert = useAlert()
  function validation() {
    var isInShoppingCart = cartItems.find(item => ((item.id === product.id )&&(item.name === product.name)))
    if (isInShoppingCart) {
      alert.info(' This item is already in the cart. If you want to buy several units of this product, you can increase it from the shopping cart section')
    } else {
      alert.success('product added to cart',{timeout: 2000})
      addCartItem(product)
    }
  }

  return(
    <div className="col-12 col-md-6 col-lg-4">
      <div className="card">
        <img className="card-img-top card-img" src={product.image.retina_thumbnail.url} alt={product.name} />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <div className="card-text">
            <Truncate lines={3} ellipsis={<span>...</span>}>
              {product.description}
            </Truncate>
          </div>
          <div className="row card-button">
            <div className="col">
              <a onClick={validation} className="btn btn-primary"> <MdAddShoppingCart size="25"/> $ {product.price} USD</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect(null, {addCartItem})(Product);
