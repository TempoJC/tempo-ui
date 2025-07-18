import { Label } from "@/components";
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
    ), // Ejemplo simple de icono
  },
};

export const WithRightIcon: Story = {
  args: {
    label: "Etiqueta con icono derecho",
    iconRight: (
      <span role="img" aria-label="emoji de estrella">
        ⭐
      </span>
    ), // Ejemplo simple de icono
  },
};

export const DarkColor: Story = {
  args: {
    label: "Etiqueta oscura",
    color: LABEL_DARK,
  },
};

export const Lowercase: Story = {
  args: {
    label: "Etiqueta en minúsculas",
    uppercase: false,
  },
};

export const CoconutVariant: Story = {
  args: {
    label: "Coconut",
    variant: LABEL_COLOR_COCONUT,
  },
};

export const BlackberryVariant: Story = {
  args: {
    label: "Blackberry",
    variant: LABEL_COLOR_BLACKBERRY,
  },
};

export const CherryVariant: Story = {
  args: {
    label: "Cherry",
    variant: LABEL_COLOR_CHERRY,
  },
};

export const ApricotVariant: Story = {
  args: {
    label: "Apricot",
    variant: LABEL_COLOR_APRICOT,
  },
};

export const KiwiVariant: Story = {
  args: {
    label: "Kiwi",
    variant: LABEL_COLOR_KIWI,
  },
};

export const MintVariant: Story = {
  args: {
    label: "Mint",
    variant: LABEL_COLOR_MINT,
  },
};

export const WaterVariant: Story = {
  args: {
    label: "Water",
    variant: LABEL_COLOR_WATER,
  },
};

export const BlueberryVariant: Story = {
  args: {
    label: "Blueberry",
    variant: LABEL_COLOR_BLUEBERRY,
  },
};

export const GrapeVariant: Story = {
  args: {
    label: "Grape",
    variant: LABEL_COLOR_GRAPE,
  },
};

export const WatermelonVariant: Story = {
  args: {
    label: "Watermelon",
    variant: LABEL_COLOR_WATERMELON,
  },
};

export const BlueberryDarkVariant: Story = {
  args: {
    label: "Arándano Oscuro",
    variant: LABEL_COLOR_BLUEBERRY,
    color: LABEL_DARK,
  },
};
