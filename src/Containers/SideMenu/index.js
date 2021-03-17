import axios from 'axios';
import React, {useEffect, useState} from 'react';

import Presentation from './presentation';

const SideMenuContainer = () => {
  const [menuItemList, setMenuItemList] = useState([]);

  // useEffect(() => {
  //   axios.get('/getAllSideMenu')
  //   .then(r => {
  //     const newArr = Array.from(r.data, item => item.NAME);

  //     setMenuItemList(newArr);
  //   })
  // }, []);

  return (
    <>
      <Presentation
        menuItemList = {menuItemList}
      />
    </>
  );
};

export default SideMenuContainer;