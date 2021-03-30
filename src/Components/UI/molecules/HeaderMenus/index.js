import React from 'react';
import styled from 'styled-components';
import Button from 'Components/UI/atoms/Button';

const Wrapper = styled.div`
  display: flex;
`;

const HeaderMenus = () => {
  return (
    <Wrapper>
      <Button>프로그래밍</Button>
      <Button>우리는</Button>
    </Wrapper>
  );
}

export default HeaderMenus;
