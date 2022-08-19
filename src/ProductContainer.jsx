import React from 'react';
import './style.css';
import Product from './Product';

const ProductContainer = () =>{
  return(
    <div className="product-container">
      <Product />
      <Product />
    </div>
  )
}
export default ProductContainer;