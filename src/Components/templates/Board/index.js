import React from 'react';
import PropTypes from 'prop-types';

import Pagination from 'Components/UI/molecules/Pagination';
import Post from 'Components/UI/organisms/Post';
import BoardTop from 'Components/UI/organisms/BoardTop';
import Wrapper from './style';

const BoardTemplate = ({ current, setCurrent, postList }) => {
  return (
    <Wrapper>
      <BoardTop />
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
      <Pagination
        total={postList.length}
        showCount={10}
        current={current}
        setCurrent={setCurrent}
      />
    </Wrapper>
  );
};

BoardTemplate.propTypes = {
  postList: PropTypes.array.isRequired,
};

BoardTemplate.defaultProps = {
  postList: [],
};

export default BoardTemplate;
