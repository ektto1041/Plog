import React from 'react';
import PropTypes from 'prop-types';

import Text from './index';

export default {
  component: Text,
  title: 'Text',
};

const Template = (args) => <Text {...args}>문자</Text>;

// Default 버튼
export const Default = Template.bind({});
Default.args = {};

Text.propTypes = {};
Text.defaultProps = {};
