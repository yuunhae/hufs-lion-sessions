import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Link, useNavigate } from 'react-router-dom'; // useNavigate import 추가
import Counter from '../Components/counter';
import Timer from '../Components/Timer';
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  /* 노트북 & 테블릿 가로 (해상도 1024px ~ 1279px)*/ 
  @media all and (min-width:1024px) and (max-width:1279px) { 
    /* 스타일 입력 */
    background-color: pink;
  } 

  /* 테블릿 가로 (해상도 769px ~ 1023px)*/ 
  @media all and (min-width:769px) and (max-width:1023px) { 
    /* 스타일 입력 */
    background-color: green;
  } 

  /* 모바일 가로 & 테블릿 세로 (해상도 481px ~ 768px)*/ 
  @media all and (min-width:481px) and (max-width:768px) {
    /* 스타일 입력 */
    background-color: blue;
  } 

  /* 모바일 세로 (해상도 ~ 480px)*/ 
  @media all and (max-width:480px) {
    /* 스타일 입력 */
    background-color: yellow;
  }
`
const Header = styled.div`
  display: flex;
  background: black;
  width: 100%;
  color: orange;
  padding-left: 20px;
  font-size: 1.17em;
`;

const Contents = styled.div`
color: green;
font-size: 20px;
`
const TimerContainer = styled.div`
  padding: 20px;
`
const TimerButton = styled.button`
background-color: orange;
color: black;
border: none;
width: 200px;
height: 50px;
border-radius: 10px;
font-size: 18px;
font-weight: 700;
`
const Alert = styled.p`
  font-size: 40px;
  font-weight: bold;
  color: red;
  display: none;
  @media only screen and (max-width: 350px) {
    display: flex;
  }
`
const BlockButton = styled.button`
  background-color: orange;
  color: black;
  border: none;
  width: 150px;
  height: 50px;
  border-radius: 10px;
  font-size: 18px;
  font-weight: 700;
  margin: 10px;
`;


function Home() {
  const navigate = useNavigate();

  let post = "한국외대 글로벌 멋사 후기";
  let title = "게시글 제목"

  //useState 선언, 초기값 false로 설정해 안보이게 하기
  const [showTimer, setShowTimer] = useState(false);
  
  //버튼으로 타이머 글자 제어하도록 코드 작성

  return (
    <Container>
      <Header> 
        <h3>멋쟁이사자처럼</h3>
      </Header>
      <h4 id={title}>{post}</h4>
      <Contents>본문입니다.</Contents>
      <Counter></Counter>
      <TimerContainer>
        {showTimer && <Timer></Timer>}
        <TimerButton onClick={() => setShowTimer(!showTimer)}>타이머 열기 / 닫기</TimerButton>
      </TimerContainer>

      <BlockButton onClick={()=>navigate('/login')}>로그인</BlockButton>
      <BlockButton onClick={()=> navigate('/register')}>회원가입</BlockButton>
      
      <Alert>그만줄여요!</Alert>
 
      

    </Container>
  );
}

export default Home;