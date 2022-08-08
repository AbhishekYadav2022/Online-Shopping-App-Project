import React, { Component } from "react";
import styled from "styled-components";
import { ListItemSeed } from "../YourListItems/YourListItemsSeed";
import threeDots from "../assets/threedot.svg";
import Draggable from "react-draggable";

const ContentWrapper = styled.div``;
const Card = styled.div`
  background-color: rgba(0, 0, 0, 0.024);
  margin: 3px;
  width: 100%;
  position: relative;
  display: flex;
  padding: 20px 0px;
`;
const Action = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  padding: 25px;
  width: 100px;
`;
const DragIconContainer = styled.div`
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
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 30px;
`;
const ProductImage = styled.img`
  width: 100%;
`;
const Desc = styled.div`
  padding: 6px;
  margin: 0px 5px;
  width: 25%;
`;
const Comment = styled.div`
  width: 25%;
`;
const Name = styled.div`
  font-size: 0.9rem;
  font-weight: 700;
  color: #007185;
`;
const Author = styled.div`
  font-size: 0.95rem;
  font-weight: 500;
`;
const Price = styled.p`
  font-size: 0.9rem;
  margin: 0;
  font-size: 1.05rem;
`;
const Buttons = styled.div`
  padding: 0px 20px;
  margin: 0px 6px;
  width: 25%;
`;
const Date = styled.p`
  font-size: 0.82rem;
  margin: 5px 0px;
  padding: 0;
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
const MoveAndDeleteBtns = styled.div`
  display: flex;
  margin: 5px 0px;
`;
const MoveBtn = styled(Button)`
  width: 50%;
  border-radius: 12px;
  background-color: white;
  border-color: lightgrey;
  box-shadow: 0px 0px 4px lightgrey;
  &:hover {
    border-color: lightgray;
  }
  font-size: 0.7rem;
  padding: 3px;
  border-radius: 7px;
  margin: 2px;
`;
const DeleteBtn = styled(MoveBtn)``;
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
  display: none;
`;

const ListItem = ListItemSeed.map((abc) => (
  <Draggable>
    <Card>
      <Action>
        <DragIconContainer>
          <Icon src={threeDots} />
        </DragIconContainer>
      </Action>
      <ImageContainer>
        <ProductImage
          className="listProductImage"
          title={abc.title}
          src={abc.image}
        />
      </ImageContainer>
      <Desc>
        <Name>{abc.name}</Name>
        <Author>{abc.author}</Author>
        <Price>{abc.price}</Price>
      </Desc>
      <Comment></Comment>
      <Buttons>
        <Date>{abc.date}</Date>
        <AddToCart>Add to Cart</AddToCart>
        <MoveAndDeleteBtns>
          <MoveBtn>Move</MoveBtn>
          <DeleteBtn>Delete</DeleteBtn>
        </MoveAndDeleteBtns>
      </Buttons>
      <QuickView className="quickView">Quick View</QuickView>
    </Card>
  </Draggable>
));

export default class YourListItems_DisplayList extends Component {
  render() {
    return <ContentWrapper>{ListItem}</ContentWrapper>;
  }
}
