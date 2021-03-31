import React from 'react';
import styled from 'styled-components';

import Header from 'Components/UI/organisms/Header';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 90%;
  background: gold;
`;

const Frame = () => {
  return (
    <Wrapper>
      <Header />
    </Wrapper>
  );
};

export default Frame;
