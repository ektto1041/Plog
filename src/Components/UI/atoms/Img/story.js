import React from 'react';
import PropTypes from 'prop-types';

import Img from './index';

export default {
  component: Img,
  title: 'Design System/Atoms/Img',
};

const Template = (args) => <Img {...args} />;

// Default 이미지
export const Default = Template.bind({});
Default.args = {};

Img.propTypes = {};
Img.defaultProps = {};
