import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
width: 100%;
height: 100px;
margin-top: auto;

background: orange;
`;

const Footer = () => {
  return (
    <Wrapper>
      <div>Footer</div>
    </Wrapper>
  );
}

export default Footer;