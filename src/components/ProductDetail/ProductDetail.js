import React, { Component } from "react";
import "./ProductDetail.css";
import productImage from "../../images/iphone.jpg";
import info from "../../images/info.svg";
import Specifications from "./Specifications/Specifications";
import FrequentlyBoughtTogether from "./FrequentlyBoughtTogether/FrequentlyBoughtTogether";
import RatingsAndReviews from "./RatingsAndReviews/RatingsAndReviews";
import starIcon from '../../images/starIcon.png'
import Cart from '../../images/cart.svg'
import styled from 'styled-components'

const CartIcon = styled.img`
  height: 100%;
`

class ProductDetail extends Component {
  render() {
    return (
      <div className="productDetail">
        <div className="product">
          <div className="productImage">
            <img src={productImage}></img>
            <div className="productBtns">
              <button className="addToCart"><span><CartIcon src={Cart}/></span>Add to cart</button>
              <button className="buyNow">Buy now</button>
            </div>
          </div>
          <div className="productDescription">
            <h2 className="productTitle">
              The Power of Your Subconscious Mind (English, Paperback, Murphy
              Joseph)
            </h2>
            <p className="productRatingAndReview">
              <span className="productRating">4.5 <img className="starIcon" src={starIcon}></img></span> 48,976 Ratings &
              4,433 Reviews
            </p>
            <p className="productPrice">
              <span className="newPrice">₹117</span>{" "}
              <span className="oldPrice">₹199</span>{" "}
              <span className="off">41% off</span> <img src={info}></img>
            </p>
            <h4 className="offersHeading">Avaliable offers</h4>
            <ul className="offers">
              <li>
                Combo OfferBuy 3 items save 5%; Buy 4 save 7%; Buy 5+ save 10%
              </li>
              <li>
                Bank Offer10% off on SBI Credit Card, up to ₹1500. On orders of
                ₹5000 and above
              </li>
              <li>
                Bank Offer10% off on SBI Credit Card EMI Transactions, up to
                ₹2000. On orders of ₹5000 and above
              </li>
              <li>Bank Offer5% Cashback on Flipkart Axis Bank Card</li>
            </ul>
            <div className="productInforamtion">
              <div className="productInformationByCategory">
                <h4>Author</h4>
                <p>Murphy Joseph</p>
              </div>
              <div className="productInformationByCategory">
                <h4>Highlights</h4>
                <ul>
                  <li>Language: English</li>
                  <li>Binding: Paperback</li>
                  <li>Publisher: Penguin Books India Pvt Ltd</li>
                  <li>Genre: Psychology</li>
                  <li>ISBN: 9780143442974, 9780143442974</li>
                  <li>Pages: 280</li>
                </ul>
              </div>
              <div className="productInformationByCategory">
                <h4>Seller</h4>
                <p>
                  TrueComRetail
                  <ul>
                    <li>7 Days Replacement Policy</li>
                    <li>GST invoice available</li>
                  </ul>
                </p>
              </div>
              <div className="productInformationByCategory">
                <h4>Services</h4>
                <ul>
                  <li>Services</li>
                  <li>7 Days Replacement Policy</li>
                  <li>Cash on Delivery avalilable</li>
                </ul>
              </div>
            </div>
            <Specifications />
            <RatingsAndReviews/>
          </div>
        </div>
      </div>
    );
  }
}
export default ProductDetail;
