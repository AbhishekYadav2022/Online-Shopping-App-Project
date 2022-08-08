import React, { Component } from "react";
import styled from "styled-components";
import ListItemSeed from "./YourListItemsSeed";

const ContentWrapper = styled.div`
  border: 2px solid red;
`;
const Card = styled.div`
  border: 2px solid black;
`;
const Action = styled.div`
  border: 2px solid black;
`;
const ImageContainer = styled.div`
  border: 2px solid salmon;
`;
const ProductImage = styled.img`
  border: 2px solid blue;
`;
const Desc = styled.div`
  border: 2px solid blue;
`;
const Price = styled.p`
  border: 2px solid blue;
`;
const Buttons = styled.div`
  border: 2px solid blue;
`;
const Button = styled.div`
  border: 2px solid blue;
`;
const AddToCart = styled(Button)``;

const ListItem = ListItemSeed.map((abc) => (
  <Card>
    <Action></Action>
    <ImageContainer>
      <ProductImage />
    </ImageContainer>
    <Desc>
      <Price>{abc.price}</Price>
    </Desc>
    <Buttons>
      <AddToCart>Add to Cart</AddToCart>
    </Buttons>
  </Card>
));

export default class YourListItems extends Component {
  render() {
    return <ContentWrapper>{ListItem}</ContentWrapper>;
  }
}
