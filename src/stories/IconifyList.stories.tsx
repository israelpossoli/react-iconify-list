import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import IconifyList from '../components/IconifyList';

export default {
    /* ?? The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Example/IconifyList',
    component: IconifyList,
  } as ComponentMeta<typeof IconifyList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Default: ComponentStory<typeof IconifyList> = () => <IconifyList onChange={(e) => console.log(e)}/>;
export const Small: ComponentStory<typeof IconifyList> = () => <IconifyList sizeButton='22' onChange={(e) => console.log(e)}/>;
export const Large: ComponentStory<typeof IconifyList> = () => <IconifyList sizeButton='48' onChange={(e) => console.log(e)}/>;
export const ColorRed: ComponentStory<typeof IconifyList> = () => <IconifyList color="red" onChange={(e) => console.log(e)}/>;
