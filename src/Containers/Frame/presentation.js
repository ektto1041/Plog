import React from 'react';
import styled from 'styled-components';

import Header from '../Header';
import Body from '../Body';

const Wrapper = styled.div``;

const FramePresentation = ({
  menuList,
  history,
}) => {
  return (
    <Wrapper>
      <Header
        menuList={menuList}
        history={history}
      />
      <Body history={history}/>
    </Wrapper>
  );
};

export default FramePresentation;