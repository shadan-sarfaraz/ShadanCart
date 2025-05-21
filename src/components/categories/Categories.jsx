import { useNavigate } from 'react-router-dom';
import './Categories.css';

const Categories = () => {
  const navigate = useNavigate();

  const categories = [
    {
      id: 'electronics',
      name: 'Electronics',
      icon: '📱'
    },
    {
      id: 'fashion',
      name: 'Fashion',
      icon: '👕'
    },
    {
      id: 'home',
      name: 'Home',
      icon: '🏠'
    },
    {
      id: 'grocery',
      name: 'Grocery',
      icon: '🛒'
    },
    {
      id: 'beauty',
      name: 'Beauty',
      icon: '💄'
    },
    {
      id: 'toys',
      name: 'Toys',
      icon: '🎮'
    },
    {
      id: 'appliances',
      name: 'Appliances',
      icon: '🔌'
    },
    {
      id: 'travel',
      name: 'Travel',
      icon: '✈️'
    },
    {
      id: 'toys',
      name: 'Toys',
      icon: '🎮'
    },
    {
      id: 'two-wheelers',
      name: 'Two Wheelers',
      icon: '🛵'
    }
  ];

  const handleCategoryClick = (categoryId) => {
    navigate(`/category/${categoryId}`);
  };

  return (
    <div className="categories-container">
      <div className="categories-grid">
        {categories.map((category) => (
          <div
            key={category.id}
            className="category-card"
            onClick={() => handleCategoryClick(category.id)}
          >
            <div className="category-icon">{category.icon}</div>
            <h3>{category.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories; 