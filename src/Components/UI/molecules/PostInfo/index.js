import React from 'react';
import styled from 'styled-components';

import Text from 'Components/UI/atoms/Text';
import Img from 'Components/UI/atoms/Img';

const Wrapper = styled.div`
  // 세로 구분선
  .postinfo-vertical-line {
    font-size: 12px;
  }
`;

const PostInfo = () => {
  return (
    <Wrapper>
      <Text fontSize="12px">2021.04.03</Text>
      <span className="postinfo-vertical-line"> | </span>
      <Text fontSize="12px">2839</Text>
    </Wrapper>
  );
};

export default PostInfo;
