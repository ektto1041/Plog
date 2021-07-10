import React from 'react';
import { SelectStyle } from './style';

const Select = (props) => {
  return (
    <SelectStyle {...props}>
      <input type="search" />
    </SelectStyle>
  );
};

Select.Option = (props) => (
  <div className="select-option-item" value={props.value}>
    {props.children}
  </div>
);

export default Select;
