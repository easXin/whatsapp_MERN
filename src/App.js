import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import Chat from "./components/Chat";
import Sidebar from "./components/Sidebar";
import Pusher from "pusher-js";
import axios from './axios';

function App() {
  const [message,setMessage] = useState([])

  useEffect(()=>{
    axios.get('/messages/sync')
      .then(res =>{
        setMessage(res.data)
      })
  },[])
  
  useEffect(() => {
    const pusher = new Pusher('da5bff56cd72905c051f', {
      cluster: 'us2'
    });

    const channel = pusher.subscribe('messages');
    
    channel.bind('inserted', (newMessage)=> {
      console.log(newMessage)
      setMessage([...message,newMessage])
    });

    return ()=>{
      channel.unbind_all()
      channel.unsubscribe()
    }
  }, [message])

  return (
    <Wrapper>
      <WrapperBody>
        <Sidebar />
        <Chat message={message}/>
      </WrapperBody>
    </Wrapper>
  );
}

/* Styled component */
const Wrapper = styled.div`
  display:grid;
  place-items:center;
  height:100vh;
  background-color:#dadbd3;
`;
const WrapperBody = styled.div`
  display: flex;
  background-color: #ededed;
  margin-top:-50px;
  height: 90vh;
  width:90vw;
  box-shadow:-1px 4px 20px -6px rgba(0,0,0,0.75)
`;
export default App;
