import { Icon } from "@/components";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "storybook/test";

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

// ---

// All Icon Stories organized by category
// Auto-generated from src/components/Atoms/Icons/Svgs

// Auto-generated icons from src/components/Atoms/Icons/Svgs

// Actions
export const AddCircleFilledIcon: Story = { args: { group: "actions", name: "add-circle-filled" } };
export const AddCircleOutlinedIcon: Story = { args: { group: "actions", name: "add-circle-outlined" } };
export const AddSquareFilledIcon: Story = { args: { group: "actions", name: "add-square-filled" } };
export const AddSquareOutlinedIcon: Story = { args: { group: "actions", name: "add-square-outlined" } };
export const AddIcon: Story = { args: { group: "actions", name: "add" } };
export const AlignCenterIcon: Story = { args: { group: "actions", name: "align-center" } };
export const AlignLeftIcon: Story = { args: { group: "actions", name: "align-left" } };
export const AlignRightIcon: Story = { args: { group: "actions", name: "align-right" } };
export const AlignTextBottomIcon: Story = { args: { group: "actions", name: "align-text-bottom" } };
export const AlignTextMiddleIcon: Story = { args: { group: "actions", name: "align-text-middle" } };
export const AlignTextTopIcon: Story = { args: { group: "actions", name: "align-text-top" } };
export const BooleanExcludeIcon: Story = { args: { group: "actions", name: "boolean-exclude" } };
export const BooleanIntersectIcon: Story = { args: { group: "actions", name: "boolean-intersect" } };
export const BooleanSubtractIcon: Story = { args: { group: "actions", name: "boolean-subtract" } };
export const BooleanUnionIcon: Story = { args: { group: "actions", name: "boolean-union" } };
export const BottomFilledIcon: Story = { args: { group: "actions", name: "bottom-filled" } };
export const BottomOutlinedIcon: Story = { args: { group: "actions", name: "bottom-outlined" } };
export const CheckCircleFilledIcon: Story = { args: { group: "actions", name: "check-circle-filled" } };
export const CheckCircleOutlinedIcon: Story = { args: { group: "actions", name: "check-circle-outlined" } };
export const CheckSquareFilledIcon: Story = { args: { group: "actions", name: "check-square-filled" } };
export const CheckSquareOutlinedIcon: Story = { args: { group: "actions", name: "check-square-outlined" } };
export const CheckIcon: Story = { args: { group: "actions", name: "check" } };
export const ClearFilledIcon: Story = { args: { group: "actions", name: "clear-filled" } };
export const ClearOutlinedIcon: Story = { args: { group: "actions", name: "clear-outlined" } };
export const CloseCircleFilledIcon: Story = { args: { group: "actions", name: "close-circle-filled" } };
export const CloseCircleOutlinedIcon: Story = { args: { group: "actions", name: "close-circle-outlined" } };
export const CloseLargeIcon: Story = { args: { group: "actions", name: "close-large" } };
export const CloseSmallIcon: Story = { args: { group: "actions", name: "close-small" } };
export const CloseSquareFilledIcon: Story = { args: { group: "actions", name: "close-square-filled" } };
export const CloseSquareOutlinedIcon: Story = { args: { group: "actions", name: "close-square-outlined" } };
export const CloudDownloadFilledIcon: Story = { args: { group: "actions", name: "cloud-download-filled" } };
export const CloudDownloadOutlinedIcon: Story = { args: { group: "actions", name: "cloud-download-outlined" } };
export const CloudUploadFilledIcon: Story = { args: { group: "actions", name: "cloud-upload-filled" } };
export const CloudUploadOutlinedIcon: Story = { args: { group: "actions", name: "cloud-upload-outlined" } };
export const CollapseAllFilledIcon: Story = { args: { group: "actions", name: "collapse-all-filled" } };
export const CollapseAllOutlinedIcon: Story = { args: { group: "actions", name: "collapse-all-outlined" } };
export const CollapseOneFilledIcon: Story = { args: { group: "actions", name: "collapse-one-filled" } };
export const CollapseOneOutlinedIcon: Story = { args: { group: "actions", name: "collapse-one-outlined" } };
export const CollapseIcon: Story = { args: { group: "actions", name: "collapse" } };
export const CompareToExcelIcon: Story = { args: { group: "actions", name: "compare-to-excel" } };
export const CopySalesIcon: Story = { args: { group: "actions", name: "copy-sales" } };
export const CopyIcon: Story = { args: { group: "actions", name: "copy" } };
export const DeleteFilledIcon: Story = { args: { group: "actions", name: "delete-filled" } };
export const DeleteOutlinedIcon: Story = { args: { group: "actions", name: "delete-outlined" } };
export const EditFilledIcon: Story = { args: { group: "actions", name: "edit-filled" } };
export const EditOutlinedIcon: Story = { args: { group: "actions", name: "edit-outlined" } };
export const ElementAlignBottomFilledIcon: Story = {
  args: { group: "actions", name: "element-align-bottom-filled" },
};
export const ElementAlignBottomOutlinedIcon: Story = {
  args: { group: "actions", name: "element-align-bottom-outlined" },
};
export const ElementAlignHorizontalFilledIcon: Story = {
  args: { group: "actions", name: "element-align-horizontal-filled" },
};
export const ElementAlignHorizontalOutlinedIcon: Story = {
  args: { group: "actions", name: "element-align-horizontal-outlined" },
};
export const ElementAlignLeftFilledIcon: Story = { args: { group: "actions", name: "element-align-left-filled" } };
export const ElementAlignLeftOutlinedIcon: Story = {
  args: { group: "actions", name: "element-align-left-outlined" },
};
export const ElementAlignRightFilledIcon: Story = {
  args: { group: "actions", name: "element-align-right-filled" },
};
export const ElementAlignRightOutlinedIcon: Story = {
  args: { group: "actions", name: "element-align-right-outlined" },
};
export const ElementAlignTopFilledIcon: Story = { args: { group: "actions", name: "element-align-top-filled" } };
export const ElementAlignTopOutlinedIcon: Story = {
  args: { group: "actions", name: "element-align-top-outlined" },
};
export const ElementAlignVerticalFilledIcon: Story = {
  args: { group: "actions", name: "element-align-vertical-filled" },
};
export const ElementAlignVerticalOutlinedIcon: Story = {
  args: { group: "actions", name: "element-align-vertical-outlined" },
};
export const ExcelDownloadIcon: Story = { args: { group: "actions", name: "excel-download" } };
export const ExcelUploadIcon: Story = { args: { group: "actions", name: "excel-upload" } };
export const ExpandAllFilledIcon: Story = { args: { group: "actions", name: "expand-all-filled" } };
export const ExpandAllOutlinedIcon: Story = { args: { group: "actions", name: "expand-all-outlined" } };
export const ExpandHorizontalIcon: Story = { args: { group: "actions", name: "expand-horizontal" } };
export const ExpandOneFilledIcon: Story = { args: { group: "actions", name: "expand-one-filled" } };
export const ExpandOneOutlinedIcon: Story = { args: { group: "actions", name: "expand-one-outlined" } };
export const ExpandVerticalIcon: Story = { args: { group: "actions", name: "expand-vertical" } };
export const ExpandIcon: Story = { args: { group: "actions", name: "expand" } };
export const ExportIcon: Story = { args: { group: "actions", name: "export" } };
export const FilterFilledIcon: Story = { args: { group: "actions", name: "filter-filled" } };
export const FilterOutlinedIcon: Story = { args: { group: "actions", name: "filter-outlined" } };
export const FlipOutlinedIcon: Story = { args: { group: "actions", name: "flip-outlined" } };
export const ForwardIcon: Story = { args: { group: "actions", name: "forward" } };
export const FullScreenEnterIcon: Story = { args: { group: "actions", name: "full-screen-enter" } };
export const FullScreenExitIcon: Story = { args: { group: "actions", name: "full-screen-exit" } };
export const HorizontalTextIcon: Story = { args: { group: "actions", name: "horizontal-text" } };
export const ImportProductsOutlinedIcon: Story = { args: { group: "actions", name: "import-products-outlined" } };
export const ImportIcon: Story = { args: { group: "actions", name: "import" } };
export const LeftFilledIcon: Story = { args: { group: "actions", name: "left-filled" } };
export const LeftOutlinedIcon: Story = { args: { group: "actions", name: "left-outlined" } };
export const LockFilledIcon: Story = { args: { group: "actions", name: "lock-filled" } };
export const LockOutlinedIcon: Story = { args: { group: "actions", name: "lock-outlined" } };
export const LogInIcon: Story = { args: { group: "actions", name: "log-in" } };
export const LogOutIcon: Story = { args: { group: "actions", name: "log-out" } };
export const LowercaseOutlinedIcon: Story = { args: { group: "actions", name: "lowercase-outlined" } };
export const MassEditFilledIcon: Story = { args: { group: "actions", name: "mass-edit-filled" } };
export const MassEditOutlinedIcon: Story = { args: { group: "actions", name: "mass-edit-outlined" } };
export const MoveIcon: Story = { args: { group: "actions", name: "move" } };
export const NumbersIcon: Story = { args: { group: "actions", name: "numbers" } };
export const PasteOutlinedIcon: Story = { args: { group: "actions", name: "paste-outlined" } };
export const PdfDownloadIcon: Story = { args: { group: "actions", name: "pdf-download" } };
export const RefreshIcon: Story = { args: { group: "actions", name: "refresh" } };
export const ResetIcon: Story = { args: { group: "actions", name: "reset" } };
export const RestartIcon: Story = { args: { group: "actions", name: "restart" } };
export const RightFilledIcon: Story = { args: { group: "actions", name: "right-filled" } };
export const RightOutlinedIcon: Story = { args: { group: "actions", name: "right-outlined" } };
export const SaveIcon: Story = { args: { group: "actions", name: "save" } };
export const SearchIcon: Story = { args: { group: "actions", name: "search" } };
export const SendFilledIcon: Story = { args: { group: "actions", name: "send-filled" } };
export const SendOutlinedIcon: Story = { args: { group: "actions", name: "send-outlined" } };
export const ShareFilledIcon: Story = { args: { group: "actions", name: "share-filled" } };
export const ShareOutlinedIcon: Story = { args: { group: "actions", name: "share-outlined" } };
export const SortAscendingIcon: Story = { args: { group: "actions", name: "sort-ascending" } };
export const SortDescendingIcon: Story = { args: { group: "actions", name: "sort-descending" } };
export const SortIcon: Story = { args: { group: "actions", name: "sort" } };
export const SubtractCircleFilledIcon: Story = { args: { group: "actions", name: "subtract-circle-filled" } };
export const SubtractCircleOutlinedIcon: Story = { args: { group: "actions", name: "subtract-circle-outlined" } };
export const SubtractSquareFilledIcon: Story = { args: { group: "actions", name: "subtract-square-filled" } };
export const SubtractSquareOutlinedIcon: Story = { args: { group: "actions", name: "subtract-square-outlined" } };
export const SubtractIcon: Story = { args: { group: "actions", name: "subtract" } };
export const SymbolsIcon: Story = { args: { group: "actions", name: "symbols" } };
export const TopFilledIcon: Story = { args: { group: "actions", name: "top-filled" } };
export const TopOutlinedIcon: Story = { args: { group: "actions", name: "top-outlined" } };
export const TransferFilledIcon: Story = { args: { group: "actions", name: "transfer-filled" } };
export const TransferOutlinedIcon: Story = { args: { group: "actions", name: "transfer-outlined" } };
export const UnlockFilledIcon: Story = { args: { group: "actions", name: "unlock-filled" } };
export const UnlockOutlinedIcon: Story = { args: { group: "actions", name: "unlock-outlined" } };
export const UpperAndLowerCaseOutlinedIcon: Story = {
  args: { group: "actions", name: "upper-and-lower-case-outlined" },
};
export const UppercaseOutlinedIcon: Story = { args: { group: "actions", name: "uppercase-outlined" } };
export const VerticalTextIcon: Story = { args: { group: "actions", name: "vertical-text" } };
export const ZoomInIcon: Story = { args: { group: "actions", name: "zoom-in" } };
export const ZoomOutIcon: Story = { args: { group: "actions", name: "zoom-out" } };

// Alerts
export const HelpFilledIcon: Story = { args: { group: "alerts", name: "help-filled" } };
export const HelpOutlinedIcon: Story = { args: { group: "alerts", name: "help-outlined" } };
export const InformationFilledIcon: Story = { args: { group: "alerts", name: "information-filled" } };
export const InformationOutlinedIcon: Story = { args: { group: "alerts", name: "information-outlined" } };
export const WarningAltFilledIcon: Story = { args: { group: "alerts", name: "warning-alt-filled" } };
export const WarningAltOutlinedIcon: Story = { args: { group: "alerts", name: "warning-alt-outlined" } };
export const WarningFilledIcon: Story = { args: { group: "alerts", name: "warning-filled" } };
export const WarningOutlinedIcon: Story = { args: { group: "alerts", name: "warning-outlined" } };

// Arrows
export const ArrowCircleLeftFilledIcon: Story = { args: { group: "arrows", name: "arrow-circle-left-filled" } };
export const ArrowCircleLeftOutlinedIcon: Story = {
  args: { group: "arrows", name: "arrow-circle-left-outlined" },
};
export const ArrowCircleRightFilledIcon: Story = { args: { group: "arrows", name: "arrow-circle-right-filled" } };
export const ArrowCircleRightOutlinedIcon: Story = {
  args: { group: "arrows", name: "arrow-circle-right-outlined" },
};
export const ArrowCircleUpFilledIcon: Story = { args: { group: "arrows", name: "arrow-circle-up-filled" } };
export const ArrowCircleUpOutlinedIcon: Story = { args: { group: "arrows", name: "arrow-circle-up-outlined" } };
export const ArrowDownIcon: Story = { args: { group: "arrows", name: "arrow-down" } };
export const ArrowLeftIcon: Story = { args: { group: "arrows", name: "arrow-left" } };
export const ArrowRightIcon: Story = { args: { group: "arrows", name: "arrow-right" } };
export const ArrowUpIcon: Story = { args: { group: "arrows", name: "arrow-up" } };
export const ArrownCircleDownFilledIcon: Story = { args: { group: "arrows", name: "arrown-circle-down-filled" } };
export const ArrownCircleDownOutlinedIcon: Story = {
  args: { group: "arrows", name: "arrown-circle-down-outlined" },
};
export const ChevronDownIcon: Story = { args: { group: "arrows", name: "chevron-down" } };
export const ChevronLeftIcon: Story = { args: { group: "arrows", name: "chevron-left" } };
export const ChevronRightIcon: Story = { args: { group: "arrows", name: "chevron-right" } };
export const ChevronUpIcon: Story = { args: { group: "arrows", name: "chevron-up" } };
export const DoubleChevronLeftIcon: Story = { args: { group: "arrows", name: "double-chevron-left" } };
export const DoubleChevronRightIcon: Story = { args: { group: "arrows", name: "double-chevron-right" } };
export const LinkArrowIcon: Story = { args: { group: "arrows", name: "link-arrow" } };
export const LongArrowDownIcon: Story = { args: { group: "arrows", name: "long-arrow-down" } };
export const LongArrowLeftIcon: Story = { args: { group: "arrows", name: "long-arrow-left" } };
export const LongArrowRightIcon: Story = { args: { group: "arrows", name: "long-arrow-right" } };
export const LongArrowUpIcon: Story = { args: { group: "arrows", name: "long-arrow-up" } };
export const LongArrownRightIcon: Story = { args: { group: "arrows", name: "long-arrown-right" } };

// Controls
export const PauseCircleFilledIcon: Story = { args: { group: "controls", name: "pause-circle-filled" } };
export const PauseCircleOutlinedIcon: Story = { args: { group: "controls", name: "pause-circle-outlined" } };
export const PauseFilledIcon: Story = { args: { group: "controls", name: "pause-filled" } };
export const PauseOutlinedIcon: Story = { args: { group: "controls", name: "pause-outlined" } };
export const PlayCircleFilledIcon: Story = { args: { group: "controls", name: "play-circle-filled" } };
export const PlayCircleOutlinedIcon: Story = { args: { group: "controls", name: "play-circle-outlined" } };
export const PlayFilledIcon: Story = { args: { group: "controls", name: "play-filled" } };
export const PlayOutlinedIcon: Story = { args: { group: "controls", name: "play-outlined" } };
export const SkipBackwardCircleFilledIcon: Story = {
  args: { group: "controls", name: "skip-backward-circle-filled" },
};
export const SkipBackwardCircleOutlinedIcon: Story = {
  args: { group: "controls", name: "skip-backward-circle-outlined" },
};
export const SkipBackwardFilledIcon: Story = { args: { group: "controls", name: "skip-backward-filled" } };
export const SkipBackwardOutlinedIcon: Story = { args: { group: "controls", name: "skip-backward-outlined" } };
export const SkipForwardCircleFilledIcon: Story = {
  args: { group: "controls", name: "skip-forward-circle-filled" },
};
export const SkipForwardCircleOutlinedIcon: Story = {
  args: { group: "controls", name: "skip-forward-circle-outlined" },
};
export const SkipForwardFilledIcon: Story = { args: { group: "controls", name: "skip-forward-filled" } };
export const SkipForwardOutlinedIcon: Story = { args: { group: "controls", name: "skip-forward-outlined" } };
export const StopCircleFilledIcon: Story = { args: { group: "controls", name: "stop-circle-filled" } };
export const StopCircleOutlinedIcon: Story = { args: { group: "controls", name: "stop-circle-outlined" } };
export const StopFilledIcon: Story = { args: { group: "controls", name: "stop-filled" } };
export const StopOutlinedIcon: Story = { args: { group: "controls", name: "stop-outlined" } };
export const VolumeDownFilledIcon: Story = { args: { group: "controls", name: "volume-down-filled" } };
export const VolumeDownOutlinedIcon: Story = { args: { group: "controls", name: "volume-down-outlined" } };
export const VolumeFilledIcon: Story = { args: { group: "controls", name: "volume-filled" } };
export const VolumeMuteFilledIcon: Story = { args: { group: "controls", name: "volume-mute-filled" } };
export const VolumeMuteOutlinedIcon: Story = { args: { group: "controls", name: "volume-mute-outlined" } };
export const VolumeOutlinedIcon: Story = { args: { group: "controls", name: "volume-outlined" } };
export const VolumeUpFilledIcon: Story = { args: { group: "controls", name: "volume-up-filled" } };
export const VolumeUpOutlinedIcon: Story = { args: { group: "controls", name: "volume-up-outlined" } };

// Social Media
export const CallMeBackFilledIcon: Story = { args: { group: "social-media", name: "call-me-back-filled" } };
export const CallMeBackOutlinedIcon: Story = { args: { group: "social-media", name: "call-me-back-outlined" } };
export const FacebookFilledIcon: Story = { args: { group: "social-media", name: "facebook-filled" } };
export const FacebookOutlinedIcon: Story = { args: { group: "social-media", name: "facebook-outlined" } };
export const GoogleFilledIcon: Story = { args: { group: "social-media", name: "google-filled" } };
export const GoogleOutlinedIcon: Story = { args: { group: "social-media", name: "google-outlined" } };
export const InstagramFilledIcon: Story = { args: { group: "social-media", name: "instagram-filled" } };
export const InstagramOutlinedIcon: Story = { args: { group: "social-media", name: "instagram-outlined" } };
export const PinterestFilledIcon: Story = { args: { group: "social-media", name: "pinterest-filled" } };
export const PinterestOutlinedIcon: Story = { args: { group: "social-media", name: "pinterest-outlined" } };
export const RrssFilledIcon: Story = { args: { group: "social-media", name: "rrss-filled" } };
export const RrssOutlinedIcon: Story = { args: { group: "social-media", name: "rrss-outlined" } };
export const TiktokFilledIcon: Story = { args: { group: "social-media", name: "tiktok-filled" } };

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
    testId: "my-component",
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
