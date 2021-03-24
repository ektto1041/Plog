import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Presentation from './presentation'

const FrameContainer = ({
  match,
  history,
}) => {
  const [path, setPath] = useState({}); // 현재 url의 parameters
  const [menuList, setMenuList] = useState([]); // 모든 메뉴 리스트

  // 웹 실행 시 가장 먼저, 한 번만 실행되는 로직
  // Routing이 달라지면 실행됨
  useEffect(() => {
    console.log(2);
    /**
     *  api Function
     */
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

    /**
     *  코드는 아래부터 시작
     */
    // 모든 메뉴 가져오기
    getMenus();
  }, []);

  // url이 바뀔 때마다 실행 될 로직
  useEffect(() => {
    /**
     *  api Function
     */


    /**
     *  코드는 아래부터 시작
     */
    const { menuId, postId } = match.params;

    // 현재 url의 parameter를 path state에 담음
    setPath({
      menuId: menuId ? parseInt(match.params.menuId) : -1,
      postId: postId ? parseInt(match.params.postId) : -1,
    });

    if(!menuId) {
      // url 에 어떤 Parameter 도 들어오지 않았을 때의 처리
      

    } else if(!postId) {
      // url 에 menu Id 만 들어왔을 때의 처리


    } else {
      // url 에 모든 Parameter 가 들어왔을 때의 처리


    }
  }, [match]);

  return (
    <>
      <Presentation
        path = {path}
        menuList = {menuList}
        history = {history}
      />
    </>
  );
};

export default FrameContainer;