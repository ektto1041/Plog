import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

import Presentation from './presentation';

const BoardContainer = ({
  history,
  path,
}) => {
  const [postList, setPostList] = useState([]);
  const [nowPage, setNowPage] = useState(1);

  useEffect(() => {
    /**
     *  api Function
     */
    const getPosts = async () => {
      // menuId를 통해 해당 menu의 모든 post를 가져옴
      const response = await axios.get(`/posts?menuId=${path.menuId}`);

      try {
        if(response.statusText === 'OK') {
          setPostList(response.data);
        } else throw new Error(`API Error(${response.status})`);
      } catch(e) {
        console.error(e);
      }
    }

    /**
     *  코드는 아래부터 시작
     */
    // 해당 menu의 모든 post 가져오기
    getPosts();

    // 임시로 쿼리스트링에 따라 Pagination 변경 테스트
    if(path.page !== -1) setNowPage(path.page);
  }, [path]);

  const onClickPagination = useCallback((page) => {
    history.push(`/${path.menuId}?page=${page}`);
  }, [history, path]);

  return (
    <>
      <Presentation
        postList={postList}
        nowPage={nowPage}
        onClickPagination={onClickPagination}
      />
    </>
  );
};

export default BoardContainer;