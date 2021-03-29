import React from 'react';
import PropTypes from 'prop-types';

import Button from './index';

export default {
  component: Button,
  title: 'Button',
  argTypes: {
    shape: {
      control: {
        type: 'select',
        options: ['noraml', 'round']
      }
    },
  }
};

const Template = args => <Button {...args}>버튼</Button>;

// Default 버튼
export const Default = Template.bind({});
Default.args = {
  shape: 'normal',
};

Button.propTypes = {
  shape: PropTypes.oneOf(['normal', 'round']),
};
Button.defaultProps = {
  shape: 'normal'
};

// 원형 버튼
export const RoundButton = Template.bind({});
RoundButton.args = {
  shape: 'round',
  radius: 20,
};
