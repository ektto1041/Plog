import React from 'react';
import HashtagInputStyle from './style';

const HashtagInput = (props) => {
  return <HashtagInputStyle {...props}><input type="text" placeholder={props.placeholder || 'ํ๊ทธ์๋ ฅ'} /></HashtagInputStyle>;
};

export default HashtagInput;