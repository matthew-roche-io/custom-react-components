import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { SelectableButton } from "../../../";

const meta: Meta<typeof SelectableButton> = {
  title: "Roche/SelectableButton",
  component: SelectableButton,
  argTypes: {
    label: {
      control: "text",
      description: "Input Label",
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    selected: {
      control: "boolean",
    },
    minHeight: {
      control: "text",
    },
    minWidth: {
      control: "text",
    },
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  args: { onClick: fn() },
};

export default meta;

type SelectableButtonStory = StoryObj<typeof SelectableButton>;

export const Enabled_Medium: SelectableButtonStory = {
  args: {
    label: "Demo Button",
    selected: false,
    disabled: false,
    size: "medium",
    minHeight: "22px",
    minWidth: "90px",
  },
};
