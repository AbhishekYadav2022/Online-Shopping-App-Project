import "./App.css";
import React, { Component } from "react";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import ProductDetails from "./components/ProductDetail/ProductDetail";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./components/Cart/Cart";
import SavedForLater from "./components/Cart/SavedForLater/SavedForLater";
import BuyAgain from "./components/Cart/BuyAgain/BuyAgain";
import Footer from "./components/Footer/Footer";
import YourAccount from "./components/YourAccount/YourAccount";
import YourOrders from "./components/YourOrders/YourOrders";
import Orders from "./components/YourOrders/Orders/Orders";
import NotYetShipped from "./components/YourOrders/NotYetShipped/NotYetShipped";
import CancelledOrders from "./components/YourOrders/CancelledOrders/CancelledOrders";
import YourWishlist from "./components/YourWishlist/YourWishlist";

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="productdetails" element={<ProductDetails />} />
          <Route path="account" element={<YourAccount/>} />
          <Route path="orders" element={<YourOrders/>}>
            <Route path="ordered-items" element={<Orders/>}/>
            <Route path="buyagain" element={<BuyAgain/>}/>
            <Route path="not-yet-shipped" element={<NotYetShipped/>}/>
            <Route path="cancelled-orders" element={<CancelledOrders/>}/>
          </Route>
          <Route path="cart" element={<Cart />}>
            <Route path="savedforlater" element={<SavedForLater />} />
            <Route path="buyagain" element={<BuyAgain />} />
          </Route>
          <Route path="wishlist" element={<YourWishlist/>}></Route>
        </Routes>
        <Footer/>
      </>
    );
  }
}
