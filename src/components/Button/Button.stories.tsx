import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './index';
import mdx from './Button.mdx';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' }
  },
  parameters: {
    docs: {
      page: mdx
    }
  }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Click Me</Button>
);

export const Primary = Template.bind({});
Primary.args = {
  primary: true
};

export const Secondary = Template.bind({});

export const Large = Template.bind({});
Large.args = {
  size: 'large'
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium'
};

export const Small = Template.bind({});
Small.args = {
  size: 'small'
};
