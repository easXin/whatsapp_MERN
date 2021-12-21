import React, { useState,useEffect } from "react";
import styled from "styled-components";
import MicIcon from "@mui/icons-material/Mic";
import axios from "../../../axios";

function SendMessage() {
  const [newMessage, setNewMessage] = useState("");
  const [timeStamp,setTimeStamp] = useState("");
  useEffect(() => {
    setTimeStamp( new Date().toUTCString())
  }, [newMessage])
  const sendMessage = async (e) => {
    e.preventDefault();
    await axios.post("/messages/new",{
      name: 'Tester_eric',
      message: newMessage,
      //timeStamp: timeStamp || "Just Now",
      timeStamp:"Just now",
      received: true
    })
    setNewMessage("")
  };

  return (
    <MessageWrapper>
      <input placeholder="Type a message" type="text" value={newMessage} 
        onChange={e =>setNewMessage(e.target.value)}/>
      <button type="submit" onClick={sendMessage} />
      <MicIcon />
    </MessageWrapper>
  );
}

export default SendMessage;

const MessageWrapper = styled.form`
  flex: 1;
  display: flex;
  input {
    flex: 1;
    border-radius: 30px;
    padding: 10px;
    border: none;
    outline: 0;
    margin-left: 10px;
  }
  button {
    display: none;
  }
  .MuiSvgIcon-root {
    padding: 10px;
    color: gray;
  }
`;
