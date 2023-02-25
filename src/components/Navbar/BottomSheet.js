import React from "react";
import "./BottomSheet.css";
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import LanguageIcon from '@mui/icons-material/Language';

function BottomSheet() {
  return (
    <>
      <div className="bottom-sheet-header">
        <div className="bottom-sheet-title">Choose your location</div>
        <div className="bottom-sheet-desc">
          Select a delivery location to see product availability and delivery
          options
        </div>
        <div className="bottom-sheet-sign-in">
          <a href="#" className="bottom-sheet-sign-in-btn">Sign in to see your addresses</a>
        </div>
      </div>
      <div className="bottom-sheet-body">
        <ul className="bottom-sheet-body-ul">
          <li>
            <a href="#">
              <span><FmdGoodIcon style={{fontSize:20, marginRight:5, marginBottom:2}}/>Enter an Indian pincode</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span><MyLocationIcon style={{fontSize:20, marginRight:5, marginBottom:2}}/>Use my current location</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span><LanguageIcon style={{fontSize:20, marginRight:5, marginBottom:2}}/>Deliver outside India</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default BottomSheet;
