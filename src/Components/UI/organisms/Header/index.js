import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import HeaderMenus from 'Components/UI/molecules/HeaderMenus';
import Button from 'Components/UI/atoms/Button';

const Wrapper = styled.div`
  display: flex;
  width: 90%;
  height: 60px;
  margin: auto;
  align-items: center;
  background: #fff;

  // 로고
  .header-logo {
    width: 160px;
    background: transparent;
    font-size: 26px;
  }
`;

const Header = ({
  menuList,
  onMenuClick,
}) => {
  return (
    <Wrapper>
      <Button
        className="header-logo"
        onClick={() => onMenuClick(-1)}
      >
        Plog
      </Button>
      <HeaderMenus
        menuList={menuList}
        onMenuClick={onMenuClick}  
      />
    </Wrapper>
  );
};

Header.propTypes = {
  menuList: PropTypes.array.isRequired,
  onMenuClick: PropTypes.func.isRequired,
};

Header.defaultProps = {
  menuList: [],
  onMenuClick: () => {},
};

export default Header;
