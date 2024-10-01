//로그인
import axios from 'axios';
import React, { useState } from 'react'
import styled from 'styled-components';

const BASE_URL = process.env.REACT_APP_API_BASE_URL;


const InputContainer = styled.input`
    width: 50%;
    height: 30px;
    margin-bottom: 10px;
    border-radius: 10px;
    border: 1px solid #c09be4;
    
`
const Button = styled.button`
        width: 20%;
        height: 30px;
        background-color: #E4CCFF;
        border: none;
        border-radius: 10px;
        cursor: pointer;
`
function Signin() {
  const [userInfo, setUserInfo] = useState({
    id: '',
    password: '',
  })

  const handleInputChange = (e) => {
    setUserInfo((userInfo) => {
      return {
        ...userInfo,
        [e.target.name]: e.target.value
      }},
    )
  }
  const hangleLogin = async () => {
    try {
      if (userInfo.id && userInfo.password) {
        const response = await axios.post(`${BASE_URL}/api/user/login`, {
          userId: userInfo.id,
          password: userInfo.password
        });

        if (response.status === 200) {
          alert(`로그인 되셨습니다. 사용자 고유 번호[${response.data}]`)
          return response
        }}

    } catch (error) {
      alert('로그인 중 문제가 발생했습니다.')
      console.log('로그인 중 문제가 발생했습니다.')
    }
  }
  return (
    <>
      <h2>로그인</h2>
      <InputContainer
        type='text'
        placeholder='아이디를 입력해주세요'
        value={userInfo.id}
        name='id'
        onChange={handleInputChange}
      >
      </InputContainer>

      <InputContainer
        type='password'
        placeholder='비밀번호를 입력해주세요'
        value={userInfo.password}
        name='password'
        onChange={handleInputChange}>
      </InputContainer>
      <Button onClick={hangleLogin}>로그인</Button>
    </>
  )
}

export default Signin;