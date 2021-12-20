import styled from "styled-components";
import Chat from "./components/Chat";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Wrapper>
      <WrapperBody>
        <Sidebar />
        <Chat />
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
