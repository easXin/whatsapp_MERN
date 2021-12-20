import React from 'react'
import styled from "styled-components"
import ChatHeader from './chatCmp/ChatHeader';
import ChatBody from './chatCmp/ChatBody';
import ChatFooter from './chatCmp/ChatFooter';


function Chat() {
    return (
        <ChatWrapper>
            <ChatHeader/>
            <ChatBody/>
            <ChatFooter/>
        </ChatWrapper>
    )
}

const ChatWrapper = styled.div`
    display:flex;
    flex-direction:column;
    flex:0.65;
`;

export default Chat
