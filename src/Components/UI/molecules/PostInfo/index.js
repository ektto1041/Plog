import React from 'react';
import styled from 'styled-components';

import Text from 'Components/UI/atoms/Text';
import Img from 'Components/UI/atoms/Img';

const Wrapper = styled.div``;

const PostInfo = () => {
  return (
    <Wrapper>
      <Text>2021.04.03</Text> | <Text>2839</Text>
    </Wrapper>
  );
};

export default PostInfo;
