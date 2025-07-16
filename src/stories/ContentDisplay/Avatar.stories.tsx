import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "@/components";

const meta: Meta<typeof Avatar> = {
  title: "ContentDisplay/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    imageUrl: {
      control: "text",
    },
    initials: {
      control: "text",
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    color: {
      control: { type: "select" },
      options: ["light", "dark"],
    },
    shape: {
      control: { type: "select" },
      options: ["square", "circle"],
    },
    type: {
      control: { type: "select" },
      options: ["filled", "outlined"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    initials: "JC",
  },
};

export const WithImage: Story = {
  args: {
    imageUrl: "https://picsum.photos/id/237/200/300",
    initials: "JC",
  },
};

export const Circle: Story = {
  args: {
    initials: "JC",
    shape: "circle",
  },
};

export const Outlined: Story = {
  args: {
    initials: "JC",
    type: "outlined",
  },
};

export const Dark: Story = {
  args: {
    initials: "JC",
    color: "dark",
  },
};

export const Large: Story = {
  args: {
    initials: "JC",
    size: "large",
  },
};
