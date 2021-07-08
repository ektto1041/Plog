import React from 'react';
import PropTypes from 'prop-types';

import Pagination from 'Components/UI/molecules/Pagination';
import Post from 'Components/UI/organisms/Post';
import Wrapper from './style';

const BoardTemplate = ({ postList, nowPage, dataCount, onClickPagination }) => {
  return (
    <Wrapper>
      {postList.map((post) => (
        <Post post={post} />
      ))}
      <Pagination
        nowPage={nowPage}
        viewCount={5}
        buttonCount={5}
        dataCount={dataCount}
        onClickListener={onClickPagination}
      />
    </Wrapper>
  );
};

BoardTemplate.propTypes = {
  path: PropTypes.object,
  postList: PropTypes.array.isRequired,
  nowPage: PropTypes.number.isRequired,
  dataCount: PropTypes.number.isRequired,
  onClickPagination: PropTypes.func.isRequired,
};

BoardTemplate.defaultProps = {
  nowPage: 1,
  postList: [],
  nowPage: 1,
  dataCount: 0,
  onClickPagination: () => {},
};

export default BoardTemplate;
