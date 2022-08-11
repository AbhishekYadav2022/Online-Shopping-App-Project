import React, { Component } from "react";
import styled from "styled-components";
import { ListItemSeed } from "./YourListItemsSeed";
import threeDots from "../assets/threedot.svg";

const ContentWrapper = styled.div`
  display: flex;
`;
const Card = styled.div`
  background-color: rgba(0, 0, 0, 0.024);
  margin: 3px;
  width: 220px;
  position: relative;
`;
const Action = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
`;
const IconContainer = styled.div`
  height: 17px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 7px;
  cursor: pointer;
`;
const Icon = styled.img`
  height: 100%;
`;
const ImageContainer = styled.div`
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ProductImage = styled.img`
  height: 100%;
`;
const Desc = styled.div`
  padding: 6px;
  margin: 0px 5px;
`;
const Price = styled.p`
  font-size: 0.9rem;
  font-weight: 600;
  margin: 0;
`;
const Buttons = styled.div`
  padding: 6px;
  margin: 0px 5px;
`;
const Button = styled.div`
  font-size: 0.9rem;
  border: 1px solid rgb(255, 216, 20);
  text-align: center;
  padding: 5px 0px;
  border-radius: 20px;
  cursor: pointer;
  background-color: rgb(255, 216, 20);
  &:hover {
    background-color: rgb(243 202 0);
    border-color: rgb(243 202 0);

    /* This styled should be used when the button is active  */
    background-color: white;
    border-color: rgb(255, 216, 20);
  }
`;
const AddToCart = styled(Button)``;
const QuickView = styled(Button)`
  margin: 0px 20px;
  border-radius: 12px;
  background-color: white;
  border-color: lightgrey;
  box-shadow: 0px 0px 4px lightgrey;
  position: absolute;
  left: 40%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 150px;
  &:hover {
    border-color: lightgray;
  }
  /* display: none; */
`;

const ListItem = ListItemSeed.map((abc) => (
    <Card>
      <Action>
        <IconContainer>
          <Icon src={threeDots} />
        </IconContainer>
      </Action>
      <ImageContainer>
        <ProductImage
          className="listProductImage"
          title={abc.title}
          src={abc.image}
        />
      </ImageContainer>
      <Desc>
        <Price>{abc.price}</Price>
      </Desc>
      <Buttons>
        <AddToCart>Add to Cart</AddToCart>
      </Buttons>
      <QuickView className="quickView">Quick View</QuickView>
    </Card>
));

export default class YourListItems extends Component {
  render() {
    return <ContentWrapper>{ListItem}</ContentWrapper>;
  }
}
