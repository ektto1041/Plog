/**
 * 로그인 폼
 */

import React from 'react';
import styled from 'styled-components';
import LoginKakaoBtn from 'assets/images/login_kakao.png';
import Button from 'Components/UI/atoms/Button';

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

const LoginForm = ({ loginWithKakao }) => {
  return (
    <Wrapper>
      <div className="loginform-header">
        <span>닫기</span>
      </div>
      <div className="loginform-body">
        <Button
          className="login-kakao-btn"
          onClick={loginWithKakao}
        >
          <img src={LoginKakaoBtn} alt="카카오 로그인 버튼" />
        </Button>
      </div>
    </Wrapper>
  );
}

export default LoginForm;