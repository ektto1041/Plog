import React from 'react';
import styled from 'styled-components';

import dim from '../../Resources/Dimensions';
import Button from '../../Components/UI/atoms/Button';

const Wrapper = styled.div`
  width: ${dim.displayWidth}px;
`;

const HomePresentation = () => {
  return (
    <Wrapper>
      <h1>이 곳은 HOME 입니다.</h1>
      <h2>알맞게 꾸며주세요.</h2>
      <Button style={{ width: '100px' }} className="myclass">hello</Button>
    </Wrapper>
  );
};

export default HomePresentation;