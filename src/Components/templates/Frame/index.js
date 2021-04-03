import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Header from 'Components/UI/organisms/Header';
import Body from 'Components/pages/Body';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Frame = ({
  menuList,
  path,
  onMenuClick,
}) => {
  return (
    <Wrapper>
      <Header
        menuList={menuList}
        onMenuClick={onMenuClick}  
      />
      <Body path={path} />
    </Wrapper>
  );
};

Frame.propTypes = {
  menuList: PropTypes.array.isRequired,
  onMenuClick: PropTypes.func.isRequired,
};

Frame.defaultTypes = {
  menuList: [],
  onMenuClick: () => {},
};

export default Frame;
