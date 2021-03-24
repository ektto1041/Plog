import React, { useCallback, useEffect, useState } from 'react';
import Presentation from './presentation'

const HeaderContainer = ({
  history,
  menuList,
}) => {
  const [headerMenuList, setHeaderMenuList] = useState([]);

  useEffect(() => {
    // Header Menu Item 설정
    setHeaderMenuList(Array.from(menuList, item => { return { text: item.NAME, handleClick: () => history.push(`${item.MENU_ID}`) } }));

    console.log(menuList);
    console.log(Array.from(menuList, item => { return { text: item.NAME } }));
  }, [history, menuList]);

  return (
    <>
      <Presentation
        headerMenuList={headerMenuList}
      />
    </>
  );
};

export default HeaderContainer;