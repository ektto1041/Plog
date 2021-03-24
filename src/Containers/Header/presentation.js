import React from 'react';
import styled from 'styled-components';

import dim from '../../Resources/Dimensions';
import col from '../../Resources/Colors';

import MenuItem from '../../Components/MenuItem';
import Dropdown from '../../Components/Dropdown';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  
  background: white;

  box-shadow: 0 0 10px gray; 
`;

  const Header = styled.div`
    display: flex;
    align-items: center;
    width: ${dim.displayWidth}px;
    height: ${dim.headerHeight}px;
    margin: 0 auto;
  `;

    const Logo = styled.div`
      width: ${dim.headerLogoWidth}px;
      height: ${dim.headerLogoHeight}px;
      margin-left: ${dim.headerLogoMargin}px;
      margin-right: ${dim.headerLogoMargin}px;
    `;

    const Title = styled.div`
      width: 100%;
      height: ${dim.headerLogoHeight}px;

      line-height: ${dim.headerLogoHeight}px;
      user-select: none;
      font-size: ${dim.headerTitleFontSize}em;
      font-weight: bold;
      text-align: center;

      cursor: pointer;
    `;

  const NavMenu = styled.div`
    display: flex;
    align-items: center;
  `;

    const NavMenuItem = styled.div`
      height: ${dim.headerNavMenuHeight}px;
      margin-right: ${dim.headerNavMenuItemMargin}px;
      padding: 0 ${dim.headerNavMenuItemPadding}px;

      line-height: ${dim.headerNavMenuHeight}px;
      font-size: ${dim.headerNavMenuItemFontSize}em;
      font-weight: bold;
      user-select: none;
      color: ${col.siesta};
      
      border-bottom: ${p => p.id === p.currentMenuId ? `${dim.headerNavMenuItemBorderWidth}px solid ${col.siesta}` : `0px` };
      box-sizing: border-box;

      cursor: pointer;

      transition: .1s all ease;
      &:hover {
        border-bottom: ${dim.headerNavMenuItemBorderWidth}px solid ${col.siesta};
      }
    `;

const HeaderPresentation = ({
  currentMenuId,
  menuList,
}) => {
  return (
    <Wrapper>
      <Header>
        <Logo> <Title>타이틀</Title> </Logo>
        <NavMenu>
          {menuList.map((item) => (
            <NavMenuItem
              key={item.MENU_ID}
              id={item.MENU_ID}
              currentMenuId={currentMenuId}
            >{item.NAME}</NavMenuItem>
          ))}
        </NavMenu>
      </Header>
    </Wrapper>
  );
};

export default HeaderPresentation;