import React from 'react';
import Button from 'Components/UI/atoms/Button';
import Wrapper from './style';

const HeaderMenus = ({
  openLoginModal,
  openJoinModal,
  user,
  isLoggedIn,
  logout,
  moveWrite,
}) => {
  return (
    <Wrapper>
      {!isLoggedIn ? (
        <>
          <Button className="header-btns" onClick={openLoginModal}>
            로그인
          </Button>
          <Button className="header-btns" onClick={openJoinModal}>
            회원가입
          </Button>
        </>
      ) : (
        <>
          <Button className="header-btns" onClick={moveWrite}>
            글쓰기
          </Button>
          <Button className="header-btns">{user.email}</Button>
          <Button className="header-btns" onClick={logout}>
            로그아웃
          </Button>
        </>
      )}
    </Wrapper>
  );
};

export default HeaderMenus;
