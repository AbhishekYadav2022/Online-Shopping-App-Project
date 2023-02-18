import React, { Component } from "react";
import styled from "styled-components";

let orders = false;
const Wrapper = styled.div`
  min-height: 50px;
`;
const Msg = styled.p`
margin: 0;
font-size: 0.95rem;
`
const MsgContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 120px;
  `
const Desc = styled.p`
  margin: 0;
  font-size: 0.95rem;
`

export default class Orders extends Component {
  render() {
    if (orders === true) return <div>Orders</div>;
    else
      return (
        <Wrapper>
          <Msg>0 orders placed in past 3 months</Msg>
          <MsgContent>
            <Desc>You have not placed any orders in past 3 months.</Desc>
          </MsgContent>
        </Wrapper>
      );
  }
}
