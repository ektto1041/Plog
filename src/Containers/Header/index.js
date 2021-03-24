import React, { useCallback, useEffect, useState } from 'react';
import Presentation from './presentation'

const HeaderContainer = ({
  history,
  menuList,
}) => {

  return (
    <>
      <Presentation
        menuList={menuList}
      />
    </>
  );
};

export default HeaderContainer;