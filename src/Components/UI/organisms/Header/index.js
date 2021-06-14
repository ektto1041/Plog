import React from "react";
import styled from "styled-components";

import Button from "Components/UI/atoms/Button";
import HeaderMenus from "Components/UI/molecules/HeaderMenus";
import HeaderBtns from "Components/UI/molecules/HeaderBtns";

import { MODAL_TYPE_LOGIN, MODAL_TYPE_JOIN } from "utils/const";

const Wrapper = styled.div`
  // container
  display: flex;
  align-items: center;
  height: 100px;
  border-bottom: 1px solid #eaeaea;

  // flex-item
  width: 100%;

  // header 제목
  .header-title {
    background: none;
    flex-basis: 8%;
  }
`;

const Header = ({ history, openModal, menuList, isLoggedIn, user, logout }) => {
  // 로그인 모달 열기
  const openLoginModal = () => {
    openModal(MODAL_TYPE_LOGIN);
  };
  // 로그인 모달 열기
  const openJoinModal = () => {
    openModal(MODAL_TYPE_JOIN);
  };

  return (
    <Wrapper>
      <Button
        className="header-title"
        onClick={() => history.push("/")}
        style={{ fontSize: "26px" }}
      >
        Plog
      </Button>
      <HeaderMenus menuList={menuList} history={history} />
      <HeaderBtns
        openLoginModal={openLoginModal}
        openJoinModal={openJoinModal}
        user={user}
        isLoggedIn={isLoggedIn}
        logout={logout}
      />
    </Wrapper>
  );
};

export default Header;
