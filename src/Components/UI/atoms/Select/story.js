import React from 'react';

import SelectComp from './index';
const { Option } = SelectComp;

const Story = {
  component: SelectComp,
  title: 'Design System/Atoms/Select',
};

const Template = (args) => (
  <SelectComp {...args}>
    <Option value="cat">고양이</Option>
    <Option value="pig">돼지</Option>
  </SelectComp>
);

// Default
export const Select = Template.bind({});
Select.args = {
  onChange: (e) => console.log(e.target.value),
};

SelectComp.propTypes = {};
SelectComp.defaultProps = {};

export default Story;
