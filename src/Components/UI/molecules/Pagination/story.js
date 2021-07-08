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

import PaginationComp from './index';

const Story = {
  component: PaginationComp,
  title: 'Design System/Molecules/Pagination',
};

const Template = (args) => <PaginationComp {...args} />;

// Default 버튼
export const Pagination = Template.bind({});
Pagination.args = {};

export default Story;
