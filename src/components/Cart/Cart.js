import React, { Component } from "react";
import styled from "styled-components";
import Image from "../../images/iphone.jpg";
import Approved from "./approve.svg";
import "./Cart.css";
import SideBar from "./SideBar/SideBar";
import YourItems from "./YourItems/YourItems";
// Price of products
var price1 = 100;
var price2 = 100;

const Container = styled.div`
  background-color: #eaeded !important;
  display: flex;
  //=== Making Responsive===
  @media (max-width: 900px) {
    flex-direction: column-reverse;
  }
`;
const BodyContainer = styled.div`
  width: 100vw;
  margin: 0;
  padding: 0;
`;
const ShoppingCart = styled.div`
  background-color: white;
  margin: 10px;
  padding: 25px;
  height: auto;

  //========== Making Responsive==========
  @media (max-width: 900px) {
  }
`;
const Title = styled.div`
  font-size: 1.7rem;
  font-weight: 500;
  @media (max-width: 900px) {
    display: none;
  }
`;
const Deselect = styled.div`
  color: #007185;
  @media (max-width: 900px) {
    display: none;
  }
`;
const AllItems = styled.div``;
const Item = styled.div`
  display: flex;
  //========== Making Responsive==========
  @media (max-width: 900px) {
    flex-direction: column;
    background-color: #f6f6f6;
    padding: 10px
  }
`;
const ResponsiveItemContainer = styled.div`
  display: flex;
`;
const CheckBox = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
  justify-content: center;

  //========== Making Responsive==========
  @media (max-width: 900px) {
    display: none;
  }
`;
const ImageContainer = styled.div`
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  @media (max-width: 900px) {
    margin-left: 0;
  }
`;
const ItemImage = styled.img`
  width: 100px;
  height: auto;
`;
const ItemDescription = styled.div`
  margin: 20px;

  //========== Making Responsive==========
  @media (max-width: 900px) {
  }
`;
const ItemNameAndPrice = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ItemName = styled.div`
  font-size: 1.2rem;
  margin: 3px;
  font-weight: 500;
`;
const Author = styled.div`
  font-size: 0.9rem;
  margin: 3px;
`;
const Format = styled.div`
  font-size: 0.8rem;
  font-weight: 500;
  margin: 3px;
`;
const Abvailability = styled.div`
  color: green;
  font-size: 0.8rem;
  margin: 3px;
`;
const Eligibility = styled.div`
  font-size: 0.85rem;
  color: grey;
  margin: 3px;
`;
const Actions = styled.div`
  display: flex;
  align-items: center;
  margin: 3px;
  color: #007185;
  font-size: 0.8rem;
  font-weight: 500;
  //========== Making Responsive==========
  @media (max-width: 900px) {
    display: none;
  }
`;
const ResponsiveActions = styled.div`
  display: flex;
  align-items: center;
  margin: 3px;
  color: #007185;
  font-size: 0.8rem;
  font-weight: 500;
  flex-wrap: wrap;
  @media (min-width: 901px) {
    display: none;
  }
`;
const Qty = styled.div`
  color: black;
  font-size: 0.9rem;
  font-weight: 500;
  background-color: #eaeded;
  padding: 3px;
  padding-left: 6px;
  padding-right: 6px;
  border-radius: 8px;
  border: 1.8px solid rgb(185 185 185);
  margin-right: 15px;
  box-shadow: 1px 1px 4px grey;
  cursor: pointer;
  @media (max-width: 900px) {
  margin: 5px;
  margin-right: 15px;
  }
`;
const Delete = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  border-right: 1.8px solid rgb(185 185 185);
  cursor: pointer;
  @media (max-width: 900px) {
  margin: 5px;
  margin: 5px;
  color: black;
  background-color: white;
  padding: 5px;
  padding-left: 8px;
  padding-right: 8px;
  border-radius: 8px;
  border: 1.2px solid rgb(185 185 185);
  margin-right: 15px;
  }
`;
const Save = styled.div`
  margin: 5px;
  margin: 5px;
  padding-left: 15px;
  padding-right: 15px;
  border-right: 1.8px solid rgb(185 185 185);
  cursor: pointer;
  @media (max-width: 900px) {
  color: black;
  background-color: white;
  padding: 5px;
  padding-left: 8px;
  padding-right: 8px;
  border-radius: 8px;
  border: 1.2px solid rgb(185 185 185);
  margin-right: 15px;
  }
`;
const More = styled.div`
  margin: 5px;
  margin: 5px;
  padding-left: 15px;
  padding-right: 15px;
  border-right: 1.8px solid rgb(185 185 185);
  cursor: pointer;
  @media (max-width: 900px) {
  color: black;
  background-color: white;
  padding: 5px;
  padding-left: 8px;
  padding-right: 8px;
  border-radius: 8px;
  border: 1.2px solid rgb(185 185 185);
  margin-right: 15px;
  }
`;
const HR = styled.hr`
  margin-top: 5px;
  margin-bottom: 5px;
`;
const SubTotal = styled.div`
  text-align: right;
  font-size: 1.2rem;
  font-weight: 400;
`;
const Price = styled.span`
  font-weight: 500;
  font-size: 1.2rem;
  margin: 3px;
`;

export default class Cart extends Component {
  render() {
    return (
      <Container>
        <BodyContainer>
          <ShoppingCart>
            <Title>Shopping Cart</Title>
            <Deselect>Deselect all items</Deselect>
            <AllItems>
              <HR />
              <Item>
                <ResponsiveItemContainer>
                  <CheckBox>
                    <input className="cartCheckbox" type={"checkbox"} />
                  </CheckBox>
                  <ImageContainer>
                    <ItemImage src={Image} />
                  </ImageContainer>
                  <ItemDescription>
                    <ItemNameAndPrice>
                      <ItemName>
                        Gita Bodh - A complete and Precise insight in Bhagwat
                        Gita.
                      </ItemName>
                      <Price>$ {price1}</Price>
                    </ItemNameAndPrice>
                    <Author>by Uday Karanjkar</Author>
                    <Format>Hardcover</Format>
                    <Abvailability>In Stock</Abvailability>
                    <Eligibility>Eligible for FREE Shipping</Eligibility>
                    <Actions>
                      <Qty className="qty">
                        Qty:
                        <select name="dropdown" id="dropdown">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <hr />
                          <option value="10+">10+</option>
                        </select>
                      </Qty>
                      <Delete>Delete</Delete>
                      <Save>Save for later</Save>
                      <More>More like this</More>
                    </Actions>
                  </ItemDescription>
                </ResponsiveItemContainer>
                <ResponsiveActions>
                  <Qty className="qty">
                    Qty:
                    <select name="dropdown" id="dropdown">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <hr />
                      <option value="10+">10+</option>
                    </select>
                  </Qty>
                  <Delete>Delete</Delete>
                  <Save>Save for later</Save>
                  <More>More like this</More>
                </ResponsiveActions>
              </Item>
              <HR />
            </AllItems>
            <SubTotal>
              Subtotal (2 items): <Price>$ {price1 + price2}</Price>
            </SubTotal>
          </ShoppingCart>
          <YourItems />
        </BodyContainer>
        <SideBar />
      </Container>
    );
  }
}
