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

  // 글 썸네일
  .post-img {
  }

  // 글 제목과 요약된 내용
  .post-content {
    margin-left: 20px;
    height: 120px;
  }

  // 글 요약된 내용
  .post-content-body {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* 라인수 */
    -webkit-box-orient: vertical;
    word-wrap: break-word;
  }
`;

const Post = ({ post }) => {
  console.log(post);
  return (
    <Wrapper>
      <div className="post-img">
        <Img src={TestImg} width="120px" height="120px" />
      </div>
      <div className="post-content">
        <Text fontSize="26px">{post.TITLE}</Text>
        <P className="post-content-body" color="#666">
          {post.CONTENT}
        </P>
        <PostInfo date={post.REG_DATE} view={post.view || 1000} />
      </div>
    </Wrapper>
  );
};

export default Post;
