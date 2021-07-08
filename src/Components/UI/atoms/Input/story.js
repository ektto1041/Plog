import React from 'react';
import PropTypes from 'prop-types';

import Input from './index';

export default {
  component: Input,
  title: 'Design System/Atoms/Input',
};

const Template = (args) => <Input {...args} />;

// Default 버튼
export const Default = Template.bind({});
Default.args = {
  type: 'email',
};

Input.propTypes = {};
Input.defaultProps = {};
