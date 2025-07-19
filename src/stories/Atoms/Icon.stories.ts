import { Icon } from "@/components";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "storybook/test";
import React from "react";

const meta = {
  title: "Atoms/Icon", // Organized under a logical path
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

// Helper function to render a grid of icons
const renderIcons = (group: string, iconNames: string[]) =>
  React.createElement(
    "div",
    { style: { display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" } },
    iconNames.map((name) =>
      React.createElement(
        "div",
        {
          key: name,
          style: {
            textAlign: "center",
            width: "100px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
          },
        },
        React.createElement(Icon, { group: group, name: name, width: 24, height: 24 }),
        React.createElement("p", { style: { fontSize: "12px", margin: 0, wordBreak: "break-word" } }, name),
      ),
    ),
  );

// Icon Lists by Group
const actionsIcons = [
  "add-circle-filled",
  "add-circle-outlined",
  "add-square-filled",
  "add-square-outlined",
  "add",
  "align-center",
  "align-left",
  "align-right",
  "align-text-bottom",
  "align-text-middle",
  "align-text-top",
  "boolean-exclude",
  "boolean-intersect",
  "boolean-subtract",
  "boolean-union",
  "bottom-filled",
  "bottom-outlined",
  "check-circle-filled",
  "check-circle-outlined",
  "check-square-filled",
  "check-square-outlined",
  "check",
  "clear-filled",
  "clear-outlined",
  "close-circle-filled",
  "close-circle-outlined",
  "close-large",
  "close-small",
  "close-square-filled",
  "close-square-outlined",
  "cloud-download-filled",
  "cloud-download-outlined",
  "cloud-upload-filled",
  "cloud-upload-outlined",
  "collapse-all-filled",
  "collapse-all-outlined",
  "collapse-one-filled",
  "collapse-one-outlined",
  "collapse",
  "compare-to-excel",
  "copy-sales",
  "copy",
  "delete-filled",
  "delete-outlined",
  "edit-filled",
  "edit-outlined",
  "element-align-bottom-filled",
  "element-align-bottom-outlined",
  "element-align-horizontal-filled",
  "element-align-horizontal-outlined",
  "element-align-left-filled",
  "element-align-left-outlined",
  "element-align-right-filled",
  "element-align-right-outlined",
  "element-align-top-filled",
  "element-align-top-outlined",
  "element-align-vertical-filled",
  "element-align-vertical-outlined",
  "excel-download",
  "excel-upload",
  "expand-all-filled",
  "expand-all-outlined",
  "expand-horizontal",
  "expand-one-filled",
  "expand-one-outlined",
  "expand-vertical",
  "expand",
  "export",
  "filter-filled",
  "filter-outlined",
  "flip-outlined",
  "forward",
  "full-screen-enter",
  "full-screen-exit",
  "horizontal-text",
  "import-products-outlined",
  "import",
  "left-filled",
  "left-outlined",
  "lock-filled",
  "lock-outlined",
  "log-in",
  "log-out",
  "lowercase-outlined",
  "mass-edit-filled",
  "mass-edit-outlined",
  "move",
  "numbers",
  "paste-outlined",
  "pdf-download",
  "refresh",
  "reset",
  "restart",
  "right-filled",
  "right-outlined",
  "save",
  "search",
  "send-filled",
  "send-outlined",
  "share-filled",
  "share-outlined",
  "sort-ascending",
  "sort-descending",
  "sort",
  "subtract-circle-filled",
  "subtract-circle-outlined",
  "subtract-square-filled",
  "subtract-square-outlined",
  "subtract",
  "symbols",
  "top-filled",
  "top-outlined",
  "transfer-filled",
  "transfer-outlined",
  "unlock-filled",
  "unlock-outlined",
  "upper-and-lower-case-outlined",
  "uppercase-outlined",
  "vertical-text",
  "zoom-in",
  "zoom-out",
];

const alertsIcons = [
  "help-filled",
  "help-outlined",
  "information-filled",
  "information-outlined",
  "warning-alt-filled",
  "warning-alt-outlined",
  "warning-filled",
  "warning-outlined",
];

const arrowsIcons = [
  "arrow-circle-left-filled",
  "arrow-circle-left-outlined",
  "arrow-circle-right-filled",
  "arrow-circle-right-outlined",
  "arrow-circle-up-filled",
  "arrow-circle-up-outlined",
  "arrow-down",
  "arrow-left",
  "arrow-right",
  "arrow-up",
  "arrown-circle-down-filled",
  "arrown-circle-down-outlined",
  "chevron-down",
  "chevron-left",
  "chevron-right",
  "chevron-up",
  "double-chevron-left",
  "double-chevron-right",
  "link-arrow",
  "long-arrow-down",
  "long-arrow-left",
  "long-arrow-right",
  "long-arrow-up",
  "long-arrown-right",
];

const controlsIcons = [
  "pause-circle-filled",
  "pause-circle-outlined",
  "pause-filled",
  "pause-outlined",
  "play-circle-filled",
  "play-circle-outlined",
  "play-filled",
  "play-outlined",
  "skip-backward-circle-filled",
  "skip-backward-circle-outlined",
  "skip-backward-filled",
  "skip-backward-outlined",
  "skip-forward-circle-filled",
  "skip-forward-circle-outlined",
  "skip-forward-filled",
  "skip-forward-outlined",
  "stop-circle-filled",
  "stop-circle-outlined",
  "stop-filled",
  "stop-outlined",
  "volume-down-filled",
  "volume-down-outlined",
  "volume-filled",
  "volume-mute-filled",
  "volume-mute-outlined",
  "volume-outlined",
  "volume-up-filled",
  "volume-up-outlined",
];

const socialMediaIcons = [
  "call-me-back-filled",
  "call-me-back-outlined",
  "facebook-filled",
  "facebook-outlined",
  "google-filled",
  "google-outlined",
  "instagram-filled",
  "instagram-outlined",
  "pinterest-filled",
  "pinterest-outlined",
  "rrss-filled",
  "rrss-outlined",
  "tiktok-filled",
];

// Stories for each icon group
export const Actions: Story = {
  args: {
    group: "actions",
    name: actionsIcons[0],
  },
  render: () => renderIcons("actions", actionsIcons),
};

export const Alerts: Story = {
  args: {
    group: "alerts",
    name: alertsIcons[0],
  },
  render: () => renderIcons("alerts", alertsIcons),
};

export const Arrows: Story = {
  args: {
    group: "arrows",
    name: arrowsIcons[0],
  },
  render: () => renderIcons("arrows", arrowsIcons),
};

export const Controls: Story = {
  args: {
    group: "controls",
    name: controlsIcons[0],
  },
  render: () => renderIcons("controls", controlsIcons),
};

export const SocialMedia: Story = {
  args: {
    group: "social-media",
    name: socialMediaIcons[0],
  },
  render: () => renderIcons("social-media", socialMediaIcons),
};

// --- Special Stories ---

export const ClickableIcon: Story = {
  args: {
    group: "actions",
    name: "close-large",
    onClick: fn(),
  },
};

export const WithCustomSize: Story = {
  args: {
    group: "actions",
    name: "cloud-download-outlined",
    width: 32,
    height: 32,
    className: "my-larger-icon",
  },
};

export const WithCustomClassName: Story = {
  args: {
    group: "actions",
    name: "copy-sales",
    className: "text-red-500",
  },
};

export const WithTestId: Story = {
  args: {
    group: "actions",
    name: "close-small",
    testId: "my-component",
  },
};

export const ErrorState: Story = {
  args: {
    group: "non-existent-group",
    name: "non-existent-icon",
  },
};
