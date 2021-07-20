import React from 'react';
import HashtagInputStyle from './style';

const HashtagInput = (props) => {
  return <HashtagInputStyle {...props}><input type="text" placeholder={props.placeholder || '태그입력'} /></HashtagInputStyle>;
};

export default HashtagInput;