import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useAlert } from 'react-alert';
import { GiShoppingCart } from 'react-icons/gi';
import NavBar from './NavBar';
import ShoppingCartItem from './ShoppingCartItem';

const ShoppingCart = () => {
  const alert = useAlert();
  const cartItems = useSelector(state => {
    return state.reducer.cartItems
  });
  var email = null;

  const handleChange = (e) => { email = e.target.value };

  const total = cartItems.reduce((acumulator, currentValue) => { return acumulator + (currentValue.price * currentValue.quantity) }, 0);

  const sendMail = async () => {
    let params = { order: { email, products: cartItems } };
    const config = {
      method:'POST',
      body: JSON.stringify(params),
      headers:{
        'Accept': 'application/json',
        'Content_Type':'application/json'
      }
    };
    const response = await fetch(`/api/v1/orders`, config)
    if (response) {
      alert.removeAll();
      alert.success('Order has been sent successfully', { timeout: 2000 });
    } else {
      alert.error('Order has not been sent, please try it again', { timeout: 2000 });
    }
  };

  const createMail= () => {
    alert.show(
      <div>
        Leave us your contact information.
        <div>
          <label style={{ color:'cyan' }}>Email:
            <input type="text" onChange={ e => handleChange(e) }></input>
          </label>
          <button onClick={sendMail}>Send</button>
        </div>
      </div>
    )
  };

  return (
    <div className="container border border-white h-100">
      <NavBar />
      <div className="card-header bg-dark text-center">
        <GiShoppingCart size="25"/>&ensp;Shopping Cart
      </div>
      <div className="row">
        {cartItems.map(item => (
          <ShoppingCartItem item={item} />
        ))}
      </div>
      <div className="card-footer">
        <div>
          Total price: <b>$ {total} USD</b>
        </div>
        <div>
          <Link to="/shop" className="btn btn-info"><span>Continue shopping</span></Link>&ensp;
          <a onClick={createMail} className="btn btn-success">Order Now</a>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
