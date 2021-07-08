import React from 'react';
import PropTypes from 'prop-types';

import P from './index';

export default {
  component: P,
  title: 'Design System/Atoms/P',
  // todo 컬러 팔레트 추가 하기
};

const Template = (args) => (
  <>
    <P {...args}>안녕하세요! 문장을 적는 P 태그입니다.</P>
    <P {...args}>기본 글자 색상은 #666 입니다.</P>
  </>
);

// Default 버튼
export const Default = Template.bind({});
Default.args = {
  color: '#666',
};

P.propTypes = {
  color: PropTypes.string,
};
P.defaultProps = {
  color: '#666',
};
