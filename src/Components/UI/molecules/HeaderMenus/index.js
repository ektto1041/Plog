import React from "react";
import styled from "styled-components";
import Button from "Components/UI/atoms/Button";

const Wrapper = styled.div`
  display: flex;
  margin-left: 20px;

  // flex-item
  flex-basis: 80%;

  // menu
  .menu-item {
    background: none;
    color: ${(props) => props.theme.basic.color.black};
  }
`;

const HeaderMenus = ({ menuList, history }) => {
  return (
    <Wrapper>
      {menuList.map((menu, i) => (
        <Button
          className="menu-item"
          key={`${menu.name}${i}`}
          onClick={() => history.push(`/post/${menu.menu_id}`)}
        >
          {menu.name}
        </Button>
      ))}
    </Wrapper>
  );
};

export default HeaderMenus;
