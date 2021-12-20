import React from 'react'
import styled from "styled-components"

function Chat() {
    return (
        <ChatWrapper>
            I am chat 
        </ChatWrapper>
    )
}

const ChatWrapper = styled.div`
    display:flex;
    flex-direction:column;
    flex:0.65;

    border-style: solid;
    border-color: orange;
`;
export default Chat
