 import React from 'react';
 import PropTypes from 'prop-types';
 
 import HashtagComp from './';
 
 const Story = {
   component: HashtagComp,
   title: 'Design System/Atoms/Hashtag',
 };
 
 const Template = (args) => <HashtagComp {...args}>해시태그</HashtagComp>;
 
 // Default
 export const Hashtag = Template.bind({});
 Hashtag.args = {
   onClick: () => alert('해시태그클릭'),
 };
 
 // PropTypes를 index.js 파일에 선언하니 스토리북이 나오지 않아서 여기에 설정함
 HashtagComp.propTypes = {
   onClick: PropTypes.func,
   iconColor: PropTypes.string,
 };
 
 HashtagComp.defaultProps = {
   onClick: null,
   iconColor: '#000',
 };
 
 export default Story;
 