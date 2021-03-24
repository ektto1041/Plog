import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Presentation from './presentation'

const FrameContainer = ({
  match,
  history,
}) => {
  const [menuList, setMenuList] = useState([]); // 모든 메뉴 리스트

  // 웹 실행 시 가장 먼저 실행되는 로직
  useEffect(() => {
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