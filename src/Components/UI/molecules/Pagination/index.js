import React, { useEffect, useState } from 'react';
import Button from '../../atoms/Button';
import styled from 'styled-components';

const PaginationStyle = styled.div`
  display: flex;
  justify-content: center;
`;

const Pagination = ({
  nowPage,    // 현재 보여주는 페이지
  viewCount,  // 한 페이지에 표시할 아이템의 수
  dataCount,  // 총 아이템의 개수
  buttonCount,  // 한 번에 표시할 Pagination 버튼 개수
}) => {
  const [pageCount, setPageCount] = useState(0);  // 총 페이지의 수

  useEffect(() => {
    let newPageCount = viewCount / dataCount;
    if(viewCount % dataCount !== 0) newPageCount++;

    if(newPageCount > buttonCount) {}
  }, []);

  return (
    <PaginationStyle>
      {nowPage > 3 ? (<Button shape="round" radius="15px" style={{ margin: "0 5px" }} >{"<"}</Button>) : null}
      <Button shape="round" radius="15px" style={{ margin: "0 5px" }} >1</Button>
      <Button shape="round" radius="15px" style={{ margin: "0 5px" }}>2</Button>
      <Button shape="round" radius="15px" style={{ margin: "0 5px" }}>3</Button>
      <Button shape="round" radius="15px" style={{ margin: "0 5px" }}>4</Button>
      <Button shape="round" radius="15px" style={{ margin: "0 5px" }}>5</Button>
    </PaginationStyle>
  );
}

export default Pagination;