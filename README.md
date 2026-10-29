# Paradise Nursery — Shopping Application

A React + Redux Toolkit shopping cart for an online houseplant shop.

## Features
- Landing page with the Paradise Nursery name and a **Get Started** button.
- About Us page.
- 18 houseplants across three categories (six plants per category).
- Product thumbnails, names, prices, and Add to Cart buttons.
- Add buttons become disabled after an item is added.
- Navbar links to Home, Plants, and Cart; live cart item count.
- Cart with quantity controls, per-item totals, overall total, delete buttons,
  Continue Shopping, and a Checkout "Coming Soon" message.
- Redux Toolkit manages cart state.

## Suggested project structure

```text
your-project/
├── README.md
└── src/
    ├── App.jsx
    ├── App.css
    ├── AboutUs.jsx
    ├── CartSlice.jsx
    ├── ProductList.jsx
    └── CartItem.jsx
```

## Install dependencies

From your React project folder, run:

```bash
npm install @reduxjs/toolkit react-redux react-router-dom
```

If you are starting a new Vite project:

```bash
npm create vite@latest paradise-nursery -- --template react
cd paradise-nursery
npm install
npm install @reduxjs/toolkit react-redux react-router-dom
```

## Connect Redux in `src/main.jsx`

The assignment asks you to submit the seven files above. To run the app, your existing
`src/main.jsx` should wrap `<App />` with Redux's `<Provider>` and use the store exported
from `CartSlice.jsx`. For example:

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.jsx";
import { store } from "./CartSlice.jsx";
import "./App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
```

The plant photos are loaded from Unsplash URLs, so an internet connection is needed
for the images to appear. Prices are sample prices in Indian rupees (₹).
