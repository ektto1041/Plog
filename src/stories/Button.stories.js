import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Components/UI/atoms/Button';
import col from '../Resources/Colors';

export default {
  component: Button,
  title: 'Button',
};

const Template = args => <Button {...args}>버튼</Button>;

export const Default = Template.bind({});
Default.args = {
  shape: 'round',
};

Button.propTypes = {
  shape: PropTypes.string,
};

Button.defaultProps = {
  shape: 0,
};
