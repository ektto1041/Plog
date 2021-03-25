import React from 'react';
import styled from 'styled-components';

import dim from '../../Resources/Dimensions';
import testImage from '../../Resources/Images/test_image.jpg';

const Wrapper = styled.div`
  display: flex;

  width: ${dim.displayWidth - dim.boardPadding * 2}px;
  height: ${dim.boardItemHeight - dim.boardItemPadding * 2}px;
  margin-bottom: ${dim.boardItemMargin}px;
  padding: ${dim.boardItemPadding}px 0;

  border-bottom: .5px solid gray;
`;

const Text = styled.div`
  width: ${dim.displayWidth - (dim.boardPadding * 2) - dim.boardItemPadding - dim.boardItemImageWidth}px;
  height: ${dim.boardItemHeight - dim.boardItemPadding * 2}px;
  margin-left: ${dim.boardItemPadding}px;
`;

const Title = styled.div`
  width: 100%;
  height: ${dim.boardItemTitleHeight}px;

  line-height: ${dim.boardItemTitleHeight}px;
  font-size: ${dim.boardItemTitleFontSize}em;
  user-select: none;
  font-weight: 500;
`;

const Information = styled.div`
  width: 100%;
  height: ${dim.boardItemInformationHeight}px;

  line-height: ${dim.boardItemInformationHeight}px;
  font-size: ${dim.boardItemInformationFontSize}em;
  user-select: none;
`;

const Content = styled.div`
  width: 100%;
  height: ${dim.boardItemContentHeight}px;

  line-height: ${dim.boardItemContentHeight}px;
  font-size: ${dim.boardItemContentFontSize}em;
  user-select: none;
`;

const Image = styled.img`
  width: ${dim.boardItemImageWidth - 100}px;
  height: ${dim.boardItemImageWidth - 100}px;
  margin: 0 auto;

  object-fit: contain;
`;


const BoardItem = ({
  title,
  updDate,
  content,
}) => {
  return (
    <Wrapper>
      <Text>
        <Title>{title}</Title>
        <Information>{updDate}</Information>
        <Content>{content}</Content>
      </Text>
      <Image src={testImage} alt="" />
    </Wrapper>
  );
};

export default BoardItem;