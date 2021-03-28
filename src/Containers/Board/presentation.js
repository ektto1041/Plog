import React from 'react';
import styled from 'styled-components';

import BoardItem from '../../Components/BoardItem';
import Button from '../../Components/UI/atoms/Button/button';

import dim from '../../Resources/Dimensions';

const Wrapper = styled.div`
  padding: ${dim.boardPadding}px;
`;

const BoardPresentation = ({
  postList,
}) => {
  return (
    <Wrapper>
      <Button />
      {postList.map(item => (
        <BoardItem
          key={item.POST_ID}
          title={item.TITLE}
          updDate={item.UPD_DATE}
          content={item.CONTENT}
        />
      ))}
    </Wrapper>
  );
};

export default BoardPresentation;