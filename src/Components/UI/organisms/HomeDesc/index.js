/**
 * 홈화면 중앙에 있는 설명 컴포넌트
 */

import Text from 'Components/UI/atoms/Text';
import Slider from 'Components/UI/molecules/Slider';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
`;

const HomeDesc = () => {
  return (
    <Wrapper>
      <Slider
        // width="500"
        height="500"
      >
        <div>
          <Text
            size="large"
            bold
            style={{ padding: '10px 0' }}
          >
            PLOG
          </Text>
          <Text>나만의 블로그를 만들어 보세요</Text>
        </div>
        <div>hello!!</div>
      </Slider>
    </Wrapper>
  );
}

export default HomeDesc;