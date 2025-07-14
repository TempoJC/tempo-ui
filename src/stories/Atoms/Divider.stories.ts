import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Divider } from "@/components";
import {
  DIVIDER_CONTRAST_HIGH,
  DIVIDER_CONTRAST_LOW,
  DIVIDER_CONTRAST_MEDIUM,
  DIVIDER_DARK,
  DIVIDER_HORIZONTAL,
  DIVIDER_LIGHT,
  DIVIDER_VERTICAL,
} from "@/components/Atoms/Divider/types";

const meta: Meta<typeof Divider> = {
  title: "Atoms/Divider",
  component: Divider,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    kind: {
      control: { type: "select" },
      options: [DIVIDER_HORIZONTAL, DIVIDER_VERTICAL],
    },
    color: {
      control: { type: "select" },
      options: [DIVIDER_LIGHT, DIVIDER_DARK],
    },
    contrast: {
      control: { type: "select" },
      options: [DIVIDER_CONTRAST_HIGH, DIVIDER_CONTRAST_MEDIUM, DIVIDER_CONTRAST_LOW],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  args: {
    kind: DIVIDER_HORIZONTAL,
  },
  decorators: [(Story) => React.createElement("div", { style: { width: "400px" } }, React.createElement(Story))],
};

export const Vertical: Story = {
  args: {
    kind: DIVIDER_VERTICAL,
  },
  decorators: [(Story) => React.createElement("div", { style: { height: "200px" } }, React.createElement(Story))],
};

export const Dark: Story = {
  args: {
    color: DIVIDER_DARK,
  },
  decorators: [
    (Story) =>
      React.createElement(
        "div",
        { style: { width: "400px", backgroundColor: "black", padding: "10px" } },
        React.createElement(Story),
      ),
  ],
};

export const MediumContrast: Story = {
  args: {
    contrast: DIVIDER_CONTRAST_MEDIUM,
  },
  decorators: [(Story) => React.createElement("div", { style: { width: "400px" } }, React.createElement(Story))],
};

export const LowContrast: Story = {
  args: {
    contrast: DIVIDER_CONTRAST_LOW,
  },
  decorators: [(Story) => React.createElement("div", { style: { width: "400px" } }, React.createElement(Story))],
};
