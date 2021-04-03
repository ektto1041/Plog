import React from 'react';
import PropTypes from 'prop-types';

import HeaderMenus from './index';

export default {
  component: HeaderMenus,
  title: 'HeaderMenus',
};

const Template = (args) => <HeaderMenus {...args} />;

// Default 이미지
export const Default = Template.bind({});
Default.args = {
  menuList: [
    { MENU_ID: 3, NAME: 'Programming', SORT: 1, TYPE: 'BOARD' },
    { MENU_ID: 4, NAME: 'About Us', SORT: 1, TYPE: 'SINGLE' },
  ],
};

HeaderMenus.propTypes = {};
HeaderMenus.defaultProps = {};
