import React, { forwardRef } from "react";
import { useEmailInput } from "./hooks";

import { Wrapper, InputStyle } from "./style";

/**
 * type
 *  - text
 *  - email: onChange 이벤트에 이메일 형식 체크
 *  - password
 *
 * => text, password의 경우 빈값 체크
 */
const Input = forwardRef((props, ref) => {
  const { value, onChange, children } = props;
  const email = useEmailInput(value, onChange, (value) => {
    const emailExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if (!emailExp.test(value)) return false;
    return true;
  });

  return (
    <Wrapper>
      <InputStyle {...props} {...email} ref={ref}>
        {children}
      </InputStyle>
      {!email.isOk && (
        <div className="input-not-valid">
          {" "}
          * 올바른 이메일 형식을 입력하세요.
        </div>
      )}
    </Wrapper>
  );
});

export default Input;
