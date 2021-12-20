import React from 'react'
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";

function HeaderSearchBar() {
    return (
        <SearchBar>
          <SearchIcon />
          <input placeholder="Search or Start a new chat" type="text" />
        </SearchBar>
    )
}

export default HeaderSearchBar

const SearchBar = styled.div`
  display:flex;
  align-items: center;
  background-color: #ffffff;
  width:100%;
  height:35px;
  border-radius:20px;
  .MuiSvgIcon-root{
    color:gray;
    padding:10px;
  }
  input{
    border:none;
    outline-width:0;
    margin-left:10px;
  }
`;