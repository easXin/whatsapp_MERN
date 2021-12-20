import React from "react";
import IconButton from "@mui/material/IconButton";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChatIcon from "@mui/icons-material/Chat";
import styled from "styled-components";

function HeaderRightMenu() {
  return (
    <RightMenuContainer>
      <IconButton>
        <DonutLargeIcon />
      </IconButton>
      <IconButton>
        <ChatIcon />
      </IconButton>
      <IconButton>
        <MoreVertIcon />
      </IconButton>
    </RightMenuContainer>
  );
}
const RightMenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 10vw;

  .MuiSvgIcon-root {
    margin-right: 2vw;
    font-size: 24px !important;
  }
`;

export default HeaderRightMenu;
