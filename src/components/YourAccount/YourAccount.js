import React, { Component } from "react";
import styled from "styled-components";
import "./YourAccount.css";
import { cardContent } from "./AccountSeed";
import { allLinksCardContent } from "./AccountSeed";

const ContentWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  width: 1000px;
  /* border: 2px solid blue; */
`;
const Title = styled.h3`
  margin: 10px;
`;
const CardsContainer = styled.div`
  display: flex;
  /* justify-content: space-evenly; */
  flex-wrap: wrap;
`;
const Card = styled.div`
  display: flex;
  border: 0.5px solid #bcbcbc;
  border-radius: 8px;
  padding: 10px;
  margin: 5px;
  width: 320px;
  cursor: pointer;
`;
const IconContainer = styled.div`
  width: 70px;
`;
const Icon = styled.img`
  width: 100%;
  height: auto;
`;
const Sub = styled.div``;
const Name = styled.h5`
  font-size: 1.1rem;
  padding: 5px;
  margin: 0;
`;
const Desc = styled.p`
  color: grey;
  font-weight: 400;
  font-size: 0.9rem;
  padding: 5px;
  margin: 0;
`;

const Hr = styled.hr`
  margin: 35px 5px;
`;
const LinkCardContainer = styled(CardsContainer)``;
const AllLinksCard = styled(Card)`
  display: block;
  cursor: default;
`;
const AllLinksTitle = styled(Name)`
  font-weight: 600;
`;
const AllLinks = styled.div``;
const Links = styled(Desc)`
  color: #007185;
  cursor: pointer;
`;
export default class YourAccount extends Component {
  render() {
    // Destructuring Important Links
    const ImpLinksList = cardContent.map((CardLink) => (
      <Card className="accountCard">
        <IconContainer>
          <Icon src={CardLink.icon} />
        </IconContainer>
        <Sub>
          <Name>{CardLink.name}</Name>
          <Desc>{CardLink.desc}</Desc>
        </Sub>
      </Card>

    ));

    // Destructuring AllLinks
    const AllLinksList = allLinksCardContent.map(xyz => (
      <AllLinksCard>
        <AllLinksTitle>
          {xyz.title}
        </AllLinksTitle>
        <AllLinks>
          <Links>{xyz.AllLinks}</Links>
        </AllLinks>
      </AllLinksCard>
    ))

    return (
      <ContentWrapper>
        <Container>
          <Title>Your Account</Title>
          <CardsContainer>{ImpLinksList}</CardsContainer>
          <Hr />
          {/* <LinkCardContainer>{AllLinksCardItemList}</LinkCardContainer> */}
          <LinkCardContainer>{AllLinksList}</LinkCardContainer>
        </Container>
      </ContentWrapper>
    );
  }
}
