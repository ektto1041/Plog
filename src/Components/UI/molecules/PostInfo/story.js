import React from 'react';
import PropTypes from 'prop-types';

import PostInfo from './index';

export default {
  component: PostInfo,
  title: 'PostInfo',
};

const Template = (args) => <PostInfo {...args} />;

// Default 이미지
export const Default = Template.bind({});
Default.args = {};

PostInfo.propTypes = {};
PostInfo.defaultProps = {};
