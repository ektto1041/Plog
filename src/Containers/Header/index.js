import React, { useCallback, useEffect, useState } from 'react';
import Presentation from './presentation'

const HeaderContainer = ({
  path,
  history,
  menuList,
}) => {
  const [currentMenuId, setCurrentMenuId] = useState(-1); // 현재 선택된 메뉴 (-1이면 아무 메뉴도 선택되지 않았음을 의미함)

  useEffect(() => {
    // path의 menuId 를 조회해 현재 선택된 메뉴의 ID를 currentMenuId에 저장
    if(path.menuId) {
      setCurrentMenuId(path.menuId);
    } else setCurrentMenuId(-1);
  }, [path]);

  return (
    <>
      <Presentation
        currentMenuId={currentMenuId}
        menuList={menuList}
      />
    </>
  );
};

export default HeaderContainer;