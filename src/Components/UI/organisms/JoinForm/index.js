/**
 * 회원가입 폼
 */

import React, { useState } from "react";
import axios from "axios";

import { MODAL_TYPE_LOGIN, STATUS_OK } from "utils/const";
import Button from "Components/UI/atoms/Button";
import Wrapper from "./style";

const JoinForm = ({ setModalType }) => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [passwordChk, setPasswordChk] = useState(null);

  const onNameChange = (e) => setName(e.target.value);
  const onEmailChange = (e) => setEmail(e.target.value);
  const onPasswordChange = (e) => setPassword(e.target.value);
  const onPasswordChkChange = (e) => setPasswordChk(e.target.value);

  // 회원가입
  const join = async () => {
    try {
      const response = await axios.post("/auth/join", {
        name,
        email,
        password,
      });

      const { status, data } = response;
      if (status === 200) {
        if (data.status === STATUS_OK) {
          alert("회원 가입이 완료되었습니다. 로그인 화면으로 이동합니다.");
          setModalType(MODAL_TYPE_LOGIN);
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
      <div className="joinform-header">
        <span>닫기</span>
      </div>
      <div className="joinform-body">
        <input
          type="text"
          name="name"
          placeholder="이름"
          value={name}
          onChange={onNameChange}
        />
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
        <input
          type="password"
          placeholder="비밀번호 확인"
          value={passwordChk}
          onChange={onPasswordChkChange}
        />

        <Button onClick={join}>확인</Button>
        <Button onClick={(e) => e.preventDefault()}>취소</Button>
      </div>
    </Wrapper>
  );
};

export default JoinForm;
