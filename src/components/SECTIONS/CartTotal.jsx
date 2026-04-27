export default function CartTotal({ cartCount, cartTotal, onViewCart }) {
  if (cartCount === 0) return null;

  return (
    <div className="cart-summary">
      <div className="cart-summary-content">
        <div className="cart-summary-info">
          <span className="cart-summary-icon">🛒</span>
          <span className="cart-summary-count">
            {cartCount} {cartCount === 1 ? "item" : "items"} in cart
          </span>
        </div>
        <div className="cart-summary-right">
          <span className="cart-total">
            ₹{cartTotal.toLocaleString("en-IN")}
          </span>
          <button className="btn-checkout" onClick={onViewCart}>
            View Cart →
          </button>
        </div>
      </div>
    </div>
  );
}
