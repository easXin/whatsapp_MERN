import React from 'react'
import styled from "styled-components";
function ChatBody() {
    return (
        <BodyWrapper>
            <span>Sonny</span>

            <p>This place reserve for the message windows
                <span>
                    {new Date().toUTCString()}
                </span>
            </p>
        </BodyWrapper>
    )
}

export default ChatBody

const BodyWrapper = styled.div``;