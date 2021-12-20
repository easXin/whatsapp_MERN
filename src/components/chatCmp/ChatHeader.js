import { Avatar } from '@mui/material';
import React from 'react'
import styled from "styled-components";
import Info from './header/Info';
import RightMenu from './header/RightMenu';

function ChatHeader() {
    return (
        <HeaderWrapper>
            <Avatar/>
            <Info/>
            <RightMenu/>
        </HeaderWrapper>
    )
}

export default ChatHeader

const HeaderWrapper = styled.div`
    padding:20px;
    display:flex;
    align-items:center;
    border-bottom:1px solid lightgrey;
`;
