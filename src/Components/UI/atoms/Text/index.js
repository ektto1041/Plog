import React from 'react';
import { TextStyle } from './style';

const Text = (props) => {
  return (
    <TextStyle {...props}>{props.children}</TextStyle>
  );
}

export default Text;
