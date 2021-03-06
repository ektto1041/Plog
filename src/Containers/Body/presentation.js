import React from 'react';
import styled from 'styled-components';

import Home from '../Home';
import Board from '../Board';

import dim from '../../Resources/Dimensions';
import Writing from '../Writing';

const Wrapper = styled.div`
  width: 100%;
`;

const Body = styled.div`
  margin: 0 auto;
  margin-top: ${dim.headerHeight + dim.bodyMargin}px;
  width: ${dim.displayWidth}px;
  
  box-shadow: 0 0 10px gray; 

  background: white;
`;

const BodyPresentation = ({
  history,
  path,
}) => {
  console.log(path);

  return (
    <Wrapper>
      <Body>
        {path.menuId === -1 ? (<Home />) :
        path.menuId === -2 ? (<Writing />) :
        path.menuType === "BOARD" ? (<Board path={path} history={history} />) :
        path.menyType === "SINGLE" ? (<></>) : (<></>)}
      </Body>
    </Wrapper>
  );
};

export default BodyPresentation;