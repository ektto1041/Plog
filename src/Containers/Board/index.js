import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

import Presentation from './presentation';

const BoardContainer = ({
  history,
  menuId,
}) => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    /**
     *  api Function
     */
    const getPosts = async () => {
      // menuId를 통해 해당 menu의 모든 post를 가져옴
      const response = await axios.get(`/posts?menuId=${menuId}`);

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
  }, [menuId]);

  const onClickPagination = useCallback((page) => {
    history.push(`/${menuId}?page=${page}`);
  }, [history, menuId]);

  return (
    <>
      <Presentation
        postList={postList}
        onClickPagination={onClickPagination}
      />
    </>
  );
};

export default BoardContainer;