import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ColorBoxesResultList from './ColorBoxesResultList';

export default {
  title: 'ColorBoxesResultList',
  component: ColorBoxesResultList,
  decorators: [
    (Story) => (
        <div style={{ maxWidth: '650px' }}>
          <Story />
        </div>
    ),
  ],
  argTypes: {
    colors: Array,
    results: Array,
  },
} as ComponentMeta<typeof ColorBoxesResultList>;

const Template: ComponentStory<typeof ColorBoxesResultList> = (args) => <ColorBoxesResultList {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  colors: ['fireBrick', 'mediumBlue', 'forestGreen', 'gold', 'floralWhite'],
  results: [2,1,0,0,0],
};

export const ALWrong = Template.bind({});
ALWrong.args = {
  colors: ['mediumBlue', 'mediumBlue', 'forestGreen', 'forestGreen', 'floralWhite'],
  results: [0,0,0,0,0],
};

export const AllRight = Template.bind({});
AllRight.args = {
  colors: ['fireBrick', 'forestGreen', 'forestGreen', 'gold', 'forestGreen'],
  results: [2,2,2,2,2],
};
