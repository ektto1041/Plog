import React from 'react';
import PropTypes from 'prop-types';

import SliderComponent from './index';

export default {
  component: SliderComponent,
  title: 'Slider',
};

const Template = args => (
  <SliderComponent {...args}>
    <div>Slider 1</div>
    <div>Slider 2</div>
    <div>Slider 3</div>
  </SliderComponent>);

// Default 버튼
export const Slider = Template.bind({});
Slider.args = {
  height: '300',
};

Slider.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number.isRequired,
};
Slider.defaultProps = {
};