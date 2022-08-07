import React, { Component } from "react";
import styled from "styled-components";
import { NavLink, Outlet } from "react-router-dom";
import "./YourItems.css"

const Container = styled.div`
  background-color: white;
  margin: 10px;
  margin-top: 20px;
  padding: 25px;
  height: auto;
`;
const Title = styled.div`
  font-size: 1.7rem;
  font-weight: 500;
  margin-bottom: 15px;
  @media (max-width: 900px) {
    display: none;
  }
`;
const Links = styled.div`
  font-size: .95rem;
  color: #007185;
`

const HR = styled.hr`
  margin-top: 7px;
  padding: 0;
`
const NestedContainer = styled.div`
  margin: 15px 0px;
`
export default class YourItems extends Component {
  render() {
    return (
      <Container>
        <Title>Your Items</Title>
        <Links className="cartLinks">
          <NavLink to={"savedforlater"}>Saved for later (1 item)</NavLink>
          <NavLink to={"buyagain"}>Buy it again</NavLink>
        </Links>
        <HR/>
        <NestedContainer>
        <Outlet/>
        </NestedContainer>
      </Container>
    );
  }
}
