import { Icon } from "@/components";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "storybook/test";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Atoms/Icon", // Organized under a logical path
  component: Icon,
  parameters: {
    layout: "centered", // Center the component in the Canvas
  },
  tags: ["autodocs"], // Automatically generate documentation
  argTypes: {
    group: {
      control: "text",
      description: "The icon group (e.g., 'actions', 'navigation').",
      defaultValue: "actions", // Provide a default for the control
    },
    name: {
      control: "text",
      description: "The specific icon name (e.g., 'add', 'arrow-right').",
      defaultValue: "add", // Provide a default for the control
    },
    className: {
      control: "text",
      description: "Additional CSS class to be applied to the component.",
    },
    testId: {
      control: "text",
      description: "Sets the `data-testid` attribute.",
    },
    errorFallback: {
      control: false, // Hide from controls as it's a React Element
      description: "Fallback component to render on error.",
    },
    onClick: { action: "clicked" }, // Log click events
    // Assuming other SVG props from ComponentPropsWithoutRef<'svg'> can also be passed and we might want to expose some:
    width: { control: "number" },
    height: { control: "number" },
    viewBox: { control: "text" },
  },
  args: {
    // Default args for the story, useful for actions
    onClick: fn(),
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Icon Stories
export const AddIcon: Story = {
  args: {
    group: "actions",
    name: "add",
  },
};

export const SearchIcon: Story = {
  args: {
    group: "actions",
    name: "search",
  },
};

export const ArrowRightIcon: Story = {
  args: {
    group: "arrows",
    name: "arrow-right",
  },
};

// ---

// Interactive and Utility Stories

export const ClickableIcon: Story = {
  args: {
    group: "actions",
    name: "close-large",
    onClick: fn(), // Use fn() to log clicks in the actions panel
  },
};

export const WithCustomSize: Story = {
  args: {
    group: "actions",
    name: "cloud-download-outlined",
    width: 32, // Override default width
    height: 32, // Override default height
    className: "my-larger-icon", // Example of adding a custom class for styling
  },
};

export const WithCustomClassName: Story = {
  args: {
    group: "actions",
    name: "copy-sales",
    className: "text-red-500", // Example: if you use Tailwind CSS or similar
  },
};

export const WithTestId: Story = {
  args: {
    group: "actions",
    name: "close-small",
    testId: "my-icon-component",
  },
};

// ---

// Error Handling Story
// This story demonstrates the error fallback mechanism.
// For this to show the fallback, 'useInlineIcons' would need to return an error.
// In Storybook, you might mock 'useInlineIcons' to force an error for this story.
export const ErrorState: Story = {
  args: {
    group: "non-existent-group", // Use a group/name that won't resolve
    name: "non-existent-icon",
    // You can also provide a custom errorFallback here if you want to test it
    // errorFallback: <span>🚫</span>,
  },
};
