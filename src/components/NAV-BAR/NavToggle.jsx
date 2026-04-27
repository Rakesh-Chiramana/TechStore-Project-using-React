export default function NavToggle({ isDarkMode, onThemeToggle, onCartOpen, cartCount, wishlistCount }) {
  return (
    <div className="nav-actions">
      {/* Dark Mode Toggle */}
      <button
        className="nav-btn icon-btn theme-toggle"
        onClick={onThemeToggle}
        title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      >
        {isDarkMode ? "☀️" : "🌙"}
      </button>

      {/* Wishlist Button with Count */}
      <button className="nav-btn icon-btn">
        ♡
        {wishlistCount > 0 && <span className="badge">{wishlistCount}</span>}
      </button>

      {/* Cart Button with Count */}
      <button className="nav-btn icon-btn" onClick={onCartOpen}>
        🛒
        {cartCount > 0 && <span className="badge">{cartCount}</span>}
      </button>
    </div>
  );
}
