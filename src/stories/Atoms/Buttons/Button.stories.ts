import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { Button } from "@/components";

const meta = {
  title: "Atoms/Buttons/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    kind: {
      control: { type: "select" },
      options: ["standard", "primary", "danger"],
    },
    color: {
      control: { type: "select" },
      options: ["light", "dark"],
    },
    disabled: { control: "boolean" },
    fullWidth: { control: "boolean" },
    loading: { control: "boolean" },
    extra: { control: "boolean" },
    dropdown: { control: "boolean" },
    dropdownVisible: { control: "boolean" },
    label: { control: "text" },
    iconStart: { control: false },
    iconEnd: { control: false },
    onClick: { action: "clicked" },
    onMouseDown: { action: "mouse down" },
    onMouseUp: { action: "mouse up" },
    onMouseLeave: { action: "mouse leave" },
    onTouchStart: { action: "touch start" },
    onTouchEnd: { action: "touch end" },
  },
  args: {
    onClick: fn(),
    onMouseDown: fn(),
    onMouseUp: fn(),
    onMouseLeave: fn(),
    onTouchStart: fn(),
    onTouchEnd: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Start Basic Button States

export const Default: Story = {
  args: {
    label: "Default Button",
    kind: "standard",
    color: "light",
    type: "button",
  },
};

export const Primary: Story = {
  args: {
    label: "Primary Button",
    kind: "primary",
    color: "light",
  },
};

export const Danger: Story = {
  args: {
    label: "Danger Button",
    kind: "danger",
    color: "light",
  },
};

export const DarkColor: Story = {
  args: {
    label: "Dark Button",
    color: "dark",
  },
  decorators: [
    (Story) => React.createElement("div", { style: { backgroundColor: "black" } }, React.createElement(Story)),
  ],
};

export const Disabled: Story = {
  args: {
    label: "Disabled Button",
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    label: "Loading Button",
    loading: true,
  },
};

export const LoadingNoLabel: Story = {
  args: {
    loading: true,
    title: "Uploading...",
  },
};

// Layout and Sizing

// Examples of how the button behaves with `fullWidth` and `extra` properties.

export const FullWidth: Story = {
  args: {
    label: "Full Width Button",
    fullWidth: true,
  },
};

export const ExtraSize: Story = {
  args: {
    label: "Extra Size Button",
    extra: true,
  },
};

// Dropdown Buttons

// These stories demonstrate the `dropdown` functionality.

export const DropdownClosed: Story = {
  args: {
    label: "Dropdown Button (Closed)",
    dropdown: true,
    dropdownVisible: false,
  },
};

export const DropdownOpen: Story = {
  args: {
    label: "Dropdown Button (Open)",
    dropdown: true,
    dropdownVisible: true,
  },
};
