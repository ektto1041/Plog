import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Presentation from './presentation'

const FrameContainer = ({
  match,
  history,
}) => {
  const [path, setPath] = useState({});
  const [userList, setUserList] = useState([]);
  const [menuList, setMenuList] = useState([]);

  useEffect(() => {
    // Url 데이터를 path 에 저장
    const { userId, postId } = match.params;

    setPath({userId, postId});

    // User의 메뉴 가져오기
    const getMenusByUserId = async (userId) => {
      try {
        const response = await axios.get(`/menus?userId=${userId}`);

        if(response.statusText === 'OK') {
          const parentMenus = response.data.filter(item => item.LEVEL === 0);

          for(const parentMenu of parentMenus) {
            const childMenus = [];

            for(const childMenu of response.data) {
              if(childMenu.PRNT_ID && childMenu.PRNT_ID !== -1) {
                childMenus.push(childMenu);
              }
            }

            parentMenu.childMenus = childMenus;
          }

          setMenuList(parentMenus);
        } else {
          throw new Error(`Request Error (${response.status})`);
        }
      } catch(e) {
        console.log(e);
      }
    }

    // 헤더에 표시될 유저 목록 가져오기
    const getUserList = async () => {
      try {
        const response = await axios.get('/users');
        if (response.statusText === 'OK') {
          setUserList(response.data);

          console.log(response.data);
        } else {
          throw new Error(`Request Error (${response.status})`);
        }
      } catch (e) {
        console.log(e);
      }
    }
    
    // url에 표시된 userId의 Default Post 가져오기
    const getPostByUserId = async (userId) => {
      const response = await axios.get(`/post?userId=${userId}`);
    }

    // 헤더에 표시될 유저 목록 가져오기
    getUserList();

    // 선택된 유저의 메뉴 가져오기
    getMenusByUserId(userId);

    if (!postId) {
      // 데이터 로딩 필요
      getPostByUserId(userId);
    } else {
      // post를 로딩하는 로직 실행

    }

    // url에 표시된 userId의 메뉴 가져오기
  }, [match]);

  return (
    <>
      <Presentation
        path = {path}
        userList = {userList}
        menuList = {menuList}
        history = {history}
      />
    </>
  );
};

export default FrameContainer;