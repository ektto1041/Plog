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
  onClickListener,
}) => {
  const [pageCount, setPageCount] = useState(0);  // 총 페이지의 수
  const [buttonList, setButtonList] = useState([]);
  const [isBeforeButton, setIsBeforeButton] = useState(false);
  const [isAfterButton, setIsAfterButton] = useState(false);

  useEffect(() => {
    const newButtonList = [];
    let newButton = {};

    const makeButton = (num) => {
      newButton = {
        text: num,
        onClick: () => onClickListener(num),
      };

      newButtonList.push(newButton);
    };

    let newPageCount = parseInt(dataCount / viewCount);
    if(viewCount % dataCount !== 0) newPageCount++;

    if(newPageCount > buttonCount) {
      let range = parseInt(buttonCount / 2);

      if(buttonCount % 2 === 0) {
        // buttonCount 짝수
        if(nowPage - range+1 > 1) {
          // beforeButton 보여줌
          setIsBeforeButton(true);

          for(let i=nowPage - range+1; i<nowPage; i++) { makeButton(i); }
        } else {
          for(let i=1; i<nowPage; i++) { makeButton(i); }
        }
      } else {
        // buttonCount 홀수
        if(nowPage - range > 1) {
          // beforeButton 보여줌
          setIsBeforeButton(true);

          for(let i=nowPage - range; i<nowPage; i++) { makeButton(i); }
        } else {
          for(let i=1; i<nowPage; i++) { makeButton(i); }
        }
      }

      // 현재 페이지도 버튼으로 저장
      makeButton(nowPage)

      if(nowPage + range < newPageCount) {
        // afterButton 보여줌
        setIsAfterButton(true);

        for(let i=nowPage + 1; i<=nowPage + range; i++) { makeButton(i); }
      } else {
        for(let i=nowPage + 1; i<=newPageCount; i++) { makeButton(i); }
      }

      setButtonList(newButtonList);
    }
  }, [nowPage, viewCount, dataCount, buttonCount, onClickListener]);

  return (
    <PaginationStyle>
      {isBeforeButton ? (<Button shape="round" radius="15px" style={{ margin: "0 5px" }} >{"<"}</Button>) : null}
      {buttonList.map(item => (
        <Button key={item.text} shape="round" radius="15px" onClick={item.onClick} style={{ margin: "0 5px"}}>{item.text}</Button>
      ))}
      {isAfterButton ? (<Button shape="round" radius="15px" style={{ margin: "0 5px" }} >{">"}</Button>) : null}
    </PaginationStyle>
  );
}

export default Pagination;