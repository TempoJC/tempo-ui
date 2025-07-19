import type { Meta, StoryFn, StoryObj } from "@storybook/react";
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

const ALL_BADGE_VARIANTS = [
  { label: "Coconut", variant: BADGE_COLOR_COCONUT },
  { label: "Blackberry", variant: BADGE_COLOR_BLACKBERRY },
  { label: "Cherry", variant: BADGE_COLOR_CHERRY },
  { label: "Apricot", variant: BADGE_COLOR_APRICOT },
  { label: "Kiwi", variant: BADGE_COLOR_KIWI },
  { label: "Mint", variant: BADGE_COLOR_MINT },
  { label: "Water", variant: BADGE_COLOR_WATER },
  { label: "Blueberry", variant: BADGE_COLOR_BLUEBERRY },
  { label: "Grape", variant: BADGE_COLOR_GRAPE },
  { label: "Watermelon", variant: BADGE_COLOR_WATERMELON },
];

export const AllColorVariantsOfLigthMode: StoryFn<typeof Badge> = (args) => (
  <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
    {ALL_BADGE_VARIANTS.map(({ label, variant }) => (
      <div key={variant} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "5px" }}>
        <Badge {...args} variant={variant as any} />
        <span style={{ fontSize: "12px" }}>{label}</span>
      </div>
    ))}
  </div>
);

AllColorVariantsOfLigthMode.args = {
  text: "1",
};

export const AllColorVariantsOfDarkMode: StoryFn<typeof Badge> = (args) => (
  <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
    {ALL_BADGE_VARIANTS.map(({ label, variant }) => (
      <div key={variant} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "5px" }}>
        <Badge {...args} variant={variant as any} color="dark" />
        <span style={{ fontSize: "12px" }}>{label}</span>
      </div>
    ))}
  </div>
);

AllColorVariantsOfDarkMode.args = {
  text: "2",
};
