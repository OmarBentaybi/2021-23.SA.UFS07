import React from 'react';

import { Input } from '../src/atoms/input/Input';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Atoms/Input',
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
   // backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Input {...args} />;

export const InputText = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
InputText.args = {
  placeholder:"A Placeholder Text",
  onData: undefined,
  isValid: undefined,
  type: 'text',
  id: "itext",
};

export const InputRadio = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
InputRadio.args = {
  placeholder:undefined,
  onData: undefined,
  isValid: undefined,
  type: 'radio',
  id: "iradio",
  label: "label"
};

