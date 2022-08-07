import React, { Component } from "react";
import styled from "styled-components";
import shareIcon from "./assets/share.svg";
import moreIcon from "./assets/threedot2.png";
import listIcon from "./assets/list.svg";
import gridIcon from "./assets/grid.svg";
import "./YourLists.css"

const Wrapper = styled.div`
  display: flex;
`;
const WishLists = styled.div`
  padding: 5px 5px 10px 10px;
`;
const ListName = styled.div`
  font-size: 0.9rem;
  margin: 15px;
  background-color: #eaeaea;
  padding: 10px;
  width: 240px;
`;
const ListItemContainer = styled.div`
  width: 100%;
`;
const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  padding: 5px 5px 5px 10px;
`;
const Title = styled.h3``;
const Actions = styled.div`
  display: flex;
  align-items: center;
`;
const Share = styled.div`
  padding: 0;
  height: fit-content;
  padding-right: 10px;
  display: flex;
  align-items: center;
`;
const ShareText = styled.p`
  font-weight: 600;
  color: #007185;
  font-size: 0.9rem;
`;
const ShareIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 22px;
`;
const ShareIcon = styled.img`
  height: 100%;
`;
const More = styled.div`
  padding: 0;
  height: fit-content;
  padding-left: 10px;
  display: flex;
  align-items: center;
  border-left: 1px solid lightgray;
  height: 24px;
`;
const MoreText = styled.p`
  font-weight: 600;
  color: #007185;
  font-size: 0.9rem;
`;
const MoreIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 22px;
`;
const MoreIcon = styled.img`
  height: 100%;
`;
// Customizing Action Bar
const ActionBar = styled.div`
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
  margin: 5px;
  padding: 2px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const DispalyIcons = styled.div`
  display: flex;
`;
const DisplayIconContainer = styled.div`
  width: 20px;
  margin: 0px 5px;
`;
const ListIconContainer = styled.div`
  width: 15.5px;
  margin: 0px 5px;
`;
const DisplayIcon = styled.img`
  width: 100%;
`;
const SearchAndSort = styled.div`
  display: flex;
`;
const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
`
const Search = styled.input`
  font-size: 0.9rem;
  padding: 2px 10px;
`;
const Sort = styled.p`
  font-size: 0.9rem;
  margin: 15px 20px;
`;

export default class YourLists extends Component {
  render() {
    return (
      <Wrapper>
        <WishLists>
          <ListName>Shopping List</ListName>
        </WishLists>
        <ListItemContainer>
          <Nav>
            <Title>Shopping List</Title>
            <Actions>
              <Share>
                <ShareIconContainer>
                  <ShareIcon src={shareIcon} />
                </ShareIconContainer>
                <ShareText>Send list to others</ShareText>
              </Share>
              <More>
                <MoreIconContainer>
                  <MoreIcon src={moreIcon} />
                </MoreIconContainer>
                <MoreText>Send list to others</MoreText>
              </More>
            </Actions>
          </Nav>
          <ActionBar>
            <DispalyIcons>
              <DisplayIconContainer>
                <DisplayIcon src={gridIcon} />
              </DisplayIconContainer>
              <ListIconContainer>
                <DisplayIcon src={listIcon} />
              </ListIconContainer>
            </DispalyIcons>
            <SearchAndSort>
              <SearchContainer>
                <Search className="listSearch" placeholder="Search this list"/>
              </SearchContainer>
              <Sort>Filter & Sort</Sort>
            </SearchAndSort>
          </ActionBar>
        </ListItemContainer>
      </Wrapper>
    );
  }
}
