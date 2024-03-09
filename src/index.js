import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// product provider
import ProductProvider from "./contexts/ProductContext";
//import slider provider
import SlibarProvider from "./contexts/SidebarContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SlibarProvider>
    <ProductProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ProductProvider>
  </SlibarProvider>
);
