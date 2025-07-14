import type { Meta, StoryObj } from "@storybook/react";
import {
  Badge,
  BADGE_COLOR_APRICOT,
  BADGE_COLOR_BLACKBERRY,
  BADGE_COLOR_BLUEBERRY,
  BADGE_COLOR_CHERRY,
  BADGE_COLOR_COCONUT,
  BADGE_COLOR_GRAPE,
  BADGE_COLOR_KIWI,
  BADGE_COLOR_MINT,
  BADGE_COLOR_WATER,
  BADGE_COLOR_WATERMELON,
} from "@/components";

const meta: Meta<typeof Badge> = {
  title: "ContentDisplay/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    text: {
      control: "text",
    },
    size: {
      control: { type: "select" },
      options: ["small", "large"],
    },
    color: {
      control: { type: "select" },
      options: ["light", "dark"],
    },
    kind: {
      control: { type: "select" },
      options: ["circular", "autolayout"],
    },
    variant: {
      control: { type: "select" },
      options: [
        BADGE_COLOR_COCONUT,
        BADGE_COLOR_BLACKBERRY,
        BADGE_COLOR_CHERRY,
        BADGE_COLOR_APRICOT,
        BADGE_COLOR_KIWI,
        BADGE_COLOR_MINT,
        BADGE_COLOR_WATER,
        BADGE_COLOR_BLUEBERRY,
        BADGE_COLOR_GRAPE,
        BADGE_COLOR_WATERMELON,
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "1",
  },
};

export const Autolayout: Story = {
  args: {
    text: "Texto de prueba",
    kind: "autolayout",
  },
};

export const Small: Story = {
  args: {
    text: "1",
    size: "small",
  },
};

export const Dark: Story = {
  args: {
    text: "1",
    color: "dark",
  },
};

export const Grape: Story = {
  args: {
    text: "1",
    variant: BADGE_COLOR_GRAPE,
  },
};
