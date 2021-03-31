import React from 'react';
import styled from 'styled-components';

import BoardItem from '../../Components/BoardItem';
import Pagination from '../../Components/UI/molecules/Pagination';
import Button from '../../Components/UI/atoms/Button';

import dim from '../../Resources/Dimensions';

const Wrapper = styled.div`
  padding: ${dim.boardPadding}px;
`;

const BoardPresentation = ({
  postList,
  nowPage,
  dataCount,
  onClickPagination,
}) => {
  return (
    <Wrapper>
      {postList.map(item => (
        <BoardItem
          key={item.POST_ID}
          title={item.TITLE}
          updDate={item.UPD_DATE}
          content={item.CONTENT}
        />
      ))}
      <Pagination nowPage={nowPage} viewCount={10} buttonCount={5} dataCount={dataCount} onClickListener={onClickPagination} />
      {/* TODO 임시로 넣어둔 버튼 */}
      <Button>글쓰기</Button>
    </Wrapper>
  );
};

export default BoardPresentation;