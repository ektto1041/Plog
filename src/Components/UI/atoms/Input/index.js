import React, { forwardRef } from "react";

import { InputStyle } from "./style";

const Input = forwardRef((props, ref) => {
  return (
    <InputStyle {...props} ref={ref}>
      {props.children}
    </InputStyle>
  );
});

export default Input;
