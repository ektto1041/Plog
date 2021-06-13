/**
 * 로그인 폼
 */

import React, { useState } from "react";
import styled from "styled-components";
import LoginKakaoBtn from "assets/images/login_kakao.png";
import Button from "Components/UI/atoms/Button";
import axios from "axios";
import { STATUS_OK } from "utils/const";

const Wrapper = styled.div`
  background: #fff;
  width: 500px;
  height: 500px;
  display: flex;
  flex-direction: column;

  .loginform-header {
    height: 50px;
    border-bottom: 1px solid #eaeaea;
    text-align: right;
    padding: 15px;
    box-sizing: border-box;
  }

  .loginform-body {
    .login-kakao-btn {
      background: none;
      padding: 0;
    }
    img {
      cursor: pointer;
    }
  }
`;

const LoginForm = ({ loginWithKakao, setUser, closeModal }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const onEmailChange = (e) => setEmail(e.target.value);
  const onPasswordChange = (e) => setPassword(e.target.value);

  // 로그인
  const login = async () => {
    try {
      const response = await axios.post("/auth/login", {
        email: "apfhd5620@gmail.com",
        password: "admin",
      });

      const { status, data } = response;
      if (status === 200) {
        if (data.status === STATUS_OK) {
          const { user } = data;
          setUser(user);
          closeModal();
        } else {
          alert(data.message);
        }
      }
    } catch (e) {
      console.log("Error", e);
    }
  };

  return (
    <Wrapper>
      <div className="loginform-header">
        <span>닫기</span>
      </div>
      <div className="loginform-body">
        <input
          type="email"
          name="email"
          placeholder="이메일"
          value={email}
          onChange={onEmailChange}
        />
        <input
          type="password"
          name="password"
          placeholder="비밀번호"
          value={password}
          onChange={onPasswordChange}
        />
        <Button onClick={login}>로그인</Button>
        <Button className="login-kakao-btn" onClick={loginWithKakao}>
          <img src={LoginKakaoBtn} alt="카카오 로그인 버튼" />
        </Button>
      </div>
    </Wrapper>
  );
};

export default LoginForm;
