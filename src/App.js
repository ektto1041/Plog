import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 110px;
  background-color: red;

  cursor: pointer;
`;

const App = () => {
  return (
    <div>
      <Container>
        하하
      </Container>
    </div>
  );
};

export default App;