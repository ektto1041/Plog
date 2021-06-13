import React from "react";

import { InputStyle } from "./style";

const Input = (props) => {
  return <InputStyle {...props}>{props.children}</InputStyle>;
};

export default Input;
