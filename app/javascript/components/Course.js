import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useAlert } from 'react-alert';
import { MdAddShoppingCart } from 'react-icons/md';
import Truncate from 'react-truncate';
import actions from '../store/actions';
import isInShoppingCart from '../lib/isInShoppingCart';

const Course = ({ course }) => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const cartItems = useSelector(state => {
    return state.reducer.cartItems
  });

  const itemValidation = () => {
    if (isInShoppingCart(cartItems,course)) {
      alert.info('This course is already in the cart. Add more from the shopping cart section', { timeout: 3000 });
    } else {
      alert.success('Course added to the cart', { timeout: 2000 });
      dispatch(actions.addCartItem(course));
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
              <a onClick={itemValidation} className="btn btn-primary">
                <MdAddShoppingCart size="25"/> $ {course.price} USD
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Course;
