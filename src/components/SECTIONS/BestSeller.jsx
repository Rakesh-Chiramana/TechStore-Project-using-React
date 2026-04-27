import ProductCard from "./ProductCard";
import UserControls from "./UserControls";
import CartTotal from "./CartTotal";

export default function BestSeller({
  products,
  searchTerm,
  onSearchChange,
  selectedBrand,
  onBrandChange,
  sortBy,
  onSortChange,
  allBrands,
  filteredProducts,
  cartCount,
  cartTotal,
  onViewCart,
  wishlist,
  onAddToCart,
  onToggleWishlist,
  onClearFilters,
}) {
  return (
    <section className="products-section" id="products">
      <div className="section-header">
        <h2 className="section-title">Best Sellers</h2>
        <p className="section-subtitle">
          Our most popular products loved by customers
        </p>
      </div>

      {/* Search and Filter Controls */}
      <UserControls
        searchTerm={searchTerm}
        onSearchChange={onSearchChange}
        selectedBrand={selectedBrand}
        onBrandChange={onBrandChange}
        sortBy={sortBy}
        onSortChange={onSortChange}
        allBrands={allBrands}
      />

      {/* Results Count */}
      <p className="results-count">
        Showing {filteredProducts.length} of {products.length} products
        {searchTerm && ` for "${searchTerm}"`}
        {selectedBrand !== "All" && ` in ${selectedBrand}`}
      </p>

      {/* Cart Summary Bar - Shows only when cart has items */}
      <CartTotal
        cartCount={cartCount}
        cartTotal={cartTotal}
        onViewCart={onViewCart}
      />

      {/* Product Grid */}
      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              originalPrice={product.originalPrice}
              discount={product.discount}
              rating={product.rating}
              image={product.image}
              isBestSeller={product.isBestSeller}
              isWishlisted={wishlist.includes(product.id)}
              onAddToCart={() => onAddToCart(product)}
              onToggleWishlist={() => onToggleWishlist(product.id)}
            />
          ))
        ) : (
          <div className="no-results">
            <p>😕 No products found</p>
            <button onClick={onClearFilters}>Clear Filters</button>
          </div>
        )}
      </div>
    </section>
  );
}
