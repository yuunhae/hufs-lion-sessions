import Signin from "./component/signin/signin";
import SignUp from "./component/signup/signup";
import styled from 'styled-components'


const MainContainer = styled.div`
  margin: 0;
  padding: 0;
  background-color: #E4CCFF;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const ContentContainer = styled.div`
  width: 100%;
  max-width: 480px;
  padding: 20px;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

function App() {
  return (
    <MainContainer>
      <ContentContainer>
        <SignUp/>
        <br />
        <Signin/>
      </ContentContainer>
    </MainContainer>
  );
}
export default App;
