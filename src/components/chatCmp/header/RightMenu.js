import React from "react";
import IconButton from "@mui/material/IconButton";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SearchIcon from "@mui/icons-material/Search";
import ChatIcon from "@mui/icons-material/Chat";
import styled from "styled-components";

function RightMenu() {
  return (
    <div>
      <IconButton>
        <SearchIcon />
      </IconButton>
      <IconButton>
        <AttachFileIcon />
      </IconButton>
      <IconButton>
        <MoreVertIcon />
      </IconButton>
    </div>
  );
}

export default RightMenu;
