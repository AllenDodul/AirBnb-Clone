import React from 'react';
import './style.css';

const Product = () =>{
  return(
    <div className="product-card">
      <img className="product-image" 
        src="https://i.ibb.co/6s8xqT2/images-68.jpg" 
        alt="images-68" 
      />
      <div className="info">
        <h4 className="name">Allen</h4>
        <div className="details">
          <img 
            className="star-logo"
            src="https://i.ibb.co/VNcchSr/Background-Eraser-20220818-205143670.png"
            alt="Background-Eraser-20220818-205143670" 
          />
          <span className="gray">
            (144)
          </span>
          <div>
            <span className="price">
              $250
            </span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Product;