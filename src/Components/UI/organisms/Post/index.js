import React from 'react';

import PostInfo from 'Components/UI/molecules/PostInfo';
import Text from 'Components/UI/atoms/Text';
import Img from 'Components/UI/atoms/Img';
import TestImg from 'Resources/Images/test_image.jpg';
import P from 'Components/UI/atoms/P';
import Wrapper from './style';

const Post = ({ post }) => {
  return (
    <Wrapper>
      <div className="post-img">
        <Img src={TestImg} width="150px" height="150px" />
      </div>
      <div className="post-content">
        <Text className="post-content-title" size="large" color="#666" bold>
          {post.title}
        </Text>
        <P className="post-content-body" color="#666">
          {post.content}
        </P>
        <PostInfo date={post.createdAt} view={post.view} />
      </div>
    </Wrapper>
  );
};

export default Post;
