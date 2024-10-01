//회원가입
import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
const BASE_URL = process.env.REACT_APP_API_BASE_URL;

const InputContainer = styled.input`
    width: 50%;
    height: 30px;
    margin-bottom: 10px;
    border-radius: 10px;
    border: 1px solid #c09be4;
    outline: none;
    
`
const Button = styled.button`
        width: 20%;
        height: 30px;
        background-color: #E4CCFF;
        border: none;
        border-radius: 10px;
        cursor: pointer;
`

function SignUp() {
    const [userInfo, setUserInfo] = useState({
        id: '',
        password: '',
        email: ''
    })

    const handleInputChange = (e) => {
        setUserInfo((userInfo) => {
            return {
                ...userInfo,
                [e.target.name]: e.target.value
            }},
        )
    }

    //api연동
    const handleJoin = async () => {
        try {
            if (userInfo.id && userInfo.password) {// 입력 값이 다 있다면
                const response = await axios.post(`${BASE_URL}/api/user/signup`, {
                    userId: userInfo.id,
                    password: userInfo.password,
                    email: userInfo.email,
                });

                if (response.status === 200) {
                    alert(`${response.data}`)
                    return response
                }

            } else {
                alert('모든 정보를 입력해주세요')
            }
        } catch (error) {
            if (error.response) {
                if (error.response.status === 401) {
                    alert(`${error.response.data}`);
                } else {
                    alert(`회원가입 중 오류가 발생했습니다: ${error.response.data}`);
                }
            } else {
                console.error("회원가입 중 오류 발생:", error);
                alert('회원가입 중 네트워크 문제가 발생했습니다. 관리자에게 문의해주세요');
            }
        }
    };

    const handleSubmitJoin = async () => { //여기서 404, 401에 대한 에러 핸들링 
        try {
            const data = await handleJoin();
            // console.log(data);

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <h2>회원가입</h2>
            <InputContainer
                type='text'
                placeholder='아이디를 입력'
                value={userInfo.id}
                name='id'
                onChange={handleInputChange}
            />

            <InputContainer
                type='password'
                placeholder='비밀번호를 입력'
                onChange={handleInputChange}
                value={userInfo.pw}
                name='password'
            />

            <InputContainer
                placeholder='이메일을 입력해주세요'
                value={userInfo.email}
                name='email'
                onChange={handleInputChange}
            />

            <Button
                disabled={!userInfo}
                onClick={handleSubmitJoin}>회원가입</Button>
        </>
    )
}

export default SignUp;