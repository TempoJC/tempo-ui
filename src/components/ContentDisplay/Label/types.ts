import type { ReactNode } from "react";
import { CommonProps, VariantColor } from "@/types";

export type LabelProps = CommonProps & {
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  label?: ReactNode;
  uppercase?: boolean;
  variant?: VariantColor;
};
