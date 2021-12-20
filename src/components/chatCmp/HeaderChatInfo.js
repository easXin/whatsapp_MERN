import React from 'react'
import styled from "styled-components";
import Avatar from "@mui/material/Avatar";

function HeaderChatInfo() {
    return (
        <ChatWrapper>
          <Avatar/>
          <ChatSession>
              <h2>Username</h2>
              <p>Message xyz for testing</p>
          </ChatSession>
        </ChatWrapper>
    )
}

export default HeaderChatInfo

const ChatWrapper = styled.div`
  display:flex;
  padding:20px;
  border-bottom: 1px solid #f6f6f6;
  cursor: pointer;
  &:hover{
      background-color:#ebebebeb;
  }
`;
const ChatSession = styled.div`
    margin-left:15px;
    h2{
        font-size:16px;
        margin-bottom:8px;
    }
`;