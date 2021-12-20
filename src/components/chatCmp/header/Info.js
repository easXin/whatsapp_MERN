import React from 'react'
import styled from "styled-components";
function Info() {
    return (
        <ChatInfoWrapper>
            <h3>Eric</h3>
            <p>{new Date().toUTCString()}</p>
        </ChatInfoWrapper>
    )
}

export default Info

const ChatInfoWrapper = styled.div`
    padding-left:20px;
    // put the element out as far as possible
    flex:1;
`;
