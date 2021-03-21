import React from 'react';
import styled from 'styled-components';

import dim from '../../Resources/Dimensions';
import col from '../../Resources/Colors';

const Wrapper = styled.div`
  width: ${dim.menuItemWidth}px;
  height: ${dim.headerHeight / 2}px;

  background-color: ${col.carnivalGlass};

  line-height: ${dim.headerHeight / 2}px;
  color: white;
  text-align: center;
  user-select: none;
  font-size: 1.1em;

  cursor: pointer;

  transition: all .5s;

  &:hover {
    background-color: white;
    color: ${col.carnivalGlass};
    opacity: .5;
  }
`;

const MenuItem = ({
  text,
  onClick,
}) => {
  return (
    <Wrapper onClick={onClick}>
      {text}
    </Wrapper>
  );
};

export default MenuItem;