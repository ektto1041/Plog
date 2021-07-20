/**
 * 블로그 앱의 컨테이너 역할을 하는 컴포넌트
 *
 * pages에는 styled-components 사용하지 않기
 * templates이 presentation 역할이므로 스타일 설정을 templates에 위임하기
 */

import React, { useState, useEffect } from "react";
import axios from "axios";

import FrameTemplate from "Components/templates/Frame";
import Modal from "Components/UI/organisms/Modal";
import { STATUS_OK } from "utils/const";
import { getMenus } from './api';

const Frame = ({ match, history }) => {
  const [path, setPath] = useState({}); // 현재 url의 parameters
  const [menuList, setMenuList] = useState([]); // 모든 메뉴 리스트
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(null); // Modal Type
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 여부

  // 웹 실행 시 가장 먼저, 한 번만 실행되는 로직
  // Routing이 달라지면 실행됨
  useEffect(() => {
    // const getMenus = async () => {
    //   try {
    //     const response = await axios.get(`/menus`);
    
    //     if (response.statusText === "OK") {
    //       setMenuList(response.data);
    //     } else {
    //       throw new Error(`API Error(${response.status})`)
    //     };
    //   } catch (e) {
    //     console.error('getMenus error: ', e);
    //   }
    // };
    // 접속한 사용자 정보 로딩
    const getUser = async () => {
      const response = await axios.get("/auth/user");

      try {
        const { statusText, data } = response;
        if (statusText === STATUS_OK) {
          const { status, user } = data;
          if (status === STATUS_OK && user) {
            setUser(user);
          }
        }
      } catch (e) {
        console.log(e);
      }
    };

    const loadMenus = async () => {
      const menuList = await getMenus();
      setMenuList(menuList);
    }

    // 메뉴 정보 가져오기
    loadMenus();
    // 유저 정보 가져오기
    getUser();
  }, []);

  // url이 바뀔 때마다 실행 될 로직
  useEffect(() => {
    /**
     *  api Function
     */
    const getMenuType = async () => {
      const response = await axios.get(`/menuType?menuId=${menuId}`);

      try {
        if (response.statusText === "OK") {
          setPath({
            menuId,
            postId,
            page,
            menuType: response.data[0].TYPE,
          });
        } else throw new Error(`API Error(${response.status})`);
      } catch (e) {
        console.error(e);
      }
    };

    /**
     *  코드는 아래부터 시작
     */
    const menuId = match.params.menuId ? parseInt(match.params.menuId) : -1;
    const postId = match.params.postId ? parseInt(match.params.postId) : -1;

    // query String 추출
    const { search } = history.location;

    const queryString = {};
    if (search !== "") {
      const queryStringArray = search.substring(1, search.length).split("&");
      queryStringArray.forEach((item) => {
        const tmp = item.split("=");

        queryString[tmp[0]] = tmp[1];
      });
    }

    const page = queryString.page ? parseInt(queryString.page) : -1;

    // path 를 만듦
    // menuId 만 들어왔으면 menuType을 가져옴
    if (menuId > -1 && postId === -1) {
      getMenuType();
    } else {
      // 현재 url의 parameter를 path state에 담음
      setPath({
        menuId,
        postId,
      });
    }
  }, [history, match]);

  // 로그인 여부
  useEffect(() => {
    if (user) setIsLoggedIn(true);
    else if (isLoggedIn) setIsLoggedIn(false);
  }, [user]);

  // Modal 열기/닫기 메소드
  const openModal = (type) => {
    setIsModalOpen(true);
    setModalType(type);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setModalType(null);
  };

  // 로그아웃
  const logout = () => {
    const confirmLogout = async () => {
      try {
        const response = await axios.post("/auth/logout");
        if (response.statusText === STATUS_OK) {
          if (response.data.status === STATUS_OK) {
            setIsLoggedIn(false);
            setUser(null);
          }
        }
      } catch (e) {
        console.log("Logout Error", e);
      }
    };
    Modal.confirm("로그아웃 하시겠어요?", confirmLogout);
  };

  return (
    <>
      <FrameTemplate
        history={history}
        menuList={menuList}
        isModalOpen={isModalOpen}
        openModal={openModal}
        closeModal={closeModal}
        modalType={modalType}
        setModalType={setModalType}
        user={user}
        setUser={setUser}
        isLoggedIn={isLoggedIn}
        logout={logout}
      />
    </>
  );
};

export default Frame;
