// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { CartProvider } from "./components/sub-components/cart/CartContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <CartProvider>
    <App />
  </CartProvider>
);
