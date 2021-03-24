import React from 'react';
import styled from 'styled-components';

import dim from '../../Resources/Dimensions';

const Wrapper = styled.div`
  width: 100%;
`;

const Body = styled.div`
  margin: 0 auto;
  margin-top: ${dim.headerHeight + dim.bodyMargin}px;
  width: ${dim.displayWidth}px;
  
  height: 500px;

  box-shadow: 0 0 10px gray; 

  background: white;
`;

const BodyPresentation = () => {
  return (
    <Wrapper>
      <Body />
    </Wrapper>
  );
};

export default BodyPresentation;