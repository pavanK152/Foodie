import React from "react";
import LandingPage from "./suby/pages/LandingPage";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import ProductMenu from "./suby/components/ProductMenu";
import AddCart from "./suby/components/AddCart";
import PlaceOrder from "./suby/pages/PlaceOrder"; // Import PlaceOrder component
import Orders from "./suby/components/Orders";
import { CartProvider } from "./suby/context/CartContext";
import NotFound from "./suby/components/NotFound";

const App = () => {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products/:firmId/:firmName" element={<ProductMenu />} />
        <Route path="/cart" element={<AddCart />} />
        <Route path="/placeorder" element={<PlaceOrder />} />{" "}
        {/* Existing route */}
        <Route path="/orders" element={<Orders />} /> {/* Add this route */}
        <Route path="/*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </CartProvider>
  );
};

export default App;
