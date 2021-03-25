import React from 'react';
import styled from 'styled-components';

import dim from '../../Resources/Dimensions';
import testImage from '../../Resources/Images/test_image.jpg';

const Wrapper = styled.div`
  display: flex;

  width: ${dim.displayWidth - dim.boardPadding * 2}px;
  height: ${dim.boardItemHeight}px;
  margin-bottom: ${dim.boardItemMargin}px;
  padding: ${dim.boardItemPadding}px 0;
  
  box-sizing: border-box;
  border: 1px solid gray;
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
  font-weight: 500;
`;

const Information = styled.div`
  width: 100%;
  height: ${dim.boardItemInformationHeight}px;

  line-height: ${dim.boardItemInformationHeight}px;
  font-size: ${dim.boardItemInformationFontSize}em;
`;

const Content = styled.div`
  width: 100%;
  height: ${dim.boardItemContentHeight}px;

  line-height: ${dim.boardItemContentHeight}px;
  font-size: ${dim.boardItemContentFontSize}em;
`;

const Image = styled.img`
  width: ${dim.boardItemImageWidth - 100}px;
  height: ${dim.boardItemImageWidth - 100}px;
  margin: 0 auto;

  object-fit: contain;
`;


const BoardItem = () => {
  return (
    <Wrapper>
      <Text>
        <Title>포스팅 제목</Title>
        <Information>1996-06-12</Information>
        <Content>가나다 라마바사 아자 차카타파 하하 박상연 영통구 대족장 예천</Content>
      </Text>
      <Image src={testImage} alt="" />
    </Wrapper>
  );
};

export default BoardItem;