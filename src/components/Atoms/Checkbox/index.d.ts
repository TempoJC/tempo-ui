import { CommonProps, ControlledUncontrolledValueProps } from "@/types";
import type { ReactNode, ChangeEvent, KeyboardEvent, MouseEventHandler, FocusEventHandler, Ref } from "react";

export type CheckboxProps = CommonProps &
  ControlledUncontrolledValueProps<boolean, KeyboardEvent<HTMLInputElement> | ChangeEvent<HTMLInputElement>> & {
    id?: string;
    inputValue?: unknown;
    indeterminate?: boolean;
    label?: ReactNode;
    name?: string;
    disabled?: boolean;
    readOnly?: boolean;
    onClick?: MouseEventHandler<HTMLInputElement>;
    onBlur?: FocusEventHandler<HTMLInputElement>;
    onFocus?: FocusEventHandler<HTMLInputElement>;
    tabIndex?: number;
    ref?: Ref<HTMLInputElement>;
    tabIndexValues?: {
      input?: number;
    };
  };

declare function Checkbox(props: CheckboxProps): JSX.Element;

export type { CheckboxProps };
export default Checkbox;
