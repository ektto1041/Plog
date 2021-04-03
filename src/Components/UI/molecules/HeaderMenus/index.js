import React from 'react';
import styled from 'styled-components';

import Button from 'Components/UI/atoms/Button';

const Wrapper = styled.div`
  display: flex;

  // 메뉴 버튼
  .header-menu {
    background: transparent;
    color: ${(props) => props.theme.basic.color.main};
    font-size: 16px;
  }
`;

const HeaderMenus = ({ menuList, onMenuClick }) => {
  return (
    <Wrapper>
      {menuList.map((menu) => (
        <Button
          className="header-menu"
          key={menu.MENU_ID}
          onClick={() => onMenuClick(menu.MENU_ID)}
        >
          {menu.NAME}
        </Button>
      ))}
    </Wrapper>
  );
};

export default HeaderMenus;
