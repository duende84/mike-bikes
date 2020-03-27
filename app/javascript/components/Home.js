import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';

const Home = () => {
  const [content, setContent] = useState("Choose a Discipline...");

  const mouseOver = (e) => {
    setContent(e.target.title);
  }

  const mouseLeave = (e) => {
    setContent("Choose a Discipline...");
  }

  $(".horizontal-accordion ul li").hover(function(){
    var self = $(this);
    self.addClass("js-active-accordion");
    $(".horizontal-accordion ul li").not(self).css("width","15%");
  },
  function(){
    $(".horizontal-accordion ul li").removeClass("js-active-accordion").removeAttr("style");
  });

  return(
    <div>
      <div className="top">
        <img src="assets/logo.png" />
      </div>
      <div className="horizontal-accordion">
        <ul>
          <li onMouseEnter={ e => mouseOver(e) } onMouseLeave={ e => mouseLeave(e) }>
            <Link to="/profile" title="Profile"><span>Profile</span></Link>
          </li>
          <li onMouseEnter={ e => mouseOver(e) } onMouseLeave={ e => mouseLeave(e) }>
            <Link to="/academy" title="Academy"><span>Academy</span></Link>
          </li>
          <li onMouseEnter={ e => mouseOver(e) } onMouseLeave={ e => mouseLeave(e) }>
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
        <div className="content">{ content }</div>
      </div>
    </div>
  );
}

export default Home;
