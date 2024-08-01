import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AppProvider } from "./context/productcontext";
import { FilterContextProvider } from "./context/filterContext";
import { CartProvider } from "./context/cart_context";
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(
  document.getElementById("root")
);


root.render(
  <Auth0Provider
    domain="dev-v0tk6rih7cm5okyp.us.auth0.com"
    clientId="zHjOHLYM15S3S7koujIIOI0kKSwyn1ND"
    redirectUri= {window.location.origin}
  >
  <AppProvider>
    <FilterContextProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </FilterContextProvider>
  </AppProvider>
  </Auth0Provider>
);


reportWebVitals();
