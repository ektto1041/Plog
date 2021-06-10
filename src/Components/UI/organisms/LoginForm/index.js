/**
 * 로그인 폼
 */

import React from 'react';
import styled from 'styled-components';
import LoginKakaoBtn from 'assets/images/login_kakao.png';

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
    img {
      cursor: pointer;
    }
  }
`;

const LoginForm = () => {
  return (
    <Wrapper>
      <div className="loginform-header">
        <span>닫기</span>
      </div>
      <div className="loginform-body">
        <img src={LoginKakaoBtn} alt="카카오 로그인 버튼" />
      </div>
    </Wrapper>
  );
}

export default LoginForm;