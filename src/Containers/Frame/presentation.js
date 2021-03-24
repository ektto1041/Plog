import React from 'react';
import styled from 'styled-components';

import Header from '../Header';
import Body from '../Body';

const Wrapper = styled.div``;

const FramePresentation = ({
  path,
  menuList,
  history,
}) => {
  return (
    <Wrapper>
      <Header
        path={path}
        menuList={menuList}
        history={history}
      />
      <Body
        path={path}
        history={history}
      />
    </Wrapper>
  );
};

export default FramePresentation;