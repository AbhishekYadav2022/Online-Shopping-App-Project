import React, { Component } from "react";
import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";
import "./YourWishlist.css";

const Wrapper = styled.div`
  padding: 17px;
`;
const Container = styled.div`
  border: 1px solid lightgray;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;
const WishlistNav = styled.div`
  display: flex;
  background-color: #f3f3f3;
  margin-left: -1px;
  border-bottom: 1px solid lightgray;
  height: 50px;
`;
const NestedContainer = styled.div`
  min-height: 40vh;
`;

export default class YourWishlist extends Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <WishlistNav>
            <NavLink className="wishlistLink" to={"your-lists"}>
              Your Lists
            </NavLink>
            <NavLink className="wishlistLink" to={"your-idea-lists"}>
              Your Idea Lists
            </NavLink>
            <NavLink className="wishlistLink" to={"your-friends"}>
              Your Friends
            </NavLink>
          </WishlistNav>
          <NestedContainer>
            <Outlet />
          </NestedContainer>
        </Container>
      </Wrapper>
    );
  }
}
