import React from 'react';
import styled from 'styled-components';
import Button from 'Components/UI/atoms/Button';

const Wrapper = styled.div`
  display: flex;

  // menu
  .menu-item {
    background: none;
  }
`;

const HeaderMenus = ({
  menuItemList,
  history,
}) => {
  return (
    <Wrapper>
      <Button className="menu-item" onClick={() => history.push('/post/1')}>프로그래밍</Button>
    </Wrapper>
  );
}

export default HeaderMenus;
