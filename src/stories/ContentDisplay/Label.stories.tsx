import { Label } from "@/components";
import { StoryFn } from "@storybook/react";
import {
  LABEL_COLOR_APRICOT,
  LABEL_COLOR_BLACKBERRY,
  LABEL_COLOR_BLUEBERRY,
  LABEL_COLOR_CHERRY,
  LABEL_COLOR_COCONUT,
  LABEL_COLOR_GRAPE,
  LABEL_COLOR_KIWI,
  LABEL_COLOR_MINT,
  LABEL_COLOR_WATER,
  LABEL_COLOR_WATERMELON,
  LABEL_DARK,
  LABEL_LIGHT,
} from "@/components/ContentDisplay/Label/constants";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Label> = {
  title: "ContentDisplay/Label",
  component: Label,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "El texto a mostrar en la etiqueta.",
    },
    iconLeft: {
      control: false, // Los iconos suelen ser nodos React, no se controlan directamente con argTypes
      description: "Un icono para mostrar a la izquierda del texto.",
    },
    iconRight: {
      control: false, // Los iconos suelen ser nodos React, no se controlan directamente con argTypes
      description: "Un icono para mostrar a la derecha del texto.",
    },
    uppercase: {
      control: "boolean",
      description: "Define si el texto de la etiqueta debe estar en mayúsculas.",
    },
    color: {
      control: { type: "select" },
      options: [LABEL_LIGHT, LABEL_DARK],
      description: "El esquema de color de la etiqueta (claro u oscuro).",
    },
    variant: {
      control: { type: "select" },
      options: [
        LABEL_COLOR_COCONUT,
        LABEL_COLOR_BLACKBERRY,
        LABEL_COLOR_CHERRY,
        LABEL_COLOR_APRICOT,
        LABEL_COLOR_KIWI,
        LABEL_COLOR_MINT,
        LABEL_COLOR_WATER,
        LABEL_COLOR_BLUEBERRY,
        LABEL_COLOR_GRAPE,
        LABEL_COLOR_WATERMELON,
      ],
      description: "La variante de color de la etiqueta.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const ALL_VARIANTS = [
  { label: "Coconut", variant: LABEL_COLOR_COCONUT },
  { label: "Blackberry", variant: LABEL_COLOR_BLACKBERRY },
  { label: "Cherry", variant: LABEL_COLOR_CHERRY },
  { label: "Apricot", variant: LABEL_COLOR_APRICOT },
  { label: "Kiwi", variant: LABEL_COLOR_KIWI },
  { label: "Mint", variant: LABEL_COLOR_MINT },
  { label: "Water", variant: LABEL_COLOR_WATER },
  { label: "Blueberry", variant: LABEL_COLOR_BLUEBERRY },
  { label: "Grape", variant: LABEL_COLOR_GRAPE },
  { label: "Watermelon", variant: LABEL_COLOR_WATERMELON },
];

export const Default: Story = {
  args: {
    label: "Etiqueta por defecto",
  },
};

export const WithLeftIcon: Story = {
  args: {
    label: "Etiqueta con icono izquierdo",
    iconLeft: (
      <span role="img" aria-label="emoji de casa">
        🏠
      </span>
    ),
  },
};

export const WithRightIcon: Story = {
  args: {
    label: "Etiqueta con icono derecho",
    iconRight: (
      <span role="img" aria-label="emoji de estrella">
        ⭐
      </span>
    ),
  },
};

export const AllVariantsOfLigthMode: StoryFn<typeof Label> = (args) => (
  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
    {ALL_VARIANTS.map(({ label, variant }) => (
      <Label key={variant} {...args} label={label} variant={variant as any} />
    ))}
  </div>
);

export const AllVariantsOfDarkMode: StoryFn<typeof Label> = (args) => (
  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
    {ALL_VARIANTS.map(({ label, variant }) => (
      <Label key={variant} {...args} label={label} variant={variant as any} color={LABEL_DARK} />
    ))}
  </div>
);
