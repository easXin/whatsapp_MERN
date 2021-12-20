import React from "react";
import styled from "styled-components";

function Sender() {
  return (
    <MessageWrapper>
      <Name>Sonny</Name>
      This place reserve for the message windows
      <TimeStamp>{new Date().toUTCString()}</TimeStamp>
    </MessageWrapper>
  );
}

export default Sender;

const MessageWrapper = styled.div`
  position: relative;
  font-size: 16px;
  padding: 10px;
  width: fit-content;
  border-radius: 10px;
  margin-bottom: 30px;
  background-color: #ffffff;
`;

const TimeStamp = styled.span`
    font-size: xx-small;
    margin-left:10px;
    color:lightgrey;
`; 
const Name = styled.span`
    position: absolute;
    top:-15px;
    font-weight:800;
    font-size:x-small;
`;