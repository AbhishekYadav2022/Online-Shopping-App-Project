import React, { Component } from "react";
import styled from "styled-components";
import { NavLink, Outlet } from "react-router-dom";
import "./YourOrders.css";

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Container = styled.div`
  width: 950px;
  padding: 10px;
`;
const Location = styled.div`
  color: #007185;
  font-size: 0.95rem;
`;
const SubNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Title = styled.h3`
  font-weight: 400;
`;
const SearchBar = styled.div`
  display: flex;
  margin: 20px 0px;
`;
const SearchBox = styled.input`
  margin: 0px 10px;
  width: 320px;
  padding-left: 5px;
`;
const SearchButton = styled.div`
  border-radius: 15px;
  background-color: #323232;
  color: white;
  font-size: 0.9rem;
  font-weight: 700;
  padding: 5px 10px;
  cursor: pointer;
`;
const LinksContainer = styled.div`
  display: flex;
`;
const Hr = styled.hr`
  margin: 0;
  opacity: 0.2;
  margin-bottom: 20px;
`;
const RenderedChild = styled.div`
  margin: 5px 0px 30px 0px;
`;

export default class YourOrders extends Component {
  render() {
    return (
      <ContentWrapper>
        <Container>
          <Location>Your Account |</Location>
          <SubNav>
            <Title>Your Orders</Title>
            <SearchBar>
              <SearchBox placeholder="Search all orders"></SearchBox>
              <SearchButton>Search Orders</SearchButton>
            </SearchBar>
          </SubNav>
          <LinksContainer>
            <NavLink className="links" to={"ordered-items"}>
              Orders
            </NavLink>
            <NavLink className="links" to={"buyagain"}>
              Buy Again
            </NavLink>
            <NavLink className="links" to={"not-yet-shipped"}>
              Not Yet Shipped
            </NavLink>
            <NavLink className="links" to={"cancelled-orders"}>
              Cancelled Orders
            </NavLink>
          </LinksContainer>
          <Hr />
          <RenderedChild>
            <Outlet />
          </RenderedChild>
        </Container>
      </ContentWrapper>
    );
  }
}
