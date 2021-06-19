import React from 'react';
import PropTypes from 'prop-types';

import Text from './index';

export default {
  component: Text,
  title: 'Text',
  // todo 컬러 팔레트 추가 하기
};

const Template = (args) => (
  <Text {...args}>텍스트 기본 사이즈는 15px 입니다.</Text>
);

// Default 버튼
export const Default = Template.bind({});
Default.args = {
  fontSize: '15px',
  color: '#000',
};

Text.propTypes = {
  fontSize: PropTypes.string,
  color: PropTypes.string,
};
Text.defaultProps = {
  fontSize: '15px',
  color: '#000',
};
