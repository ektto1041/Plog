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

  // useEffect(() => {
  //   // Url 데이터를 path 에 저장
  //   const { parentMenuId, childMenuId, postId } = match.params;
  //   setPath({parentMenuId, childMenuId, postId});

  //   const getMenus = async () => {
  //     const response = await axios.get(`/menus`);

  //     try {
  //       if(response.statusText === 'OK') {
  //         const newMenuList = response.data.filter(item => item.LEVEL === 0);

  //         for(const parent of newMenuList) {
  //           const childMenuList = [];

  //           for(const child of response.data) {
  //             if(child.PRNT_ID === parent.MENU_ID) {
  //               childMenuList.push(child);
  //             }
  //           }

  //           parent.childMenuList = childMenuList;
  //         }
          
  //         setMenuList(newMenuList);
  //       } else {
  //         throw new Error(`Request Error (${response.status})`);
  //       }
  //     } catch(e) {
  //       console.error(e);
  //     }
  //   }

  //   // 모든 메뉴 정보 가져오기
  //   getMenus();
  // }, [match]);

  return (
    <>
      <Presentation
        menuList = {menuList}
        history = {history}
      />
    </>
  );
};

export default FrameContainer;