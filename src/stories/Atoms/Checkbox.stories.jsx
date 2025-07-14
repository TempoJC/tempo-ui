import { Checkbox } from "@/components";
import { fn } from "storybook/test";

const meta = {
  title: "Atoms/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    color: {
      control: { type: "select" },
      options: ["light", "dark"],
    },
    disabled: { control: "boolean" },
    readOnly: { control: "boolean" },
    indeterminate: { control: "boolean" },
    value: { control: "boolean" },
    onChange: { action: "changed" },
    onClick: { action: "clicked" },
  },
  args: {
    onChange: fn(),
    onClick: fn(),
  },
};

export default meta;

export const Default = {
  args: {
    label: "Default Checkbox",
    value: false,
  },
};

export const Checked = {
  args: {
    label: "Checked Checkbox",
    value: true,
  },
};

export const Indeterminate = {
  args: {
    label: "Indeterminate Checkbox",
    indeterminate: true,
  },
};

export const Disabled = {
  args: {
    label: "Disabled Checkbox",
    disabled: true,
  },
};

export const ReadOnly = {
  args: {
    label: "Read Only Checkbox",
    readOnly: true,
  },
};

export const Dark = {
  args: {
    label: "Dark Checkbox",
    color: "dark",
  },
};
