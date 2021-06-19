import React from 'react';
import { PStyle } from './style';

const P = (props) => {
  return <PStyle {...props}>{props.children}</PStyle>;
};

export default P;
