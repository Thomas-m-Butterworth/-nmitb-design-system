import { fn } from "@storybook/test";
import { Button } from "./Button";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Atoms/Buttons",
  component: Button,
  parameters: {
    layout: "centered",
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Button",
  },
};

export const Secondary: Story = {
  args: {
    children: "Button",
    variant: "secondary",
  },
};

export const Tertiary: Story = {
  args: {
    children: "Button",
    variant: "tertiary",
  },
};

export const Small: Story = {
  args: {
    children: "Button",
    size: "small",
  },
};

export const Large: Story = {
  args: {
    children: "Button",
    size: "large",
  },
};

export const Disabled: Story = {
  args: {
    children: "Button",
    disabled: true,
  },
};
