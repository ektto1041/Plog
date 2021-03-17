import React from 'react';
import styled from 'styled-components';

import Header from '../Header';
import Body from '../Body';

const Wrapper = styled.div``;

const FramePresentation = () => {
  return (
    <Wrapper>
      <Header />
      <Body />
    </Wrapper>
  );
};

export default FramePresentation;