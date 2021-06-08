import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
background: crimson;
`;

const Board = () => {
  return (
    <Wrapper className="body">
      <div>Board</div>
    </Wrapper>
  );
}

export default Board;