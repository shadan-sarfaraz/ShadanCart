import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="product-card">
      <div className="image-container">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="content">
        <h3>{product.name}</h3>
        <div className="price-section">
          <span className="original-price">₹{Math.round(product.price * 1.2)}</span>
          <span className="discount">20% off</span>
        </div>
        <span className="current-price">₹{product.price.toLocaleString()}</span>
        <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard; 