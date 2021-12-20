import React from 'react'
import styled from "styled-components";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import SendMessage from "./footer/SendMessage";
function ChatFooter() {
    return (
        <FooterWrapper>
            <InsertEmoticonIcon/>
            <SendMessage/>
        </FooterWrapper>
    )
}

export default ChatFooter


const FooterWrapper = styled.div`
    display: flex;
    justify-content:space-between;
    align-items: center;
    height:62px;
    border-top: 1px solid lightgrey;
`;
