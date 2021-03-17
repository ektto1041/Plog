import React from 'react';
import styled from 'styled-components';

import dim from '../../Resources/Dimensions';
import col from '../../Resources/Colors';

import MenuItem from '../../Components/MenuItem';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: ${dim.headerHeight}px;

  box-shadow: 0 0 10px gray; 
`;

  const MainHeader = styled.div`
    height: ${dim.headerHeight / 2}px;
    background: white;
  `;

    const Title = styled.span`
      height: ${dim.headerHeight / 2}px;

      padding-left: ${dim.headerTitlePadding}px;

      // TEXT
      line-height: ${dim.headerHeight / 2}px;
      user-select: none;
      font-size: ${dim.headerTitleFontSize}em;
      font-weight: bold;

      cursor: pointer;
    `;

  const NavMenu = styled.div`
    display: flex;

    height: ${dim.headerHeight / 2}px;
    
    background-color: ${col.carnivalGlass};
  `;

const HeaderPresentation = () => {
  return (
    <Wrapper>
      <MainHeader>
        <Title>블로그</Title>
      </MainHeader>
      <NavMenu>
        <MenuItem text="Programming"/>
        <MenuItem text="파파퐈"/>
        <MenuItem text="영통구대족장"/>
      </NavMenu>
    </Wrapper>
  );
};

export default HeaderPresentation;