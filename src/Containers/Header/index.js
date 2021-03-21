import React, { useCallback, useEffect, useState } from 'react';
import Presentation from './presentation'

const HeaderContainer = ({
  path,
  userList,
  menuList,
  history,
}) => {
  const [dropdownText, setDropdownText] = useState("");
  const [dropdownDataSet, setDropdownDataSet] = useState([])
  const [headerMenuList, setHeaderMenuList] = useState([]);

  useEffect(() => {
    // Dropdown 표시되는 텍스트 설정
    const newDropdownText = userList[path.userId-1]?.NAME;
    setDropdownText(newDropdownText);

    // Dropdown 항목들 설정
    setDropdownDataSet(Array.from(userList, item => {
      return {
        text: item.NAME,
        handleClick: (userId) => history.push(`/${userId}`)
      }
    }));

    

  }, [history, path, userList]);

  return (
    <>
      <Presentation
        userList = {userList}
        history       = {history}
        dropdownText  = {dropdownText}
        dropdownDataSet = {dropdownDataSet}
        menuList      = {menuList}
      />
    </>
  );
};

export default HeaderContainer;