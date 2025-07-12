import type { MouseEventHandler, TouchEventHandler, Ref, ReactNode } from "react";
import { CommonProps } from "@/types";

export type SwitchButtonProps = CommonProps & {
  autoFocus?: boolean;
  selected?: boolean;
  disabled?: boolean;
  icon: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  onMouseDown?: MouseEventHandler<HTMLButtonElement>;
  onMouseUp?: MouseEventHandler<HTMLButtonElement>;
  onMouseEnter?: MouseEventHandler<HTMLButtonElement>;
  onMouseLeave?: MouseEventHandler<HTMLButtonElement>;
  onTouchStart?: TouchEventHandler<HTMLButtonElement>;
  onTouchEnd?: TouchEventHandler<HTMLButtonElement>;
  ref?: Ref<HTMLButtonElement>;
  tabIndex?: number;
};

declare function SwitchButton(props: SwitchButtonProps): JSX.Element;

export default SwitchButton;
