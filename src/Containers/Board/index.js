import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

import Presentation from './presentation';

const BoardContainer = ({
  history,
  path,
}) => {
  const [postList, setPostList] = useState([]);
  const [nowPage, setNowPage] = useState(1);
  const [dataCount, setDataCount] = useState(0);

  useEffect(() => {
    /**
     *  api Function
     */
    // menuId를 통해 해당 menu의 모든 post 수를 가져오고, post를 페이징하여 가져옴
    const getPosts = async () => {
      const response = await axios.get(`/posts?menuId=${path.menuId}&offset=${newNowPage}&limit=10`);

      try {
        if(response.statusText === 'OK') {
          console.log(response.data);

          setDataCount(response.data.count);
          setPostList(response.data.postList);
        } else throw new Error(`API Error(${response.status})`);
      } catch(e) {
        console.error(e);
      }
    }

    /**
     *  코드는 아래부터 시작
     */
    // path의 page 검사
    const newNowPage = path.page !== -1 ? path.page : 1;
    setNowPage(newNowPage);

    // 해당 menu의 모든 post 수를 가져오고 post를 페이징해서 가져오기
    getPosts();
  }, [path]);

  const onClickPagination = useCallback((page) => {
    history.push(`/${path.menuId}?page=${page}`);
    // TODO 새로고침해야하나?
    history.go(0);
  }, [history, path]);

  return (
    <>
      <Presentation
        postList={postList}
        nowPage={nowPage}
        dataCount={dataCount}
        onClickPagination={onClickPagination}
      />
    </>
  );
};

export default BoardContainer;