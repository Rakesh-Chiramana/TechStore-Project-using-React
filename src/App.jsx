import products from "./data";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";

// Import Components
import Navbar from "./components/NAV-BAR/Navbar";
import Cart from "./components/NAV-BAR/Cart";
import Hero from "./components/HERO-SECTION/Hero";
import BestSeller from "./components/SECTIONS/BestSeller";
import Footer from "./components/FOOTER/Footer";

function App() {
  //BRANDS
  const allBrands = [...new Set(products.map((p) => p.brand))];

  // State
  // Cart - array of products in cart
  const [cartItems, setCartItems] = useState(()=>{

    const savedCart = localStorage.getItem("techstore-cart");

    if(savedCart)
    {
      try {
        return JSON.parse(savedCart);  
      } catch (error) {
        console.error("Problem!!!",error);
        return []
      }
    }
    return []    
  });
  useEffect(() => {
    localStorage.setItem("techstore-cart", JSON.stringify(cartItems));
  }, [cartItems]);



  
 // Wishlist - array of product IDs that are wishlisted
  const [wishlist, setWishlist] = useState(()=>{
  const savedWishlist = localStorage.getItem("techstore-wishlist");
    if(savedWishlist){
      try {
        return JSON.parse(savedWishlist);
        
      } catch (error) {
        console.error("Problem with Wishlist data",error);
        return []        
      }
    }
    return [];
  });

  useEffect(()=>{
    localStorage.setItem("techstore-wishlist", JSON.stringify(wishlist));
  },[wishlist])



  // Search - what user types in search box
  const [searchTerm, setSearchTerm] = useState("");

  // Brand Filter - which brand is selected ('All' means show all)
  const [selectedBrand, setSelectedBrand] = useState("All");

  // Sort - how to sort products
  const [sortBy, setSortBy] = useState("default");

  // NEW: Dark Mode Toggle
  const [isDarkMode, setIsDarkMode] = useState(true);

  // NEW: Cart Sidebar Toggle
  const [isCartOpen, setIsCartOpen] = useState(false);

  function addToCart(product) {
    //Check if Cart Item Exists
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      //PRODUCT IS THERE IN THE CART
      setCartItems(
        cartItems.map(
          (
            item //[ARRAY OF OBJECTS]
          ) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
        )
      );
    } else {
      //PRODUCT NOT THERE
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  }

  // NEW: Remove item from cart
  function removeFromCart(productId) {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  }

  // NEW: Update quantity in cart
  function updateQuantity(productId, newQuantity) {
    if (newQuantity < 1) {
      removeFromCart(productId);
      return;
    }
    setCartItems(
      cartItems.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  }

  //Calculate Total number of Cart ITEMS
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  //CALCULATE TOTAL PRICE
  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  //WISHLIST FUNCTION

  function toggleWishlist(productID) {
    if (wishlist.includes(productID)) {
      //Already Existing - Remove It
      setWishlist(wishlist.filter((id) => id !== productID));
    } else {
      //NOT IN THE WISHLIST - JUST ADD IT
      setWishlist([...wishlist, productID]);
    }
  }

  //STEP 1 : FILTER BASED ON SEARCH AND BRAND

  let filteredProducts = products.filter((product) => {
    const searchLower = searchTerm.toLowerCase();
    const matchesSearch =
      product.name.toLowerCase().includes(searchLower) ||
      product.brand.toLowerCase().includes(searchLower);

    const matchesBrand =
      selectedBrand === "All" || product.brand === selectedBrand;

    return matchesSearch && matchesBrand;
  });

  //STEP 2 : SORT BASED ON FILTERED PRODUCTS
  if (sortBy === "price-low") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-high") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  } else if (sortBy === "rating") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => b.rating - a.rating
    );
  }

  return (
    <div className={`app ${isDarkMode ? "dark" : "light"}`}>
      {/* Navbar Component */}
      <Navbar
        isDarkMode={isDarkMode}
        onThemeToggle={() => setIsDarkMode(!isDarkMode)}
        onCartOpen={() => setIsCartOpen(true)}
        cartCount={cartCount}
        wishlistCount={wishlist.length}
      />

      {/* Cart Sidebar Component */}
      <Cart
        isOpen={isCartOpen}
        cartItems={cartItems}
        cartCount={cartCount}
        cartTotal={cartTotal}
        onClose={() => setIsCartOpen(false)}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
      />

      {/* Hero Section Component */}
      <Hero />

      {/* Best Sellers/Products Section Component */}
      <BestSeller
        products={products}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        selectedBrand={selectedBrand}
        onBrandChange={setSelectedBrand}
        sortBy={sortBy}
        onSortChange={setSortBy}
        allBrands={allBrands}
        filteredProducts={filteredProducts}
        cartCount={cartCount}
        cartTotal={cartTotal}
        onViewCart={() => setIsCartOpen(true)}
        wishlist={wishlist}
        onAddToCart={addToCart}
        onToggleWishlist={toggleWishlist}
        onClearFilters={() => {
          setSearchTerm("");
          setSelectedBrand("All");
        }}
      />

      {/* Footer Component */}
      <Footer />
    </div>
  );
}

export default App;
