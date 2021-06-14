/**
 * 로그인 폼
 */

import React, { useState } from "react";
import axios from "axios";

import { STATUS_OK } from "utils/const";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Button from "Components/UI/atoms/Button";
import Input from "Components/UI/atoms/Input";
import Text from "Components/UI/atoms/Text";

import Wrapper from "./style";

const LoginForm = ({ loginWithKakao, setUser, closeModal }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const onEmailChange = (e) => setEmail(e.target.value);
  const onPasswordChange = (e) => setPassword(e.target.value);

  // 로그인
  const login = async () => {
    try {
      const response = await axios.post("/auth/login", {
        email,
        password,
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
      alert("서비스에 문제가 발생했습니다. 잠시후에 이용해주세요.");
    }
  };

  return (
    <Wrapper>
      <div className="loginform-header">
        <Button onClick={closeModal}>
          <FontAwesomeIcon icon={faTimes} />
        </Button>
      </div>
      <div className="loginform-body">
        <Text className="title">로그인</Text>
        <Input
          placeholder="이메일"
          type="email"
          name="email"
          value={email}
          onChange={onEmailChange}
          className="loginform-input"
        />
        <Input
          type="password"
          name="password"
          placeholder="비밀번호"
          value={password}
          onChange={onPasswordChange}
          className="loginform-input"
        />
        <Button className="login-btn" onClick={login}>
          PLOG 로그인
        </Button>
        <hr />
        <div className="sns-login-btns">
          <Button className="login-sns-btn" onClick={loginWithKakao}>
            구글 로그인
          </Button>
          <Button className="login-sns-btn" onClick={loginWithKakao}>
            카카오 로그인
          </Button>
          <Button className="login-sns-btn" onClick={loginWithKakao}>
            네이버 로그인
          </Button>
        </div>
      </div>
    </Wrapper>
  );
};

export default LoginForm;
