import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ProductCard from '../components/products/ProductCard';
import Cart from '../components/cart/Cart';
import { products } from '../data/products';
import './CategoryPage.css';

const CategoryPage = ({ cart, setShowCart, addToCart }) => {
  const { category } = useParams();
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState('all');

  const categoryProducts = products[category] || [];
  const subcategories = [...new Set(categoryProducts.map(product => product.subcategory))];

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const filteredProducts = categoryProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSubcategory = selectedSubcategory === 'all' || product.subcategory === selectedSubcategory;
    return matchesSearch && matchesSubcategory;
  });

  return (
    <div className="category-page">
      <Header 
        cart={cart} 
        setShowCart={setShowCart} 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      
      <main className="category-content">
        <div className="category-header">
          <h1>{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
          <div className="subcategory-filter">
            <select
              value={selectedSubcategory}
              onChange={(e) => setSelectedSubcategory(e.target.value)}
            >
              <option value="all">All {category}</option>
              {subcategories.map(subcat => (
                <option key={subcat} value={subcat}>
                  {subcat.charAt(0).toUpperCase() + subcat.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="products-grid">
          {filteredProducts.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              addToCart={addToCart}
              cart={cart}
            />
          ))}
        </div>
      </main>

      <Footer />

      {isCartVisible && (
        <Cart 
          cart={cart} 
          removeFromCart={removeFromCart} 
          setShowCart={setIsCartVisible} 
        />
      )}
    </div>
  );
};

export default CategoryPage; 