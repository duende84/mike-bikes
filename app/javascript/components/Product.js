import React, { useEffect, useState } from 'react';
import Truncate from 'react-truncate';
import NavBar from './NavBar';

const Product = ({product}) => {
  return(
    <div className="col-12 col-md-6 col-lg-4 flex-row">
      <div className="card">
        <img className="card-img-top card-img" src={product.image.thumbnail.url} alt={product.name} />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <div className="card-text">
            <Truncate lines={3} ellipsis={<span>...</span>}>
              {product.description}
            </Truncate>
          </div>
          <div className="row card-button">
            <div className="col">
              <a href="#" className="btn btn-primary">Shop now - {product.price}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
