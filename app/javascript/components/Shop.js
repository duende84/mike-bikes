import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import Product from './Product';

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await fetch(`/api/v1/products`);
    const data = await response.json();
    const products = await data.data;
    setProducts(products);
  }

  return(
    <div className="container border border-white h-100">
      <NavBar/>
      <div className="col">
        <div className="row">
          {products.map(product => (
            <Product product={ product } />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Shop;
