import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useAlert } from 'react-alert';
import { GiShoppingCart } from "react-icons/gi";
import NavBar from './NavBar';
import ShoppingCartItem from './ShoppingCartItem';


const ShoppingCart = ({addOrderItem}) => {
  const alert = useAlert()
  const cartItems = useSelector(state => {
    return state.cartReducer.cartItems
  })
  var email = null

  function handleChange (e) {
    email= e.target.value
  }

  const sendMail = async () => {
    let params = { order: { email: email, product_ids: [1,2,3] } }
    console.log('parametros: ',params)
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
      console.log('envio correo')
    }
    else {
      console.log('paila')
    }
  }

  function createMail(){
    alert.show(
      <div>
        Since you want to buy these products, leave us your information and our advisor will contact you directly.
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
        <Link to="/shop" className="btn btn-outline-info btn-sm pull-right "><span>Continue shopping</span></Link>
        <div className="pull-right">
          <a onClick={createMail}  className="btn btn-success pull-right">BUY</a>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
