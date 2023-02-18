import React, { Component } from "react";
import styled from "styled-components";
import './Specifications.css'

const Specification = styled.div`
  border: 1px solid rgb(235,235, 235);
`
const Head = styled.h1`
  font-size: 2rem;
  font-size: 24px;
  font-weight: 450;
  line-height: 1.14;
  color: #212121;
  width: 100%;
  border-spacing: 100px;
  padding: 15px;
`;
const List = styled.ul`
  list-style: none;
  border-top: 1px solid rgb(235, 235, 235);
  border-bottom: 1px solid rgb(235, 235, 235);
  padding: 15px;
`
const Info = styled.div`
  margin: 15px;
  cursor: pointer;
  color: green;
`;

class Specifications extends Component {
  render() {
    return (
      <Specification> 
        <Head>Specifications</Head>
        <List className="specificationsUl">
          <li>
            <p>Imprint</p>
            <p>Penguin Books India</p>
          </li>
          <li>
            <p>Publication Year</p>
            <p>January</p>
          </li>
        </List>
        <Info>
          <a href="#">Manufacturing, Packaging and Import Info</a>
        </Info>
      </Specification>
    );
  }
}
export default Specifications;
