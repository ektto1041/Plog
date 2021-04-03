import React from 'react';
import PropTypes from 'prop-types';

import Post from './index';

export default {
  component: Post,
  title: 'Post',
};

const Template = (args) => <Post {...args} />;

// Default 이미지
export const Default = Template.bind({});
Default.args = {};

Post.propTypes = {};
Post.defaultProps = {};
