import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import BoardTemplate from 'Components/templates/Board';
import { STATUS_OK } from 'utils/const';

const Board = ({ path }) => {
  const [postList, setPostList] = useState([]);
  const [nowPage, setNowPage] = useState(1);
  const [dataCount, setDataCount] = useState(0);
  const history = useHistory();

  // 게시글 불러오기
  useEffect(() => {
    const getPosts = async () => {
      try {
        const menuId = getMenuId();
        const response = await axios.get(`/posts?id=${menuId}`);
        if (response.statusText === STATUS_OK) {
          const { postList } = response.data;
          setPostList(postList);
        }
      } catch (e) {
        console.log('게시글 가져오기 에러', e);
      }
    };

    getPosts();
  }, []);

  // path에서 menuId 가져오는 메소드
  const getMenuId = () => {
    try {
      const { pathname } = history.location;
      const menuId = pathname.split('/')[2];
      return menuId;
    } catch (e) {
      console.log('Board getMenuId Error', e);
    }
  };

  const onClickPagination = useCallback(
    (page) => {
      history.push(`/${path.menuId}?page=${page}`);
      // TODO 새로고침해야하나?
      history.go(0);
    },
    [history, path],
  );

  return (
    <>
      <BoardTemplate
        postList={postList}
        nowPage={nowPage}
        dataCount={dataCount}
        onClickPagination={onClickPagination}
      />
    </>
  );
};

export default Board;
