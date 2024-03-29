import React from "react";
import styled from "styled-components";
import shareIcon from "./assets/share.svg";
import moreIcon from "./assets/threedot2.png";
import listIcon from "./assets/list.svg";
import gridIcon from "./assets/grid.svg";
import YourListItems from "./YourListItems/YourListItems";
import { useSearchParams } from "react-router-dom";
import YourListItems_DisplayList from "./YourListItems_DisplayList/YourListItems_DisplayList";

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
const DisplayListIconContainer = styled.div`
  width: 24.5px;
  margin: 0px 5px;
  padding: 0px 2px 5px 2px;
  width: 19.5px;
  margin: 0px 5px;
`;
const DisplayGridIconContainer = styled.div`
  width: 24.5px;
  margin: 0px 5px;
  padding: 0px 2px 5px 2px;
`;
const DisplayListIcon = styled.img`
  width: 100%;
`;
const DisplayGridIcon = styled.img`
  width: 100%;
`;
const SearchAndSort = styled.div`
  display: flex;
`;
const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
`;
const Search = styled.input`
  font-size: 0.9rem;
  padding: 2px 10px;
  &:focus {
    width: 240px;
  }
`;
const Sort = styled.p`
  font-size: 0.9rem;
  margin: 15px 20px;
`;
const ListConentWrapper = styled.div`
  margin: 0px 5px 5px 5px;
`;

const YourLists = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const showListView = searchParams.get("filter") === "list";
  let borderColor = showListView ? "#c7511f" : "white";
  borderColor = !showListView ? "white" : "#c7511f";
  const myStyle = {
    borderBottom: "2px solid red",
  }
  
  console.log(borderColor)
  console.log(myStyle)
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
              <MoreText>More</MoreText>
            </More>
          </Actions>
        </Nav>
        <ActionBar>
          <DispalyIcons>
            <DisplayGridIconContainer style={myStyle}>
              <DisplayGridIcon
                onClick={() => setSearchParams({})}
                src={gridIcon}
              />
            </DisplayGridIconContainer>
            <DisplayListIconContainer style={myStyle}>
              <DisplayListIcon
                onClick={() => setSearchParams({ filter: "list" })}
                src={listIcon}
              />
            </DisplayListIconContainer>
          </DispalyIcons>
          <SearchAndSort>
            <SearchContainer>
              <Search className="listSearch" placeholder="Search this list" />
            </SearchContainer>
            <Sort>Filter & Sort</Sort>
          </SearchAndSort>
        </ActionBar>
        <ListConentWrapper>
          {showListView ? <YourListItems_DisplayList /> : <YourListItems />}
        </ListConentWrapper>
      </ListItemContainer>
    </Wrapper>
  );
};
export default YourLists;
