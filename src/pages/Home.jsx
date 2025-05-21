import React, { useState, useEffect } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ProductCard from '../components/products/ProductCard';
import Cart from '../components/cart/Cart';
import Categories from '../components/categories/Categories';
import './Home.css';

const Home = ({ cart, setShowCart, addToCart }) => {
  const [products, setProducts] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);
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
    // Sample products data for all categories
    const sampleProducts = [
      // Electronics
      {
        id: 1,
        name: "iPhone 13 Pro (256GB) - Sierra Blue",
        price: 119900,
        category: "electronics",
        subcategory: "mobile",
        image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-pro-max-1.jpg"
      },
      {
        id: 2,
        name: "Samsung Galaxy S21 Ultra 5G",
        price: 99999,
        category: "electronics",
        subcategory: "mobile",
        image: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s21-ultra-5g-1.jpg"
      },
      {
        id: 3,
        name: "MacBook Pro M1 (16GB/512GB)",
        price: 149900,
        category: "electronics",
        subcategory: "laptops",
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&auto=format&fit=crop&q=80"
      },
      {
        id: 4,
        name: "Sony WH-1000XM4 Headphones",
        price: 29999,
        category: "electronics",
        subcategory: "audio",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=80"
      },
      // Fashion
      {
        id: 5,
        name: "Men's Cotton T-Shirt",
        price: 599,
        category: "fashion",
        subcategory: "mens",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&auto=format&fit=crop&q=80"
      },
      {
        id: 6,
        name: "Women's Summer Dress",
        price: 1299,
        category: "fashion",
        subcategory: "womens",
        image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500&auto=format&fit=crop&q=80"
      },
      {
        id: 7,
        name: "Men's Denim Jacket",
        price: 2499,
        category: "fashion",
        subcategory: "mens",
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&auto=format&fit=crop&q=80"
      },
      {
        id: 8,
        name: "Women's Leather Handbag",
        price: 3999,
        category: "fashion",
        subcategory: "womens",
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&auto=format&fit=crop&q=80"
      },
      // Home
      {
        id: 9,
        name: "Modern Sofa Set",
        price: 45999,
        category: "home",
        subcategory: "furniture",
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&auto=format&fit=crop&q=80"
      },
      {
        id: 10,
        name: "Kitchen Storage Set",
        price: 2999,
        category: "home",
        subcategory: "kitchen",
        image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=500&auto=format&fit=crop&q=80"
      },
      // Grocery
      {
        id: 11,
        name: "Organic Fruits Basket",
        price: 999,
        category: "grocery",
        subcategory: "fruits",
        image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=500&auto=format&fit=crop&q=80"
      },
      {
        id: 12,
        name: "Fresh Vegetables Pack",
        price: 499,
        category: "grocery",
        subcategory: "vegetables",
        image: "https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=500&auto=format&fit=crop&q=80"
      },
      // Beauty
      {
        id: 13,
        name: "Luxury Makeup Kit",
        price: 4999,
        category: "beauty",
        subcategory: "makeup",
        image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&auto=format&fit=crop&q=80"
      },
      {
        id: 14,
        name: "Premium Skincare Set",
        price: 3999,
        category: "beauty",
        subcategory: "skincare",
        image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=500&auto=format&fit=crop&q=80"
      },
      // Toys
      {
        id: 15,
        name: "Educational Toy Set",
        price: 1499,
        category: "toys",
        subcategory: "toys",
        image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=500&auto=format&fit=crop&q=80"
      },
      {
        id: 16,
        name: "Baby Care Kit",
        price: 1999,
        category: "toys",
        subcategory: "baby",
        image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=500&auto=format&fit=crop&q=80"
      }
    ];
    setProducts(sampleProducts);
  }, []);

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const handleCategorySelect = (category, subcategory) => {
    setSelectedCategory(category);
    // You can also handle subcategory filtering here if needed
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
      <Categories onCategorySelect={handleCategorySelect} />
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
          <h2 className="section-title">
            {selectedCategory === 'all' ? 'All Products' : `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Products`}
          </h2>
          <div className="product-grid">
            {filteredProducts.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                addToCart={addToCart}
                cart={cart}
              />
            ))}
          </div>
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

export default Home; 