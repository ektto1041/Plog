import React from 'react';
import PropTypes from 'prop-types';

import Post from './index';

export default {
  component: Post,
  title: 'Design System/Organisms/Post',
};

const Template = (args) => <Post {...args} />;

// Default 이미지
export const Default = Template.bind({});
Default.args = {
  post: {
    POST_ID: 1,
    TITLE: 'Docker',
    CONTENT: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi voluptatem nulla, similique error at aliquam qui quo fugit doloribus et perspiciatis consequuntur nihil aliquid ad autem incidunt quos eligendi, eos id nemo. Eveniet repellendus, molestiae eius voluptatem autem dolorem. Non blanditiis iure numquam ut veniam magni cumque reiciendis aliquam temporibus!`,
    REG_DATE: '2021.03.29',
    UPD_DATE: '2021.03.29',
  },
};

Post.propTypes = {
  post: PropTypes.object, // 포스트 정보
};
Post.defaultProps = {
  post: {},
};
