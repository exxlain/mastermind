import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Provider} from "react-redux";
import {store} from "../../app/store";
import ColorBoxesButtonsList from './ColorBoxesButtonsList';
import { pushColorToCurrentPuzzle } from '../GamePage/gamePageSlice';


export default {
  title: 'ColorBoxesButtonsList',
  component: ColorBoxesButtonsList,
  decorators: [
    (Story) => (
        <Provider store={store}>
          <div style={{ maxWidth: '650px' }}>
            <Story />
          </div>
        </Provider>
    ),
  ],
  argTypes: {
    colors: Array,
    results: Array,
  },
} as ComponentMeta<typeof ColorBoxesButtonsList>;

const Template: ComponentStory<typeof ColorBoxesButtonsList> = (args) => <ColorBoxesButtonsList {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  colors: ['fireBrick', 'mediumBlue', 'forestGreen', 'gold', 'floralWhite'],
  selectColor: pushColorToCurrentPuzzle,
};

export const ALWrong = Template.bind({});
ALWrong.args = {
  colors: ['mediumBlue', 'mediumBlue', 'forestGreen', 'forestGreen', 'floralWhite'],
  selectColor: pushColorToCurrentPuzzle,
};

export const AllRight = Template.bind({});
AllRight.args = {
  colors: ['fireBrick', 'forestGreen', 'forestGreen', 'gold', 'forestGreen'],
  selectColor: pushColorToCurrentPuzzle,
};
