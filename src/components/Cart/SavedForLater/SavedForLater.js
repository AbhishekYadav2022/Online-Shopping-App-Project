import React, { Component } from "react";
import styled from "styled-components";
import iphone from "../../../images/iphone.jpg";

const Container = styled.div`
  display: flex;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;
const Item = styled.div`
  border: 1px solid lightgrey;
  padding: 15px;
  margin: 0px 5px;
  @media (max-width: 900px) {
    display: flex;
    border: none;
    border-bottom: 1px solid lightgrey;
  }
`;
const ImageContainer = styled.div`
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 900px) {
    margin-right: 15px;
  }
`;
const Image = styled.img`
  height: 200px;
  width: auto;
  /* @media (max-width: 900px) {
    height: 150px;
  } */
`;
const Desc = styled.div``;
const Title = styled.h1`
  font-size: 1.1rem;
  font-weight: 400;
  font-family: "calibri";
  margin: 0;
  padding: 0;
`;
const Price = styled.p`
  margin: 0;
  padding: 0;
  font-size: 1.2rem;
  font-weight: 600;
  font-family: "calibri";
`;
const Format = styled.p`
  margin: 2px;
  padding: 0;
  font-size: 0.8rem;
  font-weight: 600;
  font-family: "calibri";
`;
const Avaliablity = styled.p`
  margin: 2px;
  padding: 0;
  font-size: 0.8rem;
  font-weight: 500;
  color: green;
  font-family: "calibri";
`;
const Eligiblity = styled.p`
  margin: 2px;
  padding: 0;
  font-family: "calibri";
  font-size: 0.9rem;
  color: grey;
`;
const MoveToCart = styled.button`
  margin: 2px;
  padding: 0;
  font-family: "consolas";
  min-width: 220px;
  border: 1px solid lightgray;
  background-color: white;
  border-radius: 9px;
  padding: 4px;
  box-shadow: 0px 0px 3px lightgrey;
  font-size: 0.9rem;
  @media (max-width: 900px) {
    min-width: fit-content;
    border-radius: 8px;
    padding: 4px 10px;
    margin-right: 5px;
  }
`;
const ActionBtns = styled.div`
  margin: 0;
  padding: 0;
  font-family: "calibri";
  color: #007185;
`;
const MainActionBtns = styled.div`
  @media (max-width: 900px) {
    display: flex;
  }
`;
const Btn = styled.p`
  margin: 2px;
  padding: 0;
  font-family: "calibri";
  font-size: 0.85rem;
`;
const DelBtn = styled(Btn)`
  @media (max-width: 900px) {
    color: black;
    font-family: "consolas";
    border: 1px solid lightgray;
    background-color: white;
    border-radius: 8px;
    padding: 4px 10px;
    box-shadow: 0px 0px 3px lightgrey;
    font-size: 0.9rem;
  }
`;

export default class SavedForLater extends Component {
  render() {
    return (
      <Container>
        <Item>
          <ImageContainer>
            <Image src={iphone} />
          </ImageContainer>
          <Desc>
            <Title>The Bhagwat Gita</Title>
            <Price>$100.00</Price>
            <Format>Paperback</Format>
            <Avaliablity>In Stock</Avaliablity>
            <Eligiblity>Eligible for FREE shipping</Eligiblity>
            <ActionBtns>
              <MainActionBtns>
                <MoveToCart>Move to cart</MoveToCart>
                <DelBtn>Delete</DelBtn>
              </MainActionBtns>
              <Btn>Add to list</Btn>
              <Btn>See more like this</Btn>
            </ActionBtns>
          </Desc>
        </Item>
        <Item>
          <ImageContainer>
            <Image src={iphone} />
          </ImageContainer>
          <Desc>
            <Title>The Bhagwat Gita</Title>
            <Price>$100.00</Price>
            <Format>Paperback</Format>
            <Avaliablity>In Stock</Avaliablity>
            <Eligiblity>Eligible for FREE shipping</Eligiblity>
            <ActionBtns>
              <MainActionBtns>
                <MoveToCart>Move to cart</MoveToCart>
                <DelBtn>Delete</DelBtn>
              </MainActionBtns>
              <Btn>Add to list</Btn>
              <Btn>See more like this</Btn>
            </ActionBtns>
          </Desc>
        </Item>
      </Container>
    );
  }
}
