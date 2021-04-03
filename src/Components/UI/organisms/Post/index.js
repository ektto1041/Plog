import React from 'react';
import styled from 'styled-components';

import PostInfo from 'Components/UI/molecules/PostInfo';
import Text from 'Components/UI/atoms/Text';
import Img from 'Components/UI/atoms/Img';
import TestImg from 'Resources/Images/test_image.jpg';
import P from 'Components/UI/atoms/P';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;

  .post-img {
  }

  .post-content {
    margin-left: 20px;
  }
`;

const Post = () => {
  return (
    <Wrapper>
      <div className="post-img">
        <Img src={TestImg} width="100px" height="100px" />
      </div>
      <div className="post-content">
        <Text fontSize="26px">title</Text>
        <P color="#666">content</P>
        <PostInfo />
      </div>
    </Wrapper>
  );
};

export default Post;
