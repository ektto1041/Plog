import React from 'react';
import styled from 'styled-components';
import Button from 'Components/UI/atoms/Button';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  // flex-item
  flex-basis: 12%;

  .header-btns {
    background: none;
    border: 1px solid lightgray;
    border-radius: 10%;
    margin: 0 5px;

    &:hover {
      background: gold;
      color: #fff;
      border-color: #fff;
    }
  }
`;

const HeaderMenus = ({
  openLoginModal,
  openJoinModal,
}) => {
  return (
    <Wrapper>
      <Button
        className="header-btns"
        onClick={openLoginModal}
      >
        로그인
      </Button>
      <Button
        className="header-btns"
        onClick={openJoinModal}
      >
        회원가입
      </Button>
    </Wrapper>
  );
}

export default HeaderMenus;
