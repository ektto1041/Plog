import React from 'react';
import styled from 'styled-components';

import Header from '../Header';
import Body from '../Body';

const Wrapper = styled.div``;

const FramePresentation = ({
  path,
  userList,
  menuList,
  history,
}) => {
  return (
    <Wrapper>
      <Header
        path={path}
        userList={userList}
        menuList={menuList}
        history={history}
      />
      <Body history={history}/>
    </Wrapper>
  );
};

export default FramePresentation;