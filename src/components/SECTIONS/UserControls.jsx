export default function UserControls({
  searchTerm,
  onSearchChange,
  selectedBrand,
  onBrandChange,
  sortBy,
  onSortChange,
  allBrands,
}) {
  return (
    <div className="filter-controls">
      {/* Search Box */}
      <div className="search-box">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="search-input"
        />
        {searchTerm && (
          <button className="clear-btn" onClick={() => onSearchChange("")}>
            ✕
          </button>
        )}
      </div>

      {/* Brand Filter Dropdown */}
      <select
        value={selectedBrand}
        onChange={(e) => onBrandChange(e.target.value)}
        className="filter-select"
      >
        <option value="All">All Brands</option>
        {allBrands.map((brand) => (
          <option key={brand} value={brand}>
            {brand}
          </option>
        ))}
      </select>

      {/* Sort Dropdown */}
      <select
        value={sortBy}
        onChange={(e) => onSortChange(e.target.value)}
        className="filter-select"
      >
        <option value="default">Sort By</option>
        <option value="price-low">Price: Low to High</option>
        <option value="price-high">Price: High to Low</option>
        <option value="rating">Rating</option>
      </select>
    </div>
  );
}
