import React from 'react';
import styled from 'styled-components';
import EditText from '../../Components/UI/atoms/EditText';

const Wrapper = styled.div`
  width: 100%;
`;

const Presentation = () => {
  return (
    <Wrapper>
      <EditText width="1200px" />

    </Wrapper>
  )
}

export default Presentation;