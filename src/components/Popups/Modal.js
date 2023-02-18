import React from "react";
import styled from "styled-components";
import iphone from "./assets/iphone.jpg";
import leftArrow from "./assets/leftArrow.svg";
import rightArrow from "./assets/rightArrow.svg";
import closeIcon from "./assets/closeIcon.svg";
import Star from "./assets/Star";
import StarFilled from "./assets/StarFilled";
import StarPartial from "./assets/StarPartial";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  background-color: grey;
`;

const Container = styled.div`
  width: 800px;
  height: 480px;
  border-radius: 8px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  background-color: white;
  box-shadow: 0px 0px 20px black;
`;
const PartOne = styled.div`
  display: flex;
  width: 400px;
  margin: 0px 10px;
`;
const ArrowContainer = styled.div`
  /* border: 1px solid green; */
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Arrow = styled.img`
  /* border: 1px solid red; */
  width: 40px;
`;

const ImageContainer = styled.div`
  border-radius: 8px;
  height: (100% - 20px);
  /* border: 1px solid white; */
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  padding: 30px 20px;
  /* border: 2px solid gainsboro; */
`;
const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const DescConatainer = styled.div`
  margin: 10px 0px;
  padding: 30px 20px;
  width: calc(100% - 480px);
  /* border: 2px solid gainsboro; */
`;
const Author = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  color: grey;
  margin: 0;
`;
const Name = styled.h2`
  font-size: 1.5rem;
`;
const RatingContainer = styled.div`
  display: flex;
  margin: 8px 0px;
`;
const StarIcon = styled.div`
  width: 13px;
  margin: 0px 6px;
`;
const PriceContainer = styled.div``;
const Price = styled.span`
  font-size: 1.4rem;
  font-weight: 600;
  margin: 2px 4px 2px 2px;
`;
const AdditionalInfo = styled.span`
  font-size: 0.8rem;
  font-weight: 500;
`;
const ButtonsCon = styled.div`
  margin-top: 10px;
`;
const Button = styled.div`
  font-size: 0.82rem;
  font-weight: 500;
  text-align: center;
  padding: 7px;
  width: 95%;
  border: 1px solid lightgrey;
  margin: 5px 8px 5px 0px;
  cursor: pointer;
  background-color: #ffc600;
  border-radius: 20px;
  box-shadow: 0px 10px 10px grey;
`;
const AddToCart = styled(Button)`
  border-color: white;
`;
const SeeProDetails = styled(Button)`
  border-radius: 13px;
  background: none;
  box-shadow: 0px 0px 10px grey;
`;
const CloseIconContainer = styled.div`
  width: 80px;
`;
const CloseIcon = styled.img`
  width: 35px;
  padding: 10px;
  border: 2px solid grey;
  margin: 10px 20px;
`;

function Modal(props) {
  // const { children } = props;
  return (
    <Wrapper>
      <Container>
        <PartOne>
          <ArrowContainer>
            <Arrow src={leftArrow} />
          </ArrowContainer>
          <ImageContainer>
            <Image src={iphone} />
          </ImageContainer>
          <ArrowContainer>
            <Arrow src={rightArrow} />
          </ArrowContainer>
        </PartOne>
        <DescConatainer>
          <Author>Bob Miglani & Rehan Yar Khan</Author>
          <Name>
            Make Your Own Luck: How to Increase Your Odds of Success in Sales,
            Startups, Corporate Career and Life
          </Name>
          <RatingContainer>
            <StarIcon><Star/></StarIcon>
            <StarIcon><Star/></StarIcon>
            <StarIcon><Star/></StarIcon>
            <StarIcon><StarPartial/></StarIcon>
            <StarIcon><StarFilled/></StarIcon>
          </RatingContainer>
          <PriceContainer>
            <Price>$156</Price>
            <AdditionalInfo>FREE Delivery on first order</AdditionalInfo>
          </PriceContainer>
          <ButtonsCon>
            <AddToCart>Add to Cart</AddToCart>
            <SeeProDetails>See product details</SeeProDetails>
          </ButtonsCon>
        </DescConatainer>
        <CloseIconContainer>
          <CloseIcon src={closeIcon} />
        </CloseIconContainer>
      </Container>
    </Wrapper>
  );
}

export default Modal;
