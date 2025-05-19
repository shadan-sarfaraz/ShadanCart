import React from 'react';
import './Header.css';

const Header = ({ cart, setShowCart, searchTerm, setSearchTerm }) => {
  return (
    <header className="header">
      <div className="logo-section">
        <div className="logo-container">
          <div className="logo">
            <span className="logo-text">Shadan</span>
            <span className="logo-cart">Cart</span>
          </div>
          <div className="logo-tagline">
            <span className="tagline-text">Explore</span>
            <span className="tagline-plus">Plus</span>
            <span className="plus-icon">+</span>
          </div>
        </div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for products, brands and more"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="search-btn">
            <span>🔍</span>
          </button>
        </div>
      </div>
      <div className="header-actions">
        <button className="login-btn">Login</button>
        <div className="cart-icon" onClick={() => setShowCart(true)}>
          <span>🛒</span>
          <span>Cart ({cart.length})</span>
        </div>
      </div>
    </header>
  );
};

export default Header; 