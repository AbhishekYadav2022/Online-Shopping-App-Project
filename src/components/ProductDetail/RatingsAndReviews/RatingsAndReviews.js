import React, { Component } from "react";
import styled from "styled-components";
import RatingGraphs from "../RatingGraphs/RatingGraphs";
import photo1 from "../../../images/photo1.jpg";
import photo2 from "../../../images/photo2.jpg";
import photo3 from "../../../images/photo3.jpg";
import photo4 from "../../../images/photo4.jpg";
import photo5 from "../../../images/photo5.jpg";
import iphone from "../../../images/iphone.jpg";
import starIcon from "../../../images/starIcon.png"

const RatingAndReview = styled.div`
  margin-top: 30px;
  border: 1px solid rgb(235, 235, 235);
`;
const Heading = styled.h1`
  font-size: 2rem;
  font-size: 24px;
  font-weight: 450;
  line-height: 1.14;
  color: #212121;
  width: 100%;
  border-spacing: 100px;
  padding: 15px;
`;
const FeedbackPhotos = styled.div`
  margin: 15px;
  display: flex;
  flex-wrap: wrap;
`;
const PhotoDiv = styled.div`
  margin: 2px;
  height: 100px;
  width: 100px;
  background-color: orange;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: 1px solid red; */
`;
const Photo = styled.img`
  height: 100%;
`;
const HorizontalRow = styled.hr``;
const Reviews = styled.div``;
const Container = styled.div``;
const Subject = styled.div`
  margin: 15px;
  display: flex;
`;
const Review = styled.div`
  margin: 15px;
`;
const Rate = styled.span`
  background-color: green;
    color: white;
    font-size: .8rem;
    padding: 0px 4px;
    line-height: 1rem;
    border-radius: 3px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    margin-right: 15px;
`
const StarIcon = styled.img`
    height: 10px;
    margin-left: 3px;
`
const QuestionsAndAnswers = styled.div`
    margin-top: 30px;
    border: 1px solid rgb(235, 235, 235);
`
const Question = styled.div`
    margin: 15px;
`
const Answer = styled.div`
    margin: 15px;
`

export default class RatingsAndReviews extends Component {
  render() {
    return (
      <RatingAndReview>
        <Heading>Ratings & Reviews</Heading>
        <RatingGraphs />
        <FeedbackPhotos>
          <PhotoDiv>
            <Photo src={photo1}></Photo>
          </PhotoDiv>
          <PhotoDiv>
            <Photo src={photo2}></Photo>
          </PhotoDiv>
          <PhotoDiv>
            <Photo src={photo3}></Photo>
          </PhotoDiv>
          <PhotoDiv>
            <Photo src={iphone}></Photo>
          </PhotoDiv>
          <PhotoDiv>
            <Photo src={photo4}></Photo>
          </PhotoDiv>
          <PhotoDiv>
            <Photo src={photo5}></Photo>
          </PhotoDiv>
          <PhotoDiv>
            <Photo src={iphone}></Photo>
          </PhotoDiv>
          <PhotoDiv>
            <Photo src={photo4}></Photo>
          </PhotoDiv>
        </FeedbackPhotos>
        <HorizontalRow />

        {/* Reviews By Customers */}
        <Reviews>
          <Container>
            <Subject>
              <Rate>
                4.5 <StarIcon className="starIcon" src={starIcon}></StarIcon>
              </Rate>
              Highly recommended
            </Subject>
            <Review>
              It's easy to read after reading this continue one month. I'm
              feeling better in covid-19 penedemic situation. I'm understand
              better my own soul and mind desire and confident in all work. I
              recommend every one to read one time in his life. If you satisfied
              my comment please like.
            </Review>
            <HorizontalRow />
          </Container>
          <Container>
            <Subject>
              <Rate>
                4.5 <StarIcon className="starIcon" src={starIcon}></StarIcon>
              </Rate>
              Highly recommended
            </Subject>
            <Review>
              It's easy to read after reading this continue one month. I'm
              feeling better in covid-19 penedemic situation. I'm understand
              better my own soul and mind desire and confident in all work. I
              recommend every one to read one time in his life. If you satisfied
              my comment please like.
            </Review>
            <HorizontalRow />
          </Container>
        </Reviews>

        {/* Questions And Answers */}
        <Heading>Questions and Answers</Heading>
        <QuestionsAndAnswers>
          <Container>
          <Question>Q: is their any content difference between penguin and amazing read publisher ? which is original one ?</Question>
          <Answer>A: see there is nothing call original and fake, they are only different publication houses the difference is the quality of pages</Answer>
          </Container>
        </QuestionsAndAnswers>

      </RatingAndReview>
    );
  }
}
