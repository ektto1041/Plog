import React from 'react';
import styled from 'styled-components';

import HeaderMenus from 'Components/UI/molecules/HeaderMenus';
import Button from 'Components/UI/atoms/Button';

const Wrapper = styled.div`
// container
display: flex;
align-items: center;

// item
width: 100%;

// header 제목
.header-title {
  background: none;
}
`;

const Header = ({
  history,
}) => {
  return (
    <Wrapper>
      <Button
        className="header-title"
        onClick={() => history.push('/')}
      >
        Plog
      </Button>
      <HeaderMenus
        menuItemList={[]}
        history={history}
      />
    </Wrapper>
  );
};

export default Header;
