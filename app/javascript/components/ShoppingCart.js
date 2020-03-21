import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useAlert } from 'react-alert';
import { GiShoppingCart } from "react-icons/gi";
import NavBar from './NavBar';
import ShoppingCartItem from './ShoppingCartItem';


const ShoppingCart = () => {
  const alert = useAlert()
  const cartItems = useSelector(state => {
    return state.reducer.cartItems
  })
  var email = null

  const handleChange = (e) => {
    email= e.target.value
  }
  var iValue = 0;
  iValue = cartItems.reduce(function (total, currentValue) {return total + (currentValue.price*currentValue.quantity)},iValue);

  const sendMail = async () => {
    let params = { order: { email: email, products: cartItems }}
    const config = {
      method:'POST',
      body: JSON.stringify(params),
      headers:{
        'Accept': 'application/json',
        'Content_Type':'application/json'
      }
    }
    const response = await fetch(`/api/v1/orders`, config)
    if (response){
      alert.removeAll();
      alert.success('Email has been sent successfully',{timeout: 4000})
    }
    else {
      alert.error('Email hasn t  been sent successfully, try it again',{timeout: 4000})
    }
  }

  const createMail= () => {
    alert.show(
      <div>
        Leave us your contact information.
        <div>
          <label style={{color:'cyan'}}>Email:
            <input type="text" onChange={e => handleChange(e)}></input>
          </label>
          <button onClick={sendMail}>Send</button>
        </div>
      </div>
    )
  }

  return (
    <div className="container border border-white h-100">
      <NavBar />
      <div className="card-header bg-dark text-center">
        <GiShoppingCart size="25" /> Shopping Cart
        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
      </div>
      <div className="row">
        {cartItems.map(product => (
          <ShoppingCartItem product={product} />
        ))}
      </div>
      <div className="card-footer">
        <div className="pull-right" >
          Total price: <b>$ {iValue} USD</b>
        </div>
        <Link to="/shop" className="btn btn-outline-info btn-sm pull-right "><span>Continue shopping</span></Link>
        <div className="pull-right">
          <a onClick={createMail}  className="btn btn-success pull-right">BUY</a>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
