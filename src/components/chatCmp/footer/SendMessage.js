import React from "react";
import styled from "styled-components";

import MicIcon from "@mui/icons-material/Mic";

function SendMessage() {
  return (
    <MessageWrapper>
      <input placeholder="Type a message" type="text" />
      <button type="submit"> Send a message</button>
      <MicIcon />
    </MessageWrapper>
  );
}

export default SendMessage;

const MessageWrapper = styled.form`
    flex:1;
    display:flex;
    input{
        flex:1;
        border-radius:30px;
        padding:10px;
        border:none;
        margin-left:10px;
    }
    button{
        display:none
    }
    .MuiSvgIcon-root{
        padding:10px;
        color:gray;
    }
`