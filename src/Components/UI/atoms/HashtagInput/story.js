/**
 * 스토리북 사용법
 * 1. Components/UI 폴더 아래의 컴포넌트 폴더 아래에 story.js 파일 생성
 * 2. { title: '제목', compoenent: 컴포넌트 } 객체를 export default 한다.
 * 3. 화면에 보여줄 기본 템플릿을 생성한다. (const Template = (args) => <Button {...args}>버튼</Button>;)
 * 4. 템플릿을 사용하여 타입별 컴포넌트를 생성하고, export 하여 스토리북에 표시한다.
 *    -> export const Default = Template.bind({});
 * 5. 각 타입별 컴포넌트에 args property를 통해 넘겨줄 props를 설정한다.
 */

 import React from 'react';
 import PropTypes from 'prop-types';
 
 import HashtagInputComp from './';
 
 const Story = {
   component: HashtagInputComp,
   title: 'Design System/Atoms/HashtagInput',
 };
 
 const Template = (args) => <HashtagInputComp {...args} />;
 
 // Default
 export const HashtagInput = Template.bind({});
 HashtagInput.args = {
   fontSize: '20px',
 };
 
 // PropTypes를 index.js 파일에 선언하니 스토리북이 나오지 않아서 여기에 설정함
 HashtagInputComp.propTypes = {
   fontSize: PropTypes.string,
 };
 
 HashtagInputComp.defaultProps = {
   fontSize: '20px',
 };
 
 export default Story;
 