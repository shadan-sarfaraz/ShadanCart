import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = ({ cart, setShowCart, searchTerm, setSearchTerm }) => {
  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate('/cart');
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo" onClick={() => navigate('/')}>
          <h1>Flipkart</h1>
        </div>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for products, brands and more"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="search-btn">
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
            </svg>
          </button>
        </div>

        <div className="header-actions">
          <button className="cart-btn" onClick={handleCartClick}>
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
            </svg>
            <span className="cart-count">{cart.length}</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header; 