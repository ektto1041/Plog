import React from 'react';
import styled from 'styled-components';

import dim from '../../Resources/Dimensions';

import SideMenuItem from '../../Components/SideMenuItem';

const Wrapper = styled.div`
  position: fixed;
  top: ${dim.headerHeight + dim.sideMenuMargin}px;
  bottom: ${dim.sideMenuMargin}px;
  left: ${dim.sideMenuMargin}px;
  width: ${dim.sideMenuWidth}px;
  overflow: auto;
  padding-top: ${dim.sideMenuPadding}px;
  background: white;

  border-right: .5px solid gray;
  box-shadow: 0 0 10px gray;
  z-index: -1;
`;

const SideMenuPresentation = ({
  menuList,
}) => {
  return (
    <Wrapper>
      {menuList.map((item, idx) => (
        <SideMenuItem key={idx} text={item}/>
      ))}
    </Wrapper>
  );
};

export default SideMenuPresentation;