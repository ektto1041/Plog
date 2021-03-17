import React from 'react';
import styled from 'styled-components';

import dim from '../../Resources/Dimensions';

const Wrapper = styled.div`
  width: ${dim.sideMenuWidth}px;
  height: ${dim.sideMenuItemHeight}px;
`;

const InnerWrapper = styled.div`
  width: ${dim.sideMenuWidth - dim.sideMenuItemMargin * 2 - dim.sideMenuItemPadding}px;
  height: ${dim.sideMenuItemHeight - dim.sideMenuItemMargin * 2}px;
  margin: ${dim.sideMenuItemMargin}px;
  padding-left: ${dim.sideMenuItemPadding}px;

  line-height: ${dim.sideMenuItemHeight - dim.sideMenuItemMargin * 2}px;
  font-size: 1.1em;
  font-weight: bold;
  user-select: none;

  cursor: pointer;
`;

const SideMenuItem = ({
  text,
}) => {
  return (
    <Wrapper>
      <InnerWrapper>
        {text}
      </InnerWrapper>
    </Wrapper>
  );
};

export default SideMenuItem;