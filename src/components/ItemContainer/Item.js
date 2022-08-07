import React from "react";
import "./Item.css";
import product from "../../images/iphone.jpg";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Product = styled.div`
  display: flex;
  border: 1px solid rgb(235, 235, 235);
  border-radius: 10px;
  margin: 7px;
`;
const ProductImage = styled.div`
  height: 270px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  background-color: rgb(251, 251, 251);
`;
const Image = styled.img`
  height: 100%;
`;
const Details = styled.div`
  padding: 15px;
`;
const ProductName = styled.h2`
  color: #343434;
  font-size: 1.1rem;
  font-weight: 500;
  margin: 7px;
  text-decoration: none;
`;
const Rating = styled.h3`
  margin: 7px;
`;
const Price = styled(Rating)`
  font-weight: 500;
  font-size: 1.3rem;
  color: rgb(255, 128, 0);
`;
const Delivery = styled(Rating)`
  color: #343434;
  font-size: 1rem;
  padding: 4px;
  font-weight: 500;
`;
const DealOfTheDay = styled.span`
  background-color: rgb(255, 128, 0);
  color: white;
  font-size: 0.8rem;
  padding: 4px;
  margin: 7px;
`;

function Item() {
  return (
    <>
      <Product>
        <ProductImage>
          <Image src={product}></Image>
        </ProductImage>
        <Details>
          <Link to="/productdetails">
            <ProductName>Apple iPhone 13 (128GB) - Blue</ProductName>
          </Link>
          <DealOfTheDay>Deal of the day</DealOfTheDay>
          <Rating>* * * * *</Rating>
          <Price>1,000$</Price>
          <Delivery>Get it by tomorrow, July 13</Delivery>
          <Delivery>FREE Delivery by myStore</Delivery>
        </Details>
      </Product>
    </>
  );
}

export default Item;
