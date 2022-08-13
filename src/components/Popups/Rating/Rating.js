import React from "react";
import styled from "styled-components";
import star from "../assets/star.svg";
import starFilled from "../assets/starFilled.svg";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Container = styled.div`
  border: 1.5px solid #e4e4e4;
  width: 450px;
  height: 450px;
  padding: 20px;
  border-radius: 7px;
`;
const Rate = styled.div`
  display: flex;
  align-items: center;
`;
const Stars = styled.div`
  margin: 0px 10px 0px 0px;
`;
const Star = styled.img`
  height: 20px;
  margin: 2px;
`;
const NumOfStars = styled.div`
  font-family: "calibri";
  font-size: 1.6rem;
  font-weight: 700;
`;
const TotalRatings = styled.div`
  font-family: "calibri";
  font-size: 1.5rem;
  font-weight: 500;
  color: grey;
`;
const StarPercent = styled.div`
  font-family: "calibri";
  font-size: 1.5rem;
  font-weight: 500;
  border-bottom: 1px solid #e4e4e4;
`;
const BarContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 15px 0px;
`;
const NameOfStar = styled.div`
  color: #007185;
  border: 2px solid red;
  margin-right: 15px;
`;
const ShapeOfBar = styled.div`
  position: relative;
  border: 2px solid #ececec;
  background-color: #f5f5f5;
  width: 277px;
  margin-right: 15px;
  border-radius: 12px;
  height: 35px;

`;
const ShapeFill = styled.div`
  position: relative;
  border: 2px solid #ED8A19;
  background-color: #ED8A19;
  width: 277px;
  margin-right: 15px;
  border-radius: 12px;
  height: 35px;

`;
const Percentage = styled.div`
  color: #007185;
`;
const AllReviews = styled.div`
margin: 18px 0px;
  font-size: 1.1rem;
  text-align: center;
  color: #007185;
  font-weight: 500;
  cursor: pointer;
  font-family: "arial";
`;

const Rating = () => {
  return (
    <Wrapper>
      <Container>
        <Rate>
          <Stars>
            <Star src={starFilled} />
            <Star src={starFilled} />
            <Star src={starFilled} />
            <Star src={star} />
            <Star src={star} />
          </Stars>
          <NumOfStars>4.3 out of 5</NumOfStars>
        </Rate>
        <TotalRatings>2,895 global ratings</TotalRatings>
        <StarPercent>
          <BarContainer>
            <NameOfStar>5 star</NameOfStar>
            <ShapeOfBar>
              <ShapeFill></ShapeFill>
            </ShapeOfBar>
            <Percentage>66%</Percentage>
          </BarContainer>
          <BarContainer>
            <NameOfStar>4 star</NameOfStar>
            <ShapeOfBar></ShapeOfBar>
            <Percentage>16%</Percentage>
          </BarContainer>
          <BarContainer>
            <NameOfStar>3 star</NameOfStar>
            <ShapeOfBar></ShapeOfBar>
            <Percentage>7%</Percentage>
          </BarContainer>
          <BarContainer>
            <NameOfStar>2 star</NameOfStar>
            <ShapeOfBar></ShapeOfBar>
            <Percentage>5%</Percentage>
          </BarContainer>
          <BarContainer>
            <NameOfStar>1 star</NameOfStar>
            <ShapeOfBar></ShapeOfBar>
            <Percentage>7%</Percentage>
          </BarContainer>
        </StarPercent>
        <AllReviews>See all customer reviews</AllReviews>
      </Container>
    </Wrapper>
  );
};

export default Rating;
