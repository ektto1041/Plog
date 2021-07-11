import React from 'react';

import Button from 'Components/UI/atoms/Button';
import HeaderMenus from 'Components/UI/molecules/HeaderMenus';
import HeaderBtns from 'Components/UI/molecules/HeaderBtns';
import Wrapper from './style';

import { MODAL_TYPE_LOGIN, MODAL_TYPE_JOIN } from 'utils/const';

const Header = ({ history, openModal, menuList, isLoggedIn, user, logout }) => {
  // 로그인 모달 열기
  const openLoginModal = () => {
    openModal(MODAL_TYPE_LOGIN);
  };
  // 로그인 모달 열기
  const openJoinModal = () => {
    openModal(MODAL_TYPE_JOIN);
  };
  // 글쓰기 화면으로 이동
  const moveWrite = () => {
    history.push('/write');
  };

  return (
    <Wrapper>
      <Button className="header-title" onClick={() => history.push('/')}>
        Plog
      </Button>
      <HeaderMenus menuList={menuList} history={history} />
      <HeaderBtns
        openLoginModal={openLoginModal}
        openJoinModal={openJoinModal}
        user={user}
        isLoggedIn={isLoggedIn}
        logout={logout}
        moveWrite={moveWrite}
      />
    </Wrapper>
  );
};

export default Header;
