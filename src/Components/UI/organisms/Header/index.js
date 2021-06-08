import React from 'react';
import styled from 'styled-components';

import HeaderMenus from 'Components/UI/molecules/HeaderMenus';
import Text from 'Components/UI/atoms/Text/text';

const Wrapper = styled.div`
// container
display: flex;
align-items: center;

// item

// normal
background: gray;
`;

const Header = () => {
  return (
    <Wrapper>
      <Text>Plog</Text>
      <HeaderMenus />
    </Wrapper>
  );
};

export default Header;
