import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "./CartSlice.jsx";
import { Link } from "react-router-dom";

export default function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <main className="page-container cart-page">
      <header className="page-heading">
        <p className="eyebrow">Your little indoor garden</p>
        <h1>Shopping Cart</h1>
        <p>
          {itemCount === 1 ? "1 item" : `${itemCount} items`} in your cart
        </p>
      </header>

      {items.length === 0 ? (
        <section className="empty-cart">
          <div className="empty-cart-icon" aria-hidden="true">🪴</div>
          <h2>Your cart is looking a little empty</h2>
          <p>Find a plant you love and it will appear here.</p>
          <Link className="button button-primary" to="/plants">
            Continue Shopping
          </Link>
        </section>
      ) : (
        <div className="cart-layout">
          <section className="cart-items-list" aria-label="Cart items">
            {items.map((item) => (
              <article className="cart-row" key={item.id}>
                <img className="cart-thumbnail" src={item.image} alt={item.name} />
                <div className="cart-product-details">
                  <h2>{item.name}</h2>
                  <p>Unit price: ₹{item.price.toLocaleString("en-IN")}</p>
                  <p className="line-total">
                    Item total: ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                  </p>
                  <div className="quantity-controls" aria-label={`Quantity for ${item.name}`}>
                    <button
                      type="button"
                      className="quantity-button"
                      aria-label={`Decrease ${item.name} quantity`}
                      onClick={() => dispatch(decreaseQuantity(item.id))}
                    >
                      −
                    </button>
                    <span className="quantity-value">{item.quantity}</span>
                    <button
                      type="button"
                      className="quantity-button"
                      aria-label={`Increase ${item.name} quantity`}
                      onClick={() => dispatch(increaseQuantity(item.id))}
                    >
                      +
                    </button>
                    <button
                      type="button"
                      className="remove-button"
                      onClick={() => dispatch(removeFromCart(item.id))}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </section>

          <aside className="cart-summary">
            <h2>Order Summary</h2>
            <div className="summary-line">
              <span>Total items</span>
              <span>{itemCount}</span>
            </div>
            <div className="summary-line summary-total">
              <span>Total amount</span>
              <span>₹{total.toLocaleString("en-IN")}</span>
            </div>
            <button
              className="button button-primary checkout-button"
              type="button"
              onClick={() => window.alert("Checkout is Coming Soon!")}
            >
              Checkout
            </button>
            <Link className="button button-secondary checkout-button" to="/plants">
              Continue Shopping
            </Link>
            <button
              className="clear-cart-button"
              type="button"
              onClick={() => dispatch(clearCart())}
            >
              Clear Cart
            </button>
          </aside>
        </div>
      )}
    </main>
  );
}
