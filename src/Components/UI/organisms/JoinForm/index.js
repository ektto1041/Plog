/**
 * 회원가입 폼
 */

import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import { MODAL_TYPE_LOGIN, STATUS_OK } from "utils/const";
import { useInput } from "utils/hooks";
import { emailValidator, passwordValidator } from "utils/func";

import Button from "Components/UI/atoms/Button";
import Input from "Components/UI/atoms/Input";
import Text from "Components/UI/atoms/Text";

import Wrapper from "./style";

const JoinForm = ({ setModalType, closeModal }) => {
  // eamil
  const { value: email, isOk: isEmailOk, onChange: onEmailChange } = useInput(
    null,
    emailValidator
  );
  // name
  const [name, setName] = useState(null);
  // password
  const {
    value: password,
    isOk: isPasswordOk,
    onChange: onPasswordChange,
  } = useInput(null, passwordValidator);
  // passwordChk
  const { value: passwordChk, onChange: onPasswordChkChangeHooks } = useInput(
    null,
    passwordValidator
  );
  const [isPasswordChkOk, setIsPasswordChkOk] = useState(true);
  const emailInput = useRef(null);

  useEffect(() => {
    if (emailInput) emailInput.current.focus();
  }, []);

  const onNameChange = (e) => setName(e.target.value);
  const onPasswordChkChange = (e) => {
    const { value } = e.target;
    onPasswordChkChangeHooks(e);
    if (value && value.length > 0) {
      if (password === value) {
        setIsPasswordChkOk(true);
      } else {
        setIsPasswordChkOk(false);
      }
    } else {
      // 비밀번호 확인란에 아무 입력도 없는 경우
      setIsPasswordChkOk(true);
    }
  };

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
            // todo 가입 실패 케이스별 처리
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

    // isOk 체크
    if (!isEmailOk) {
      alert("올바른 이메일 형식을 입력하세요.");
      return false;
    }
    if (!isPasswordOk) {
      alert("올바른 패스워드 형식을 입력하세요.");
      return false;
    }
    if (!isPasswordChkOk) {
      alert("동일한 비밀번호를 입력하세요.");
      return false;
    }

    return true;
  };

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
          placeholder="이메일"
          value={email}
          onChange={onEmailChange}
          isOk={isEmailOk} // 유효성 검사 통과 여부
          validate // 유효성 검사 필요 여부
          className="joinform-input"
          ref={emailInput}
        />
        <Input
          type="text"
          placeholder="이름"
          value={name}
          onChange={onNameChange}
          className="joinform-input"
        />
        <Input
          type="password"
          placeholder="비밀번호 (최소 8자, 하나의 문자, 숫자 및 특수문자 포함)"
          value={password}
          onChange={onPasswordChange}
          isOk={isPasswordOk}
          validate
          className="joinform-input"
        />
        <Input
          type="password"
          placeholder="비밀번호 확인 (최소 8자, 하나의 문자, 숫자 및 특수문자 포함)"
          value={passwordChk}
          onChange={onPasswordChkChange}
          isOk={isPasswordChkOk}
          validate
          validateMessage={" * 비밀번호가 일치하지 않습니다."}
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
