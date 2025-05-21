# Project Structure

```
src/
├── assets/          # Static assets like images, fonts, etc.
├── components/      # Reusable components
│   ├── cart/       # Cart-related components
│   ├── categories/ # Category-related components
│   ├── layout/     # Layout components (Header, Footer)
│   └── products/   # Product-related components
├── context/        # React Context providers
├── hooks/          # Custom React hooks
├── pages/          # Page components
├── services/       # API services and external integrations
├── styles/         # Global styles and theme
└── utils/          # Utility functions and helpers
```

## Component Organization

- `components/`: Contains all reusable components
  - `cart/`: Cart-related components (Cart.jsx, Cart.css)
  - `categories/`: Category-related components (Categories.jsx, Categories.css)
  - `layout/`: Layout components (Header.jsx, Footer.jsx)
  - `products/`: Product-related components (ProductCard.jsx, ProductCard.css)

## File Naming Conventions

- React components: PascalCase (e.g., `ProductCard.jsx`)
- CSS files: Same name as component (e.g., `ProductCard.css`)
- Utility files: camelCase (e.g., `formatPrice.js`)
- Constants: UPPER_SNAKE_CASE (e.g., `API_ENDPOINTS.js`)

## Best Practices

1. Keep components small and focused
2. Use CSS modules or styled-components for component-specific styles
3. Keep business logic in services
4. Use custom hooks for reusable logic
5. Use context for global state management
6. Keep utility functions pure and testable 