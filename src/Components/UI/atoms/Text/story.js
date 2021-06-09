import React from 'react';
import PropTypes from 'prop-types';

import Text from './';

export default {
  component: Text,
  title: 'Text',
};

const Template = args => <Text {...args}>텍스트</Text>;

// Default 버튼
export const Default = Template.bind({});
Default.args = {
};

Text.propTypes = {
};
Text.defaultProps = {
};