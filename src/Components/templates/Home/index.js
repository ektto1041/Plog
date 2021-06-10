import React from 'react';
import styled from 'styled-components';

import HomeDesc from 'Components/UI/organisms/HomeDesc';

const Wrapper = styled.div`
// container
display: flex;
align-items: center;
justify-content: center;

// item

// background: #e8eaed;
`;

const Home = () => {
  return (
    <Wrapper className="body">
      <HomeDesc />
    </Wrapper>
  );
};

export default Home;