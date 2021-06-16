import React, { forwardRef } from "react";
import EmailInput from "./EmailInput";
import TextInput from "./TextInput";

/**
 * type
 *  - text
 *  - email: onChange 이벤트에 이메일 형식 체크
 *  - password
 *
 * => text, password의 경우 빈값 체크
 */
const Input = forwardRef((props, ref) => {
  const { type } = props;
  switch (type) {
    case "email":
      return <EmailInput {...props} ref={ref} />;
    default:
      return <TextInput {...props} />;
  }
});

export default Input;
