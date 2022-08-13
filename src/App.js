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
import YourLists from "./components/YourWishlist/YourLists/YourLists";
import YourIdeaLists from "./components/YourWishlist/YourIdeaLists/YourIdeaLists";
import YourFriends from "./components/YourWishlist/YourFriends/YourFriends";
import Modal from "./components/Popups/Modal";
import Rating from "./components/Popups/Rating/Rating";

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="productdetails" element={<ProductDetails />} />
          <Route path="account" element={<YourAccount />} />
          <Route path="orders" element={<YourOrders />}>
            <Route path="ordered-items" element={<Orders />} />
            <Route path="buyagain" element={<BuyAgain />} />
            <Route path="not-yet-shipped" element={<NotYetShipped />} />
            <Route path="cancelled-orders" element={<CancelledOrders />} />
          </Route>
          <Route path="cart" element={<Cart />}>
            <Route index element={<BuyAgain />}></Route>
            <Route path="savedforlater" element={<SavedForLater />} />
            <Route path="buyagain" element={<BuyAgain />} />
          </Route>
          <Route path="wishlist" element={<YourWishlist />}>
            <Route path="your-lists" element={<YourLists/>}/>
            <Route path="your-idea-lists" element={<YourIdeaLists/>}/>
            <Route path="your-friends" element={<YourFriends/>}/>
          </Route>
          <Route path="popup1" element={<Modal />} />
          <Route path="popup1" element={<Modal />} />
          <Route path="rating" element={<Rating />}/>
        </Routes>
        <Footer />
      </>
    );
  }
}
