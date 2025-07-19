import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Loader } from "@/components";
import {
  LOADER_CIRCULAR,
  LOADER_BAR,
  LOADER_DARK,
  LOADER_LIGHT,
  LOADER_CIRCULAR_LARGE,
  LOADER_CIRCULAR_MEDIUM,
  LOADER_CIRCULAR_SMALL,
} from "@/components/Feedback/Loader/constants";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Feedback/Loader", // Organized under a 'Feedback' category
  component: Loader,
  parameters: {
    layout: "centered", // Center the component in the Canvas
  },
  tags: ["autodocs"], // Automatically generate documentation
  argTypes: {
    kind: {
      control: { type: "select" },
      options: [LOADER_CIRCULAR, LOADER_BAR], // Use imported constants for options
      description: "Loader kind.",
    },
    size: {
      control: { type: "select" },
      options: [LOADER_CIRCULAR_SMALL, LOADER_CIRCULAR_MEDIUM, LOADER_CIRCULAR_LARGE],
      description: "Loader size, only applies to the `circular` kind.",
    },
    color: {
      control: { type: "select" },
      options: [LOADER_LIGHT, LOADER_DARK],
      description: "Sets the color scheme of the component.",
    },
    className: { control: "text", description: "Additional CSS classes." },
    testId: { control: "text", description: "Data-testid attribute for testing." },
  },
  // Default args can be set here if desired, but we'll define them per story for clarity
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

// Circular Loaders
// These stories demonstrate the different sizes and colors for the circular loader.

export const CircularSmall: Story = {
  args: {
    kind: LOADER_CIRCULAR,
    size: LOADER_CIRCULAR_SMALL,
    color: LOADER_LIGHT,
  },
};

export const CircularMedium: Story = {
  args: {
    kind: LOADER_CIRCULAR,
    size: LOADER_CIRCULAR_MEDIUM,
    color: LOADER_LIGHT,
  },
};

export const CircularLarge: Story = {
  args: {
    kind: LOADER_CIRCULAR,
    size: LOADER_CIRCULAR_LARGE,
    color: LOADER_LIGHT,
  },
};

export const CircularDark: Story = {
  args: {
    kind: LOADER_CIRCULAR,
    size: LOADER_CIRCULAR_MEDIUM, // Using medium as a default size for dark
    color: LOADER_DARK,
  },
};

// Bar Loader
// This story showcases the bar-style loader. Note that `size` does not apply to this kind.

export const Bar: Story = {
  args: {
    kind: LOADER_BAR,
    color: LOADER_LIGHT,
  },
  decorators: [
    (Story) => React.createElement("div", { style: { width: "400px", padding: "10px" } }, React.createElement(Story)),
  ],
};

export const BarDark: Story = {
  args: {
    kind: LOADER_BAR,
    color: LOADER_DARK,
  },
  decorators: [
    (Story) => React.createElement("div", { style: { width: "400px", padding: "10px" } }, React.createElement(Story)),
  ],
};

// Custom Class Name
// You can also apply custom CSS classes to the loader for additional styling.

export const WithCustomClass: Story = {
  args: {
    kind: LOADER_CIRCULAR,
    size: LOADER_CIRCULAR_MEDIUM,
    color: LOADER_LIGHT,
    className: "my-custom-loader-class", // Add a custom class for demonstration
  },
};
