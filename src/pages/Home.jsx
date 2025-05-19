import React, { useState, useEffect } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ProductCard from '../components/products/ProductCard';
import Cart from '../components/cart/Cart';
import './Home.css';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentBanner, setCurrentBanner] = useState(0);

  const banners = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1607082349566-187342175e2f?w=1920&auto=format&fit=crop&q=80",
      title: "Special Offers"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1920&auto=format&fit=crop&q=80",
      title: "New Arrivals"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1607082349566-187342175e2f?w=1920&auto=format&fit=crop&q=80",
      title: "Best Deals"
    }
  ];

  useEffect(() => {
    // Auto-rotate banners
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Sample products data
    const sampleProducts = [
      {
        id: 1,
        name: "iPhone 13 Pro (256GB) - Sierra Blue",
        price: 119900,
        category: "electronics",
        image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-pro-max-1.jpg"
      },
      {
        id: 2,
        name: "Samsung Galaxy S21 Ultra 5G",
        price: 99999,
        category: "electronics",
        image: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s21-ultra-5g-1.jpg"
      },
      {
        id: 3,
        name: "Men's Cotton T-Shirt",
        price: 599,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&auto=format&fit=crop&q=80"
      },
      {
        id: 4,
        name: "Women's Summer Dress",
        price: 1299,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500&auto=format&fit=crop&q=80"
      },
      {
        id: 5,
        name: "Sony WH-1000XM4 Headphones",
        price: 29999,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=80"
      },
      {
        id: 6,
        name: "Men's Denim Jacket",
        price: 2499,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&auto=format&fit=crop&q=80"
      },
      {
        id: 7,
        name: "MacBook Pro M1 (16GB/512GB)",
        price: 149900,
        category: "electronics",
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&auto=format&fit=crop&q=80"
      },
      {
        id: 8,
        name: "Women's Leather Handbag",
        price: 3999,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&auto=format&fit=crop&q=80"
      }
    ];
    setProducts(sampleProducts);
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const nextBanner = () => {
    setCurrentBanner((prev) => (prev + 1) % banners.length);
  };

  const prevBanner = () => {
    setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <div className="flipkart-container">
      <Header 
        cart={cart} 
        setShowCart={setShowCart} 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} 
      />

      <main className="main-content">
        <div className="banner-section">
          <div className="banner-container">
            {banners.map((banner, index) => (
              <div
                key={banner.id}
                className={`banner-slide ${index === currentBanner ? 'active' : ''}`}
                style={{ transform: `translateX(${(index - currentBanner) * 100}%)` }}
              >
                <img src={banner.image} alt={banner.title} />
                <div className="banner-content">
                  <h2>{banner.title}</h2>
                </div>
              </div>
            ))}
          </div>
          <button className="banner-nav prev" onClick={prevBanner}>❮</button>
          <button className="banner-nav next" onClick={nextBanner}>❯</button>
          <div className="banner-dots">
            {banners.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentBanner ? 'active' : ''}`}
                onClick={() => setCurrentBanner(index)}
              />
            ))}
          </div>
        </div>

        <div className="products-section">
          <div className="category-filter">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="all">All Categories</option>
              <option value="electronics">Electronics</option>
              <option value="fashion">Fashion</option>
            </select>
          </div>

          <h2 className="section-title">Featured Products</h2>
          <div className="product-grid">
            {filteredProducts.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                addToCart={addToCart} 
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />

      {showCart && (
        <Cart 
          cart={cart} 
          removeFromCart={removeFromCart} 
          setShowCart={setShowCart} 
        />
      )}
    </div>
  );
};

export default Home; 