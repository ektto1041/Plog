import React from 'react';

import HeaderMenus from './index';

const Story = {
  component: HeaderMenus,
  title: 'Design System/Molecules/HeaderBtns',
};

const Template = (args) => <HeaderMenus {...args} />;

// Default 이미지
export const HeaderBtns = Template.bind({});
HeaderBtns.args = {
  openLoginModal: () => {},
  openJoinModal: () => {},
  user: { email: 'admin@plog.com' },
  isLoggedIn: false,
  logout: () => {},
};

HeaderMenus.propTypes = {};
HeaderMenus.defaultProps = {};

export default Story;
