import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import styled from "styled-components";
import searchIcon from "../../images/searchIcon.svg";
import cartIcon from "../../images/cart.svg"

const Container = styled.div`
  padding: 8px;
  background-color: #131921;
  height: 60px;
  color: white;
  display: flex;
  justify-content: space-evenly;
  
  //========== Making Responsive==========
  @media (max-width: 900px) {
    display: none;
  }
`;
const LogoContainer = styled.div`
  border: 2px solid white;
  margin: 2px;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SearchBoxContainer = styled.div`
  border-radius: 6px;
  background-color: white;
  border: 2px solid white;
  border: none;
  height: 40px;
  margin: 2px;
  display: flex;
`;
const Category = styled.div`
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  background-color: #f7f7f7;
  border-right: 1px solid #d9d9d9;
  height: 40px;
  color: black;
  text-align: center;
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: 600;
  color: #4e4e4e;
`;
const SearchBox = styled.input`
  background-color: white;
  border: none;
  height: 40px;
  width: 425px;
`;
const SearchIconContainer = styled.div`
  background-color: #febd69;
  height: 40px;
  width: 45px;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SearchIcon = styled.img`
  height: 25px;
`;
const Country = styled.div`
  border: 1px solid red;
  padding-bottom: -10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Links = styled.div`
  /* border: 2px solid white; */
  display: flex;
  flex-direction: column;
  margin: 2px;
`;
const CartContainer = styled.div`
  display: flex;
  /* border: 2px solid white; */
`;
const CartText = styled.div`
  /* border: 1px solid white; */
  font-family: "arial";
  height: fit-content;
  font-size: 1.1rem;
  font-weight: 700;
  /* border: 1px solid white; */
  margin-top: 17px;
`;
const Span = styled.span`
  font-family: "arial";
  font-size: 0.7rem;
  height: fit-content;
  margin-top: 3px;
  margin-bottom: -4px;
`;
const Span2 = styled.span`
  font-family: "arial";
  height: fit-content;
  font-size: 1.1rem;
  font-weight: 700;
  margin-top: 0px;
`;
const Cart = styled.div`
  display: flex;
  
`
const NumberOfProducts = styled.div`
  width: 40px;
  margin: 6px;
  margin-left: 7px;
  font-weight: 700;
  color: orange;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;

`;
const CartIcon = styled.img`
`;



function Navbar() {
  return (
    <Container>
      <LogoContainer>
        <Link className="logoContainer" to="/">
          Logo
        </Link>
      </LogoContainer>
      <Links>
        <Span>Hello</Span>
        <Span2>Select your address</Span2>
      </Links>
      <SearchBoxContainer>
        <Category>All</Category>
        <SearchBox />
        <SearchIconContainer>
          <SearchIcon src={searchIcon} />
        </SearchIconContainer>
      </SearchBoxContainer>
      <Country>Country</Country>
      <Links>
        <Span>Hello, Abhishek</Span>
        <Span2 >Account & Lists</Span2>
      </Links>
      <Links>
        <Span>Returns</Span>
        <Span2>& Orders</Span2>
      </Links>
      <CartContainer>
        <Cart>
          <NumberOfProducts>2</NumberOfProducts>
          <CartIcon src={cartIcon}/>
        </Cart>
        <CartText>Cart</CartText>
      </CartContainer>
    </Container>
  );
}

export default Navbar;
