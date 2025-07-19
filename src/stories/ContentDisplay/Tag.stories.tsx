import { Tag, TagProps } from "@/components";
import {
  TAG_COLOR_APRICOT,
  TAG_COLOR_BLACKBERRY,
  TAG_COLOR_BLUEBERRY,
  TAG_COLOR_CHERRY,
  TAG_COLOR_COCONUT,
  TAG_COLOR_GRAPE,
  TAG_COLOR_KIWI,
  TAG_COLOR_MINT,
  TAG_COLOR_WATER,
  TAG_COLOR_WATERMELON,
  TAG_DARK,
  TAG_LIGHT,
} from "@/components/ContentDisplay/Tag/constants";
import type { Meta, StoryObj, StoryFn } from "@storybook/react";

const meta: Meta<typeof Tag> = {
  title: "ContentDisplay/Tag",
  component: Tag,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "El texto a mostrar en la etiqueta.",
    },
    onRemoveButtonClick: {
      action: "onRemoveButtonClick",
      description: "Función que se llama cuando se hace clic en el botón de eliminar.",
    },
    readOnly: {
      control: "boolean",
      description: "Si es `true`, el botón de eliminar no se mostrará. Por defecto es `true`.",
      defaultValue: { summary: true },
    },
    color: {
      control: { type: "select" },
      options: [TAG_LIGHT, TAG_DARK],
      description: "El esquema de color de la etiqueta (claro u oscuro).",
    },
    variant: {
      control: { type: "select" },
      options: [
        TAG_COLOR_COCONUT,
        TAG_COLOR_BLACKBERRY,
        TAG_COLOR_CHERRY,
        TAG_COLOR_APRICOT,
        TAG_COLOR_KIWI,
        TAG_COLOR_MINT,
        TAG_COLOR_WATER,
        TAG_COLOR_BLUEBERRY,
        TAG_COLOR_GRAPE,
        TAG_COLOR_WATERMELON,
      ],
      description: "La variante de color de la etiqueta.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const ALL_VARIANTS: { label: string; variant: TagProps["variant"] }[] = [
  { label: "Coconut", variant: TAG_COLOR_COCONUT },
  { label: "Blackberry", variant: TAG_COLOR_BLACKBERRY },
  { label: "Cherry", variant: TAG_COLOR_CHERRY },
  { label: "Apricot", variant: TAG_COLOR_APRICOT },
  { label: "Kiwi", variant: TAG_COLOR_KIWI },
  { label: "Mint", variant: TAG_COLOR_MINT },
  { label: "Water", variant: TAG_COLOR_WATER },
  { label: "Blueberry", variant: TAG_COLOR_BLUEBERRY },
  { label: "Grape", variant: TAG_COLOR_GRAPE },
  { label: "Watermelon", variant: TAG_COLOR_WATERMELON },
];

export const Default: Story = {
  args: {
    label: "Etiqueta por defecto",
  },
};

export const Removable: Story = {
  args: {
    label: "Etiqueta eliminable",
    readOnly: false,
  },
};

export const AllVariants: StoryFn<typeof Tag> = (args) => (
  <div style={{ display: "flex", flexDirection: "row", gap: "2px" }}>
    {ALL_VARIANTS.map(({ label, variant }) => (
      <Tag
        key={variant}
        {...args}
        label={label}
        variant={variant}
        readOnly={false}
        onClick={() => {
          console.log("click");
        }}
      />
    ))}
  </div>
);
AllVariants.argTypes = {
  label: { table: { disable: true } },
  variant: { table: { disable: true } },
  color: { table: { disable: true } },
};
