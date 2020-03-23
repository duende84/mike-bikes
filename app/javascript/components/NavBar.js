import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiShoppingCart } from 'react-icons/gi';

const NavBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const show = collapsed ? "show" : "";

  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
      <button className="navbar-toggler" type="button" onClick={ () => setCollapsed(!collapsed) }>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={"collapse navbar-collapse " + show}>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to="/" title="Home" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/profile" title="Profile" className="nav-link">Profile</Link>
          </li>
          <li className="nav-item">
            <Link to="/academy" title="Academy" className="nav-link">Academy</Link>
          </li>
          <li className="nav-item">
            <Link to="/shop" title="Shop" className="nav-link">Shop</Link>
          </li>
        </ul>
      </div>
      <Link to="/shoppingcart" title="ShoppingCart" className="nav-link"><GiShoppingCart size="25"/></Link>
    </nav>
  );
}

export default NavBar;
