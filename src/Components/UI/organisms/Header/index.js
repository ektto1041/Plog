import React from 'react';
import styled from 'styled-components';

import Button from 'Components/UI/atoms/Button';
import HeaderMenus from 'Components/UI/molecules/HeaderMenus';
import HeaderBtns from 'Components/UI/molecules/HeaderBtns';

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

const Header = ({
  history,
  openModal,
}) => {
  return (
    <Wrapper>
      <Button
        className="header-title"
        onClick={() => history.push('/')}
        style={{ fontSize: '26px' }}
      >
        Plog
      </Button>
      <HeaderMenus
        menuItemList={[]}
        history={history}
      />
      <HeaderBtns openModal={openModal} />
    </Wrapper>
  );
};

export default Header;
