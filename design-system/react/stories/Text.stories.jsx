import React from 'react';
import {Text} from '../src/atoms/text/Text';

export default {
    title: 'Example/Atoms/Text',
    component: Text,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
      //backgroundColor: { control: 'color' },
    },
  };

  const Template = (args) => <Text {...args} />;
  export const PlainText = Template.bind({});
  PlainText.args = {
    label:'Ciao'
  };