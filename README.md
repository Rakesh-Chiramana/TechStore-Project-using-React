# TechStore - React E-Commerce App

A modern, responsive e-commerce application built with React and Vite, featuring a tech product store with cart and wishlist functionality.

## Features

- **Product Catalog**: Browse a curated selection of tech products including iPhones, MacBooks, iMacs, Samsung devices, and more
- **Search & Filter**: Search products by name or brand, filter by brand
- **Sorting**: Sort products by price (low to high, high to low)
- **Shopping Cart**: Add/remove products, update quantities, view cart total
- **Wishlist**: Save favorite products for later
- **Dark Mode**: Toggle between light and dark themes
- **Persistent Storage**: Cart and wishlist data saved to localStorage
- **Responsive Design**: Works on desktop and mobile devices

## Tech Stack

- **Frontend**: React 18
- **Build Tool**: Vite
- **Styling**: CSS Modules
- **Linting**: ESLint
- **State Management**: React Hooks (useState, useEffect)

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd techstrore-main
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
npm run build
```

### Lint the Code

```bash
npm run lint
```

## Project Structure

```
src/
├── components/
│   ├── ProductCard.jsx      # Individual product display component
│   └── ProductCard.css      # Styles for product cards
├── App.jsx                  # Main app component with state management
├── App.css                  # Main app styles
├── data.js                  # Product data
├── index.css                # Global styles
└── main.jsx                 # App entry point
```

## Features in Detail

### Cart Management
- Add products to cart with quantity tracking
- Update item quantities
- Remove items from cart
- Persistent cart storage across browser sessions
- Cart sidebar with total calculation

### Wishlist
- Add/remove products from wishlist
- Heart icon toggle for visual feedback
- Persistent wishlist storage

### Search & Filtering
- Real-time search by product name or brand
- Brand-based filtering
- Combined search and filter functionality

### UI/UX
- Dark mode toggle
- Responsive grid layout
- Best seller badges
- Discount indicators
- Rating display with stars

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run linting: `npm run lint`
5. Commit your changes
6. Push to the branch
7. Create a Pull Request

## License

This project is for educational purposes.
