import React, { forwardRef } from "react";

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
  return (
    <Wrapper>
      <InputStyle {...props} ref={ref}>
        {props.children}
      </InputStyle>
    </Wrapper>
  );
});

export default Input;
