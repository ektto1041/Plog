import React, { useEffect, useState } from 'react';
import Button from 'Components/UI/atoms/Button';
import Wrapper from './style';

const Pagination = ({
  total = 50, // 총 아이템 개수
  showCount = 10, // 한 페이지에 보여줄 아이템 개수
}) => {
  const [totalPage, setTotalPage] = useState(1); // 총 페이지 수
  const [buttonList, setButtonList] = useState([]); // 버튼 리스트
  const [current, setCurrent] = useState(1); // 현재 페이지

  useEffect(() => {
    // 총 페이지 수 계산
    let totalPage = Math.ceil(total / 10);
    setTotalPage(totalPage);
  }, [total]);

  useEffect(() => {
    // 버튼 만들기
    makeButton();
  }, [current, totalPage]);

  // 버튼 만들기
  const makeButton = () => {
    const buttonList = [];

    // 1. 총 페이지 수가 5 이하면 첫/마지막 페이지 및 ... 버튼 필요 없다
    const totalPage = Math.ceil(total / showCount);
    if (totalPage <= 5) {
      for (let i = 0; i < totalPage; i++) {
        buttonList.push(
          <Button
            key={i + 1}
            className={`${
              i + 1 === current
                ? 'pagination-btn current-btn'
                : 'pagination-btn'
            }`}
            shape={'round'}
            radius={20}
            onClick={movePage}
            data-page={i + 1}
          >
            {i + 1}
          </Button>,
        );
      }
    } else {
      // 총 페이지 수가 5 이상
      const numbers = [-2, -1, 0, 1, 2];
      for (let i = 0; i < numbers.length; i++) {
        const num = current + numbers[i];
        if (num > 0 && totalPage >= num) {
          buttonList.push(
            <Button
              key={num}
              className={`${
                num === current
                  ? 'pagination-btn current-btn'
                  : 'pagination-btn'
              }`}
              shape={'round'}
              radius={20}
              onClick={movePage}
              data-page={num}
            >
              {num}
            </Button>,
          );
        }
      }

      // 버튼의 개수가 5개 이하인 경우
      if (buttonList.length < 5) {
        const count = 5 - buttonList.length; // 추가해야할 버튼의 개수
        const firstKey = buttonList.length > 0 ? +buttonList[0].key : 1;
        const lastKey =
          buttonList.length > 0 ? +buttonList[buttonList.length - 1].key : 1;

        if (Math.abs(current - firstKey) > Math.abs(current - lastKey)) {
          for (let i = 1; i <= count; i++) {
            buttonList.unshift(
              <Button
                key={firstKey - i}
                className="pagination-btn"
                shape={'round'}
                radius={20}
                data-page={firstKey - i}
              >
                {firstKey - i}
              </Button>,
            );
          }
        } else {
          for (let i = 1; i <= count; i++) {
            buttonList.push(
              <Button
                key={lastKey + i}
                className="pagination-btn"
                shape={'round'}
                radius={20}
                onClick={movePage}
                data-page={lastKey + i}
              >
                {lastKey + i}
              </Button>,
            );
          }
        }
      }
    }

    // 첫 페이지, 마지막 페이지 버튼 생성
    const first = buttonList.length > 0 ? +buttonList[0].key : 1;
    const last =
      buttonList.length > 0 ? +buttonList[buttonList.length - 1].key : 1;
    if (first !== 1) {
      buttonList.unshift(
        ...[
          <Button
            key="1"
            className="pagination-btn"
            shape={'round'}
            radius={20}
            onClick={movePage}
            data-page={1}
          >
            1
          </Button>,
          <Button
            key="prev-etc"
            className="pagination-btn"
            shape={'round'}
            radius={20}
          >
            ・・・
          </Button>,
        ],
      );
    }
    if (last !== totalPage) {
      buttonList.push(
        ...[
          <Button
            key="next-etc"
            className="pagination-btn"
            shape={'round'}
            radius={20}
          >
            ・・・
          </Button>,
          <Button
            key={totalPage}
            className="pagination-btn"
            shape={'round'}
            radius={20}
            onClick={movePage}
            data-page={totalPage}
          >
            {totalPage}
          </Button>,
        ],
      );
    }

    // prev, next 버튼 생성
    const prevBtn = (
      <Button
        key="prev-btn"
        className="pagination-btn"
        shape={'round'}
        radius={20}
        onClick={movePage}
        data-page="prev"
        disabled={current === 1}
      >
        Prev
      </Button>
    );
    buttonList.unshift(prevBtn);

    const nextBtn = (
      <Button
        key="next-btn"
        className="pagination-btn"
        shape={'round'}
        radius={20}
        onClick={movePage}
        data-page="next"
        disabled={current === totalPage}
      >
        Next
      </Button>
    );
    buttonList.push(nextBtn);

    setButtonList(buttonList);
  };

  // 페이지 이동
  const movePage = (e) => {
    const page = e.target.dataset.page;
    console.log(page);
    if (page === 'prev') {
      setCurrent(current - 1);
    } else if (page === 'next') {
      setCurrent(current + 1);
    } else {
      setCurrent(+page);
    }
  };

  return <Wrapper>{buttonList.map((btn) => btn)}</Wrapper>;
};

export default Pagination;
