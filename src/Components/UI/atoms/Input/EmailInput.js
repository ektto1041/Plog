import React, { forwardRef } from "react";

import { Wrapper, InputStyle } from "./style";

const Input = forwardRef((props, ref) => {
  const { isOk, children } = props;

  return (
    <Wrapper>
      <InputStyle {...props} ref={ref}>
        {children}
      </InputStyle>
      {!isOk && (
        <div className="input-not-valid">
          {" "}
          * 올바른 이메일 형식을 입력하세요.
        </div>
      )}
    </Wrapper>
  );
});

export default Input;
