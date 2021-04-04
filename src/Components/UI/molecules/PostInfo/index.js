import React from 'react';
import styled from 'styled-components';

import Text from 'Components/UI/atoms/Text';

const Wrapper = styled.div`
  color: #666;

  // 세로 구분선
  .postinfo-vertical-line {
    font-size: 12px;
  }
`;

const PostInfo = ({ date, view }) => {
  return (
    <Wrapper>
      <Text fontSize="12px" color="#666">
        {date}
      </Text>
      <span className="postinfo-vertical-line"> | </span>
      <Text fontSize="12px" color="#666">
        {view}
      </Text>
    </Wrapper>
  );
};

export default PostInfo;
