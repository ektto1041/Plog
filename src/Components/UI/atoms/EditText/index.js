import React from 'react';
import {EditTextStyle} from './style';

const EditText = (props) => {
  console.log(props);
  return (
    <EditTextStyle {...props} type={props.type === 'password' ? 'password' : 'text'}>{props.children}</EditTextStyle>
  )
}

export default EditText;