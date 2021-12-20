import React from 'react'
import styled from "styled-components"

function Sidebar() {
    return (
        <SideBarWrapper>
            I am sidebar
        </SideBarWrapper>
    )
}

const SideBarWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex:0.35;
    border-style: solid;
    border-color: red;
`;
export default Sidebar
