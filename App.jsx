import React from "react";
import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import AboutUs from "./AboutUs.jsx";
import ProductList from "./ProductList.jsx";
import CartItem from "./CartItem.jsx";
import "./App.css";

function Home() {
  return (
    <main className="landing-page">
      <div className="landing-overlay">
        <section className="landing-content">
          <p className="eyebrow landing-eyebrow">Grow a happier home</p>
          <h1>Paradise Nursery</h1>
          <p className="landing-tagline">
            Bring nature home, one beautiful plant at a time.
          </p>
          <p className="landing-copy">
            Discover easy-care greenery, statement leaves, and flowering
            favourites selected to make your space feel alive.
          </p>
          <Link className="button button-light" to="/plants">
            Get Started
          </Link>
        </section>
      </div>
    </main>
  );
}

function NavigationBar() {
  const items = useSelector((state) => state.cart.items);
  const count = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="navbar">
      <Link className="brand" to="/" aria-label="Paradise Nursery home">
        <span className="brand-icon" aria-hidden="true">🌿</span>
        <span>Paradise Nursery</span>
      </Link>
      <div className="nav-links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/plants">Plants</NavLink>
        <NavLink className="cart-nav-link" to="/cart">
          <span aria-hidden="true">🛒</span> Cart
          <span className="cart-count" aria-label={`${count} items in cart`}>{count}</span>
        </NavLink>
      </div>
    </nav>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plants" element={<ProductList />} />
          <Route path="/cart" element={<CartItem />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <footer className="site-footer">
          <p>Paradise Nursery · A little more green, every day.</p>
          <Link to="/about">About Us</Link>
        </footer>
      </div>
    </BrowserRouter>
  );
}
