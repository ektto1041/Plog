import React from 'react';
import styled from 'styled-components';

import BoardItem from '../../Components/BoardItem';

import dim from '../../Resources/Dimensions';

const Wrapper = styled.div`
  padding: ${dim.boardPadding}px;
`;

const BoardPresentation = () => {
  return (
    <Wrapper>
      <BoardItem />
      <BoardItem />
    </Wrapper>
  );
};

export default BoardPresentation;