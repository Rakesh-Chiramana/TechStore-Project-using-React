export default function Wishlist({ wishlistCount }) {
  return (
    <button className="nav-btn icon-btn">
      ♡
      {wishlistCount > 0 && <span className="badge">{wishlistCount}</span>}
    </button>
  );
}
