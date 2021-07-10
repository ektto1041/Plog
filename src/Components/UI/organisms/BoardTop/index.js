import React, { useState, useCallback, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Wrapper from './style';

const BoardTop = () => {
  const [isSearch, setIsSearch] = useState(false); // 검색 버튼 클릭 여부
  const searchInputRef = useRef(null);

  // 검색 입력창 보이게 하는 함수
  const showSearchInput = useCallback(() => {
    setIsSearch(true);
  }, []);
  // 검색 입력창 가리게 하는 함수
  const hideSearchInput = useCallback(() => {
    setIsSearch(false);
  }, []);
  // 검색 아이콘 클릭시 호출되는 함수
  const onSearchIconClick = useCallback(() => {
    showSearchInput();
    setTimeout(() => searchInputRef.current.focus(), 100);
  }, [showSearchInput]);

  return (
    <Wrapper>
      <div className="board-top-left">정렬</div>
      <div className="board-top-right">
        <input
          className={isSearch ? 'show-search' : 'hidden-search'}
          type="text"
          onBlur={hideSearchInput}
          ref={searchInputRef}
        />
        <FontAwesomeIcon
          className="board-top-search"
          onClick={onSearchIconClick}
          icon={faSearch}
        />
      </div>
    </Wrapper>
  );
};

export default BoardTop;
