import React from 'react';
import PropTypes from 'prop-types';

import PostInfo from './index';

export default {
  component: PostInfo,
  title: 'PostInfo',
};

const Template = (args) => <PostInfo date={args.date} view={args.view} />;

// Default 이미지
export const Default = Template.bind({});
Default.args = {
  date: '2021.03.29',
  view: 2836,
};

PostInfo.propTypes = {};
PostInfo.defaultProps = {};
