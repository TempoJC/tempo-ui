import { CommonProps } from "@/types";
import type { MouseEventHandler } from "react";

export type AvatarProps = CommonProps & {
  imageUrl?: string;
  initials: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
  shape?: "circle" | "square";
  size?: "small" | "medium" | "large";
  type?: "filled" | "outlined";
};
