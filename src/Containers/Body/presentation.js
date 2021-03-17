import React from 'react';
import styled from 'styled-components';

import dim from '../../Resources/Dimensions';

import SideMenu from '../SideMenu';
import Content from '../Content';

const Wrapper = styled.div`
  display: flex;
  width: 100%;

  margin-top: ${dim.headerHeight + dim.sideMenuMargin}px;
  margin-bottom: ${dim.sideMenuMargin}px;
`;

  const Blank = styled.div`
    width: ${dim.sideMenuWidth + dim.sideMenuMargin}px;
    min-width: ${dim.sideMenuWidth + dim.sideMenuMargin}px;
  `;

const BodyPresentation = () => {
  return (
    <Wrapper>
      <SideMenu />
      <Blank />
      <Content />
    </Wrapper>
  );
};

export default BodyPresentation;