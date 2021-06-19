import React from 'react';
import styled from 'styled-components';

import Text from 'Components/UI/atoms/Text';

const Wrapper = styled.div`
  color: #666;

  // date, view
  .postinfo-date,
  .postinfo-view {
    display: inline;
  }

  // 세로 구분선
  .postinfo-vertical-line {
    font-size: 12px;
  }
`;

const PostInfo = ({ date, view }) => {
  return (
    <Wrapper>
      <Text className="postinfo-date" fontSize="12px" color="#666">
        {date}
      </Text>
      <span className="postinfo-vertical-line"> | </span>
      <Text className="postinfo-view" fontSize="12px" color="#666">
        조회 {view}
      </Text>
    </Wrapper>
  );
};

export default PostInfo;
