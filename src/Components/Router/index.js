/**
 * pages에는 styled-components 사용하지 않기
 * templates이 presentation 역할이므로 스타일 설정을 templates에 위임하기
 */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router';

import Header from 'Components/UI/organisms/Header';
import Board from 'Components/pages/Board';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Router = ({
  match,
  history,
}) => {
  const [path, setPath] = useState({}); // 현재 url의 parameters
  const [menuList, setMenuList] = useState([]); // 모든 메뉴 리스트
  const [bodyComp, setBodyComp] = useState(null); // 바디에 보여줄 컴포넌트

  // 웹 실행 시 가장 먼저, 한 번만 실행되는 로직
  // Routing이 달라지면 실행됨
  useEffect(() => {
    const getMenus = async () => {
      const response = await axios.get(`/menus`);

      try {
        if(response.statusText === 'OK') {
          setMenuList(response.data);
        } else throw new Error(`API Error(${response.status})`);
      } catch(e) {
        console.error(e);
      }
    };

    // 모든 메뉴 가져오기
    getMenus();
  }, []);

  // url이 바뀔 때마다 실행 될 로직
  useEffect(() => {
    /**
     *  api Function
     */
    const getMenuType = async () => {
      const response = await axios.get(`/menuType?menuId=${menuId}`);

      try {
        if(response.statusText === 'OK') {
          setPath({
            menuId,
            postId,
            page,
            menuType: response.data[0].TYPE
          });
        } else throw new Error(`API Error(${response.status})`);
      } catch(e) {
        console.error(e);
      }
    }

    /**
     *  코드는 아래부터 시작
     */
    const { pathname } = history.location;
    const [,menuId = -1, postId = -1] = pathname.split('/');

    // query String 추출
    const { search } = history.location;

    const queryString = {};
    if(search !== "") {
      const queryStringArray = search.substring(1, search.length).split('&');
      queryStringArray.forEach(item => {
        const tmp = item.split('=');

        queryString[tmp[0]] = tmp[1];
      });
    }
    
    const page = queryString.page ? parseInt(queryString.page) : -1;

    // path 를 만듦
    // menuId 만 들어왔으면 menuType을 가져옴
    if(menuId > -1 && postId === -1) {
      getMenuType();
    } else {
      // 현재 url의 parameter를 path state에 담음
      setPath({
        menuId,
        postId,
      });
    }
  }, [history, match]);

  // 메뉴 클릭
  const onMenuClick = (MENU_ID) => {
    if (MENU_ID === -1)
      history.push(`/`);
    else
      history.push(`/${MENU_ID}`);
  }

  return (
    <Wrapper>
      <Header
        menuList={menuList}
        onMenuClick={onMenuClick}
      />
      <Switch>
        <Route exact path="/:menuId" render={() => {
          const { menuType } = path;
      
          switch (menuType) {
            case 'BOARD': {
              return <Board />;
            }
            case 'SINGLE': {
              return null;
            }
          }
        }} />
      </Switch>
    </Wrapper>
  );
};

export default Router;