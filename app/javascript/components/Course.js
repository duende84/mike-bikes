import React from 'react';
import { connect, useSelector } from "react-redux";
import { useAlert } from 'react-alert';
import { MdAddShoppingCart } from "react-icons/md";
import Truncate from 'react-truncate';
import addCartItem from '../store/actions/addCartItem'


const Course = ({course, addCartItem}) => {
  const cartItems = useSelector(state => {
    return state.cartReducer.cartItems
  })
  const alert = useAlert()
  function validation(){
    var isInShoppingCart = cartItems.find(item => ((item.id === course.id )&&(item.name === course.name)))
    if (isInShoppingCart) {
      alert.info(' This item is already in the cart. If you want to buy several units of this product, you can increase it from the shopping cart section')
    } else {
      alert.success('product added to cart',{timeout: 2000})
      addCartItem(course)
    }
  }
  return(
    <div className="col-12 col-md-6 col-lg-4">
      <div className="card">
        <img className="card-img-top card-img" src={course.image.retina_thumbnail.url} alt={course.name} />
        <div className="card-body">
          <h5 className="card-title">{course.name}</h5>
          <div className="card-text">
            <Truncate lines={3} ellipsis={<span>...</span>}>
              {course.description}
            </Truncate>
          </div>
          <div className="row card-button">
            <div className="col">
              <a onClick={validation} className="btn btn-primary"><MdAddShoppingCart size="25"/> $ {course.price} USD</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect(null, {addCartItem})(Course);