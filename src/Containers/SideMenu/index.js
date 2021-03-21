import axios from 'axios';
import React, {useEffect, useState} from 'react';

import Presentation from './presentation';

const SideMenuContainer = () => {
  const [menuList, setMenuList] = useState([]);

  useEffect(() => {

  }, []);

  return (
    <>
      <Presentation
        menuList  = {menuList}
      />
    </>
  );
};

export default SideMenuContainer;