import React from 'react';
import './Cart.css';

const Cart = ({ cart, removeFromCart, setShowCart }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p>₹{item.price.toLocaleString()}</p>
            </div>
            <div className="cart-item-actions">
              <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="total">
        <span>Total:</span>
        <span className="total-amount">₹{total.toLocaleString()}</span>
      </div>
      <button className="checkout-btn" onClick={() => setShowCart(false)}>
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Cart; 