import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Pagination from 'Components/UI/molecules/Pagination';

const Wrapper = styled.div``;

const BoardTemplate = ({
  path,
  postList,
  nowPage,
  dataCount,
  onClickPagination,
}) => {
  return (
    <Wrapper>
      {postList.map(item => (
        // <BoardItem
        //   key={item.POST_ID}
        //   title={item.TITLE}
        //   updDate={item.UPD_DATE}
        //   content={item.CONTENT}
        // />
        item.TITLE
      ))}
      <Pagination
        nowPage={nowPage}
        viewCount={10}
        buttonCount={5}
        dataCount={dataCount}
        onClickListener={onClickPagination} />
    </Wrapper>
  );
};

BoardTemplate.propTypes = {
  path: PropTypes.object,
  nowPage: PropTypes.number.isRequired,
  postList: PropTypes.array.isRequired,
  dataCount: PropTypes.number.isRequired,
  onClickPagination: PropTypes.func.isRequired,
};

BoardTemplate.defaultProps = {
  nowPage: 1,
  postList: [],
  dataCount: 0,
  onClickPagination: () => {},
};

export default BoardTemplate;
