import NavLogo from "./NavLogo";
import NavLinks from "./NavLinks";
import NavToggle from "./NavToggle";
import SignButtons from "./SignButtons";

export default function Navbar({
  isDarkMode,
  onThemeToggle,
  onCartOpen,
  cartCount,
  wishlistCount,
}) {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <NavLogo />
        <NavLinks />
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <NavToggle
            isDarkMode={isDarkMode}
            onThemeToggle={onThemeToggle}
            onCartOpen={onCartOpen}
            cartCount={cartCount}
            wishlistCount={wishlistCount}
          />
          <SignButtons />
        </div>
      </div>
    </nav>
  );
}
