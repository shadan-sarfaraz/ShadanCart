import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product, addToCart, cart }) => {
  const { name, price, image, description } = product;

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  const isInCart = cart.some(item => item.id === product.id);

  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <div className="product-price">{formatPrice(price)}</div>
        <p className="product-description">{description}</p>
        <button 
          className={`add-to-cart-btn ${isInCart ? 'added' : ''}`}
          onClick={() => addToCart(product)}
          disabled={isInCart}
        >
          {isInCart ? 'Added to Cart' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard; 