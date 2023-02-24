import React, { useState } from "react";
import "./Navbar.css";
import "./NavbarResponsive.css";
import "./SideBar.css";
import logo from "../../images/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FlagCircleIcon from "@mui/icons-material/FlagCircle";
import RoomIcon from "@mui/icons-material/Room";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import CloseIcon from "@mui/icons-material/Close";

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div className="nav-container">
      <div className="nav-top">
        <div className="nav-top-left">
          <span
            className="nav-top-child toggle-menu-btn"
            onClick={() => setNavbarOpen((prev) => !prev)}
          >
            {/* {navbarOpen ? "close" : "open"} */}
            <MenuIcon />
          </span>
          <span className="nav-top-child">
            <img className="nav-top-logo" src={logo} />
          </span>
        </div>
        <div className="nav-top-right">
          <span className="nav-top-child">
            <span className="nav-sign-in-text">Sign In</span>
            <KeyboardArrowRightIcon />
            <PersonOutlineIcon />
          </span>
          <span className="nav-top-child">
            <ShoppingCartIcon />
          </span>
        </div>
        <div
          className={`overlay${navbarOpen ? " show" : ""}`}
          onClick={() => setNavbarOpen(false)}
        >
          <span>
            <CloseIcon />
          </span>
        </div>
        <div className={`menu-nav${navbarOpen ? " show-menu" : ""}`}>
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
        </div>
      </div>
      <div className="nav-left">
        <a href="/" className="nav-logo-container nav-box-container">
          <img className="logo" src={logo}></img>
        </a>
        <a href="/" className="nav-place-container nav-box-container">
          <div className="nav-place-icon">
            <RoomIcon style={{ color: "white" }} />
          </div>
          <div className="nav-place-name">
            <span className="nav-text nav-small-text">Deliver to</span>
            <span className="nav-address nav-bold-text">Jaunpur 230306</span>
          </div>
        </a>
      </div>
      <div className="nav-middle">
        <div className="nav-search-box-container">
          <div className="nav-search-left nav-search-child">
            All
            <ArrowDropDownIcon />
          </div>
          <div className="nav-search-form-container">
            <input
              className="nav-search-box nav-search-child"
              placeholder="Search Amazon.in"
            />
          </div>
          <div className="nav-search-right nav-search-child">
            <SearchIcon sx={{ fontSize: 30 }} className="nav-search-icon" />
          </div>
        </div>
      </div>
      <div className="nav-right">
        <div className="nav-right-boxes nav-box-container nav-dropdown">
          <a
            href="/"
            className="nav-right-country-lang-container nav-dropdown-btn"
          >
            {/* <span className="nav-right-country-flag"></span> */}
            <FlagCircleIcon style={{ color: "green" }} />
            <span className="nav-right-lang">EN</span>
            <ArrowDropDownIcon style={{ color: "white" }} />
          </a>
          <div className="nav-lang-dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
        <div className="nav-right-boxes nav-box-container nav-dropdown">
          <a
            href="#"
            class=".nav-dropdown-btn"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <span className="nav-hello-text nav-small-text">
              Hello, Abhishek
            </span>
            <span className="nav-right-account nav-bold-text">
              Account & Lists
              <ArrowDropDownIcon style={{ color: "white" }} />
            </span>
          </a>
          <div className="nav-lang-dropdown-content nav-account-dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
        <a href="#" className="nav-right-boxes nav-box-container">
          <span className="nav-returns-text nav-small-text">Returns</span>
          <span className="nav-right-orders-container">
            <span className="nav-right-orders nav-bold-text">& Orders</span>
            <span className="nav-right-dropdown"></span>
          </span>
        </a>
        <a href="#" className="nav-right-boxes nav-box-container cart-box">
          <span className="nav-cart">
            <ShoppingCartIcon
              style={{ color: "white" }}
              sx={{ fontSize: 37 }}
            />
            <span className="cart-item-count">2</span>
          </span>
          <span className="nav-cart-text nav-bold-text">Cart</span>
        </a>
      </div>
      <div className="nav-bottom">
        <div className="nav-bottom-location">
          <nav className="nav-bottom-location-container">
            <RoomIcon style={{ fontSize: 20 }} />
            <span className="nav-bottom-location-text">Deliver to</span>
            <span className="nav-bottom-location">Jaunpur 230306</span>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
