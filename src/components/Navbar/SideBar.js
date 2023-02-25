import React, { useState } from "react";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import "./Navbar.css";
import "./NavbarResponsive.css";
import "./SideBar.css";

function SideBar() {
  return (
    <>
      <ul className="hmenu-ul">
        <li>
          <div id="hmenu-header">
            <div id="hmenu-header-top">
              <span>Sign In</span>
              <PersonOutlineIcon style={{ color: "white", fontSize: 32 }} />
            </div>
            <div id="hmenu-header-bottom">
              <a href="#" id="hmenu-header-title">
                <div id="hmenu-header-title-line1">Browse</div>
                <div id="hmenu-header-title-line2">Amazon</div>
              </a>
            </div>
          </div>
        </li>
        <li>
          <a href="#" id="hmenu-home-link">
            <div id="hmenu-home-container">
              <div id="hmenu-home-left">
                <div id="hmenu-home-text">Amazon Home</div>
              </div>
              <div id="hmenu-home-right">
                <HomeOutlinedIcon style={{ fontSize: 32 }} />
              </div>
            </div>
          </a>
        </li>
        <li className="hmenu-separator"></li>
        <li className="hmenu-item hmenu-title">Trending</li>
        <li className="hmenu-item">Best Sellers</li>
        <li className="hmenu-item">New Releases</li>
        <li className="hmenu-item">Movers and Shakers</li>
        <li className="hmenu-separator"></li>
        <li className="hmenu-item hmenu-title">top categories for you</li>
        <li className="hmenu-item">Mobiles</li>
        <li className="hmenu-item">Computers</li>
        <li className="hmenu-item">Books</li>
        <li className="hmenu-item">Amazon Fashion</li>
        <li className="hmenu-item">See All Categories</li>
        <li className="hmenu-separator"></li>
        <li className="hmenu-item hmenu-title">Programs & Features</li>
        <li className="hmenu-item">Today's Deals</li>
        <li className="hmenu-item">Amazon Pay</li>
        <li className="hmenu-item">Try Prime</li>
        <li className="hmenu-item">Sell on Amazon</li>
        <li className="hmenu-item">Style Feed</li>
      </ul>
    </>
  );
}

export default SideBar;
