import { CommonProps, VariantColor } from "@/types";
import type { MouseEventHandler, ReactNode } from "react";

export type TagProps = CommonProps & {
  /**
   * Set to `true` to show the component disabled.
   */
  disabled?: boolean;
  /**
   * Tag label text.
   */
  label: ReactNode;
  /**
   * Callback function fired when tag is clicked.
   */
  onClick?: MouseEventHandler<HTMLDivElement>;
  /**
   * Function that will be set as the `onClick` handler of the deletion button shown
   * when this prop is defined and `readOnly` is false.
   */
  onRemoveButtonClick?: MouseEventHandler<HTMLSpanElement>;
  /**
   * Indicates whether the tag is read-only.
   *
   * Use `false` to show the tag deletion button and do not forget to define the
   * `onRemoveButtonClick` handler.
   */
  readOnly?: boolean;
  /**
   * Set to `false` to show the original label instead of capital letters.
   */
  uppercase?: boolean;
  /**
   * Color variant.
   */
  variant?: VariantColor;
};
