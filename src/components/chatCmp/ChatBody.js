import React from "react";
import styled from "styled-components";
import Receiver from "./body/Receiver";
import Sender from "./body/Sender";
function ChatBody({ message }) {

  return (
    <BodyWrapper>
      {message.map((msg) =>
      
        msg.received ? (
          <Receiver
            key={msg._id}
            name={msg.name}
            message={msg.message}
            timeStamp={msg.timeStamp}
          />
        ) : (
          <Sender
            key={msg._id}
            name={msg.name}
            message={msg.message}
            timeStamp={msg.timeStamp}
          />
        )
      )}
    </BodyWrapper>
  );
}

export default ChatBody;

const BodyWrapper = styled.div`
  flex: 1;
  background-image: url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png");
  background-repeat: repeat;
  background-position: center;
  padding: 30px;
  overflow: scroll;
`;
