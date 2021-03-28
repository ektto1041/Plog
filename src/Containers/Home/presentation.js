import React from 'react';
import styled from 'styled-components';

import dim from '../../Resources/Dimensions';
import Text from '../../Components/UI/atoms/Text/text';

const Wrapper = styled.div`
  width: ${dim.displayWidth}px;
`;

const HomePresentation = () => {
  return (
    <Wrapper>
      <h1>이 곳은 HOME 입니다.</h1>
      <h2>알맞게 꾸며주세요.</h2>
      <Text background="crimson" className="myclass">hello</Text>
    </Wrapper>
  );
};

export default HomePresentation;