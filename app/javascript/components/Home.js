import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [content, setContent] = useState("Choose a Discipline...");

  function mouseOver(e){
    setContent(e.target.title);
  }

  function mouseLeave(e){
    setContent("Choose a Discipline...");
  }

  return(
    <div>
      <div className="horizontal-accordion">
        <ul>
          <li onMouseEnter={e => mouseOver(e)} onMouseLeave={e => mouseLeave(e)}>
            <Link to="/profile" title="Profile"><span>Profile</span></Link>
          </li>
          <li onMouseEnter={e => mouseOver(e)} onMouseLeave={e => mouseLeave(e)}>
            <Link to="/academy" title="Academy"><span>Academy</span></Link>
           </li>
          <li onMouseEnter={e => mouseOver(e)} onMouseLeave={e => mouseLeave(e)}>
            <Link to="/shop" title="Shop"><span>Shop</span></Link>
          </li>
        </ul>
      </div>

      <div className="vertical-accordion">
        <ul>
          <li><Link to="/profile" title="Profile"><span>Profile</span></Link></li>
          <li><Link to="/academy" title="Academy"><span>Academy</span></Link> </li>
          <li><Link to="/shop" title="Shop"><span>Shop</span></Link></li>
        </ul>
      </div>

      <div className="bottom">
        <div className="content">{content}</div>
      </div>
    </div>
  );
}

export default Home;
