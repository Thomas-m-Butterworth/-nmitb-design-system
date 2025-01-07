import { Meta, StoryObj } from "@storybook/react";
import { GameHeader } from "./GameHeader";

const meta = {
  title: "Molecules/GameHeader",
  component: GameHeader,
} satisfies Meta<typeof GameHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Header: Story = {
  args: {
    children: "Weird Al Skankovich",
  },
};
