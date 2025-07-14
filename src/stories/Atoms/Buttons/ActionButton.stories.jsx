import { ActionButton } from "@/components";
import { fn } from "storybook/test";

const meta = {
  title: "Atoms/Buttons/ActionButton",
  component: ActionButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    kind: {
      control: { type: "select" },
      options: ["standard", "danger"],
    },
    color: {
      control: { type: "select" },
      options: ["light", "dark"],
    },
    disabled: { control: "boolean" },
    fullWidth: { control: "boolean" },
    loading: { control: "boolean" },
    dropdown: { control: "boolean" },
    dropdownVisible: { control: "boolean" },
    label: { control: "text" },
    hideLabel: { control: "boolean" },
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
};

export default meta;

export const Default = {
  args: {
    label: "Action Button",
    kind: "standard",
    color: "light",
  },
};

export const Danger = {
  args: {
    label: "Danger Button",
    kind: "danger",
  },
};

export const Dark = {
  args: {
    label: "Dark Button",
    color: "dark",
  },
};

export const Disabled = {
  args: {
    label: "Disabled Button",
    disabled: true,
  },
};

export const Loading = {
  args: {
    label: "Loading Button",
    loading: true,
  },
};

export const FullWidth = {
  args: {
    label: "Full Width Button",
    fullWidth: true,
  },
};

export const WithIcon = {
  args: {
    label: "Icon Button",
    iconStart: "❤️",
  },
};

export const IconOnly = {
  args: {
    iconStart: "❤️",
    title: "Icon only button",
  },
};

export const Dropdown = {
  args: {
    label: "Dropdown Button",
    dropdown: true,
  },
};
