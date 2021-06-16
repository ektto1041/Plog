/**
 * 회원가입 폼
 */

import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

import { MODAL_TYPE_LOGIN, STATUS_OK } from "utils/const";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Button from "Components/UI/atoms/Button";
import Input from "Components/UI/atoms/Input";
import Text from "Components/UI/atoms/Text";

import Wrapper from "./style";

const JoinForm = ({ setModalType, closeModal }) => {
  const [email, setEmail] = useState(null);
  const [name, setName] = useState(null);
  const [password, setPassword] = useState(null);
  const [passwordChk, setPasswordChk] = useState(null);
  const emailInput = useRef(null);

  useEffect(() => {
    if (emailInput) emailInput.current.focus();
  }, []);

  const onNameChange = (e) => setName(e.target.value);
  const onEmailChange = (e) => setEmail(e.target.value);
  const onPasswordChange = (e) => setPassword(e.target.value);
  const onPasswordChkChange = (e) => setPasswordChk(e.target.value);

  // 회원가입
  const join = async () => {
    try {
      const isPass = validate();
      if (isPass) {
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
      }
    } catch (e) {
      console.log("Error", e);
      alert("서비스에 문제가 발생했습니다. 잠시후에 이용해주세요.");
    }
  };

  const validate = () => {
    /**
     * 1. 빈 값 체크
     * => 공통
     *
     * 2. 이메일 유효성 체크
     * 3. 비밀번호 유효성 체크
     * 4. 비밀번호 일치 여부 체크
     * => Input에서 처리
     */
    const targetList = [
      { field: email, msg: "이메일을 입력해주세요." },
      { field: name, msg: "이름을 입력해주세요." },
      { field: password, msg: "비밀번호를 입력해주세요." },
      { field: passwordChk, msg: "비밀번호(확인)를 입력해주세요." },
    ];

    // 빈 값 체크
    for (let i = 0; i < targetList.length; i++) {
      const target = targetList[i];
      if (target.field === null || target.field.trim().length === 0) {
        alert(target.msg);
        return false;
      }
    }
    return true;
  };

  console.log("$$$ email", email);
  return (
    <Wrapper>
      <div className="joinform-header">
        <Button onClick={closeModal}>
          <FontAwesomeIcon icon={faTimes} />
        </Button>
      </div>
      <div className="joinform-body">
        <Text className="title">회원가입</Text>
        <Input
          type="email"
          name="email"
          placeholder="이메일"
          value={email}
          onChange={onEmailChange}
          className="joinform-input"
          ref={emailInput}
        />
        <Input
          type="text"
          name="name"
          placeholder="이름"
          value={name}
          onChange={onNameChange}
          className="joinform-input"
        />
        <Input
          type="password"
          name="password"
          placeholder="비밀번호"
          value={password}
          onChange={onPasswordChange}
          className="joinform-input"
        />
        <Input
          type="password"
          placeholder="비밀번호 확인"
          value={passwordChk}
          onChange={onPasswordChkChange}
          className="joinform-input"
        />
        <hr />
        <div className="join-btns">
          <Button className="join-btn" onClick={join}>
            확인
          </Button>
          <Button className="join-btn" onClick={closeModal}>
            취소
          </Button>
        </div>
      </div>
    </Wrapper>
  );
};

export default JoinForm;
