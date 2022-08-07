import React, { Component } from 'react'
import styled from "styled-components"
import Approved from "../approve.svg"
var price1 = 100;
var price2 = 100;

const Container = styled.div`
  width: 450px;
  //=== Making Responsive===
  @media (max-width: 900px) {
    width: 100%;
  }
`;
const Buy = styled.div`
  background-color: white;
  margin: 10px;
  padding: 20px;
`;
const DeliveryInfo = styled.p`
  color: #007185;
  font-size: 0.8rem;
  margin-top: 10px;
  margin-bottom: 10px;
`;
const ApprovedIcon = styled.img`
  height: 22px;
`;
const TotalPrice = styled.p`
  margin-top: 10px;
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 10px;
`;
const BuyButton = styled.div`
  width: 100%;
  background-color: #00b700;
  /* hover: #00a500; */
  font-size: 0.8rem;
  padding: 6px;
  border-radius: 8px;
  font-weight: 500;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
  box-shadow: 2px 2px 2px grey;
  cursor: pointer;

  //========== Making Responsive==========
  @media (max-width: 900px) {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
  }
`;

export default class SideBar extends Component {
  render() {
    return (
        <Container>
        <Buy>
          <DeliveryInfo>
              <ApprovedIcon src={Approved} />
            Your order is eligible for FREE Delivery. Select this option at
            checkout. Details
          </DeliveryInfo>
          <TotalPrice>Subtotal (2 items):$ {price1 + price2}</TotalPrice>
          <BuyButton>Proceed to Buy</BuyButton>
        </Buy>
      </Container>
    )
  }
}
