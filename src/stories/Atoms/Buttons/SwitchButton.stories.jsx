import { SwitchButton } from "@/components";
import { fn } from "storybook/test";

const meta = {
  title: "Atoms/Buttons/SwitchButton",
  component: SwitchButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    selected: { control: "boolean" },
    disabled: { control: "boolean" },
    focused: { control: "boolean" },
    color: {
      control: { type: "select" },
      options: ["light", "dark"],
    },
    icon: { control: false },
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
    icon: "☀️",
  },
};

export const Selected = {
  args: {
    icon: "🌙",
    selected: true,
  },
};

export const Disabled = {
  args: {
    icon: "🚫",
    disabled: true,
  },
};

export const Dark = {
  args: {
    icon: "💡",
    color: "dark",
  },
};
