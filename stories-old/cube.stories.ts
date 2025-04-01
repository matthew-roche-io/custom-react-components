import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Cube } from "../components/cube";

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

export const Enabled_Medium: CubeStory = {
  args: {
    activeSide: 1,
    width: 400,
  },
};
