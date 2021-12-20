import React from "react";
import styled from "styled-components";
import Avatar from "@mui/material/Avatar";
import HeaderRightMenu from "./chatCmp/HeaderRightMenu";
import HeaderSearchBar from "./chatCmp/HeaderSearchBar";
import HeaderChatInfo from "./chatCmp/HeaderChatInfo";

function Sidebar() {
  return (
    <SideBarWrapper>
      {/* avatar  + menu */}
      <SideBarHeader>
        <Avatar
          alt="User Profile"
          src="https://avatars.githubusercontent.com/u/32319172?s=40&v=4"
        />
        <HeaderRightMenu/>
      </SideBarHeader>

      {/* search bar */}
      <SideBarSearch>
        <HeaderSearchBar/>
      </SideBarSearch>

      {/* chatting contact list */}
      <SideBarChat>
        <HeaderChatInfo/>
        <HeaderChatInfo/>
        <HeaderChatInfo/>
      </SideBarChat>

    </SideBarWrapper>
  );
}

const SideBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.35;
`;
const SideBarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-right: 1px solid lightgrey;
`;
const SideBarSearch = styled.div`
  display:flex;
  align-items: center;
  background-color: #f6f6f6;
  height:39px;
  padding:10px;
`;
const SideBarChat = styled.div`
  display:flex;
  flex-direction:column;
  flex:1;
  background-color:#ffffff;
  overflow-y:scroll;
  /* &{
    -webkit-scrollbar: width: 12px;
  } */
`;

export default Sidebar;
