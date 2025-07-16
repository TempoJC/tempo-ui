import { MouseEventHandler, TouchEventHandler, KeyboardEventHandler, Ref, ReactElement, ReactNode } from '../../../../../node_modules/react';
import { CommonProps } from '../../../../types';
export type ActionButtonProps = CommonProps & {
  autoFocus?: boolean;
  badge?: ReactNode;
  disabled?: boolean;
  form?: string;
  fullWidth?: boolean;
  hideLabel?: boolean;
  iconEnd?: ReactElement;
  iconStart?: ReactElement;
  kind?: "standard" | "danger";
  label?: ReactNode;
  loading?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  onKeyDown?: KeyboardEventHandler<HTMLButtonElement>;
  onKeyUp?: KeyboardEventHandler<HTMLButtonElement>;
  onMouseDown?: MouseEventHandler<HTMLButtonElement>;
  onMouseEnter?: MouseEventHandler<HTMLButtonElement>;
  onMouseLeave?: MouseEventHandler<HTMLButtonElement>;
  onMouseUp?: MouseEventHandler<HTMLButtonElement>;
  onTouchEnd?: TouchEventHandler<HTMLButtonElement>;
  onTouchStart?: TouchEventHandler<HTMLButtonElement>;
  ref?: Ref<HTMLButtonElement>;
  tabIndex?: number;
  title?: string;
  type?: "button" | "submit" | "reset";
};

declare function ActionButton(props: ActionButtonProps): JSX.Element;

export type { ActionButtonProps };
export default ActionButton;
