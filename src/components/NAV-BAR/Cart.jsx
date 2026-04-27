export default function Cart({
  isOpen,
  cartItems,
  cartCount,
  cartTotal,
  onClose,
  onUpdateQuantity,
  onRemoveItem,
}) {
  if (!isOpen) return null;

  return (
    <div className="cart-overlay" onClick={onClose}>
      <div className="cart-sidebar" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h2>Your Cart ({cartCount})</h2>
          <button className="cart-close" onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="cart-items">
          {cartItems.length === 0 ? (
            <div className="cart-empty">
              <span className="cart-empty-icon">🛒</span>
              <p>Your cart is empty</p>
              <button className="btn-primary" onClick={onClose}>
                Continue Shopping
              </button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item-image"
                />
                <div className="cart-item-details">
                  <h4>{item.name}</h4>
                  <p className="cart-item-price">
                    ₹{item.price.toLocaleString("en-IN")}
                  </p>
                  <div className="quantity-controls">
                    <button
                      onClick={() =>
                        onUpdateQuantity(item.id, item.quantity - 1)
                      }
                    >
                      −
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() =>
                        onUpdateQuantity(item.id, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  className="cart-item-remove"
                  onClick={() => onRemoveItem(item.id)}
                >
                  🗑️
                </button>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="cart-subtotal">
              <span>Subtotal:</span>
              <span className="cart-subtotal-price">
                ₹{cartTotal.toLocaleString("en-IN")}
              </span>
            </div>
            <button className="btn-checkout-full">Proceed to Checkout</button>
          </div>
        )}
      </div>
    </div>
  );
}
