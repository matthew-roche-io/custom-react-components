import React, {ReactNode, FC} from 'react';
import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Cube } from "../../../";
import {CubeObjectInterface} from '../cube-object.interface';

const meta: Meta<typeof Cube> = {
  title: "Roche/Cube",
  component: Cube,
  argTypes: {
    activeSide: {
      control: "select",
      options: ["front", "back", "top", "bottom", "left", "right"],
    },
    width: {
      control: "text",
      description: "Input Label",
    },
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
};

export default meta;

type CubeStory = StoryObj<typeof Cube>;

interface CWInterface {
  text: string;
  backgroundColor?: string;
}

const ContentWrapper: FC<CWInterface> = ({text, backgroundColor='white'}) => {
  const style: object = {
    position: 'relative',
    width: '100%',
    height: '100%',
    backgroundColor,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
  return (
    <div style={style}>{text}</div>
  );
};

const cubeFaces: CubeObjectInterface = {
  front: <ContentWrapper text="front" backgroundColor='red'/>,
  back: <ContentWrapper text="back" backgroundColor='green'/>,
  left: <ContentWrapper text="left" backgroundColor='orange'/>,
  right: <ContentWrapper text="right" backgroundColor='blue'/>,
  top: <ContentWrapper text="top" backgroundColor='violet'/>,
  bottom: <ContentWrapper text="bottom" backgroundColor='gray'/>
}

export const Width_400px: CubeStory = {
  args: {
    activeSide: 'front',
    faces: cubeFaces,
    width: 500,
  },
};
