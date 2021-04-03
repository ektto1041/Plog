import React from 'react';
import PropTypes from 'prop-types';

import P from './index';

export default {
  component: P,
  title: 'P',
  argTypes: {
    shape: {
      control: {
        type: 'select',
        options: ['noraml', 'round'],
      },
    },
  },
};

const Template = (args) => <P {...args}>버튼</P>;

// Default 버튼
export const Default = Template.bind({});
Default.args = {
  shape: 'normal',
};

P.propTypes = {
  shape: PropTypes.oneOf(['normal', 'round']),
};
P.defaultProps = {
  shape: 'normal',
};
