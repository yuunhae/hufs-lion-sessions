import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  @media all and (min-width:1024px) and (max-width:1279px) { 
    background-color: burlywood;
  } 
`;

const Input = styled.input`
  margin: 10px;
  padding: 10px;
  width: 200px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  background-color: blue;
  color: white;
  border: none;
  width: 220px;
  height: 50px;
  border-radius: 10px;
  font-size: 18px;
  font-weight: 700;
  margin: 10px;

  @media all and (min-width:1024px) and (max-width:1279px) { 
    /* 스타일 입력 */
    background-color: saddlebrown;
  } 
`;

function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
      <Container>
        <h2>로그인 페이지</h2>
        <Input
          type="text"
          placeholder="사용자 이름"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* 버튼 만들자리 */}
        <Button onClick={()=>navigate('/')}>홈</Button>
        <Button onClick={()=> navigate('/register')}>회원가입</Button>

      </Container>
    );
    }   

export default Login;
