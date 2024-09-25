import {React} from 'react'
import {useNavigate} from 'react-router-dom'
import styled from 'styled-components';

const AppContainer = styled.div`
width: 100%;
height: 100vh;
background-color: #e0f0f5;
display: flex;
justify-content: center;
align-items: center;
`;

const GoToContainer  = styled.div`
  width :100%;
  height: 100px;
  background-color: #e0f0f5;
  margin-bottom: 15px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  display: flex;
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
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

const ListContainer = styled.div`
  padding: 0;
  width: 100%;
`;

const Home = () => {
    const navigate = useNavigate();

    const handleClick = () => {
      navigate('/keyword')
    }
  
    const handleClicks = () => {
        navigate('/purchase')
    }
    return (
        <AppContainer>
            <ContentContainer>
                <ListContainer>
                    <GoToContainer onClick={handleClick}>
                        법무부 대표 홈페이지 인기 검색어
                    </GoToContainer>
                    <GoToContainer onClick={handleClicks}>
                        법무부 소속 교정기관에서 수용자 자비로 구매한 물품
                    </GoToContainer>
                </ListContainer>
            </ContentContainer>
        </AppContainer>
    )

}

export default Home