import type { ReactNode } from "react";
import { CommonProps, VariantColor } from "@/types";

export type LabelProps = CommonProps & {
  /**
   * Optional icon positioned to the left of the content.
   */
  iconLeft?: ReactNode;
  /**
   * Optional icon positioned to the right of the content.
   */
  iconRight?: ReactNode;
  /**
   * Item to show as label into label component.
   */
  label?: ReactNode;
  /**
   * Set to `false` to show the original label instead of capital letters.
   */
  uppercase?: boolean;
  /**
   * Color variant.
   */
  variant?: VariantColor;
};
