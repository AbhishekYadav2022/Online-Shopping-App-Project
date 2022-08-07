import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import "./YourWishlist.css"

const Wrapper = styled.div`
  padding: 17px;
`
const Container = styled.div`
 border: 1px solid lightgray;
`
const WishlistNav = styled.div`
  display: flex;
  background-color:#f3f3f3;
`


export default class YourWishlist extends Component {
  render() {
    return (
      <Wrapper>
          <Container>
            <WishlistNav>
                <NavLink className="wishlistLink" to={"your-lists"}>Your Lists</NavLink>
                <NavLink className="wishlistLink" to={"your-idea-lists"}>Your Idea Lists</NavLink>
                <NavLink className="wishlistLink" to={"your-friends"}>Your Friends</NavLink>
            </WishlistNav>
          </Container>
      </Wrapper>
    )
  }
}
