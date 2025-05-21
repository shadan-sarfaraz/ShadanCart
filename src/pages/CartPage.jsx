import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import './CartPage.css';

const CartPage = ({ cart, removeFromCart, setShowCart }) => {
  const navigate = useNavigate();

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  const handleCheckout = () => {
    // Implement checkout logic here
    alert('Proceeding to checkout...');
  };

  return (
    <div className="cart-page">
      <Header 
        cart={cart} 
        setShowCart={setShowCart} 
      />
      
      <main className="cart-content">
        <div className="cart-container">
          <div className="cart-header">
            <h1>My Cart ({cart.length} items)</h1>
          </div>

          {cart.length === 0 ? (
            <div className="empty-cart">
              <img 
                src="https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png" 
                alt="Empty Cart"
              />
              <h2>Your cart is empty!</h2>
              <p>Add items to your cart to proceed with checkout.</p>
              <button 
                className="continue-shopping-btn"
                onClick={() => navigate('/')}
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="cart-items-container">
              <div className="cart-items">
                {cart.map((item) => (
                  <div key={item.id} className="cart-item">
                    <div className="item-image">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className="item-details">
                      <h3>{item.name}</h3>
                      <p className="item-description">{item.description}</p>
                      <div className="item-price">{formatPrice(item.price)}</div>
                    </div>
                    <button 
                      className="remove-item-btn"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>

              <div className="price-details">
                <h2>Price Details</h2>
                <div className="price-row">
                  <span>Price ({cart.length} items)</span>
                  <span>{formatPrice(calculateTotal())}</span>
                </div>
                <div className="price-row">
                  <span>Delivery Charges</span>
                  <span className="free">FREE</span>
                </div>
                <div className="price-row total">
                  <span>Total Amount</span>
                  <span>{formatPrice(calculateTotal())}</span>
                </div>
                <button 
                  className="checkout-btn"
                  onClick={handleCheckout}
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CartPage; 