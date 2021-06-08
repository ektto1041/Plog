import React from 'react';
import styled from 'styled-components';

import Button from 'Components/UI/atoms/Button';

const Wrapper = styled.div`
background: skyblue;
`;

const Home = () => {
  return (
    <Wrapper className="body">
      <h1>이 곳은 HOME 입니다.</h1>
      <h2>알맞게 꾸며주세요.</h2>
      <Button shape="round" radius={10}>hello</Button>
    </Wrapper>
  );
};

export default Home;