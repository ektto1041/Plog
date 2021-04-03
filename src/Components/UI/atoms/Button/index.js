import React from 'react';

import { ButtonStyle, RoundButtonStyle } from './style';

const Button = (props) => {
  const { shape } = props;
  if (shape === 'round') {
    // round 전용 스타일 렌더링
    return <RoundButtonStyle {...props}>{props.children}</RoundButtonStyle>;
  } else {
    return <ButtonStyle {...props}>{props.children}</ButtonStyle>;
  }
};

export default Button;
