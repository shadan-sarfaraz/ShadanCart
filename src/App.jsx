import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import CartPage from './pages/CartPage';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route 
            path="/" 
            element={
              <Home 
                cart={cart} 
                setShowCart={setShowCart} 
                addToCart={addToCart}
              />
            } 
          />
          <Route 
            path="/category/:category" 
            element={
              <CategoryPage 
                cart={cart} 
                setShowCart={setShowCart} 
                addToCart={addToCart}
              />
            } 
          />
          <Route 
            path="/cart" 
            element={
              <CartPage 
                cart={cart} 
                removeFromCart={removeFromCart} 
                setShowCart={setShowCart}
              />
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
