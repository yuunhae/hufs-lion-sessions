import {React} from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import RoutesSetting from './utils/Routes';
import Home from './pages/home';

const AppContainer = styled.div`
width: 100%;
height: 100vh;
background-color: #e0f0f5;
display: flex;
justify-content: center;
align-items: center;
`;

function App () { 
  return (
    <AppContainer>
      <RoutesSetting/>
    </AppContainer>
  );
}
export default App;
