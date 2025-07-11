import type { ChangeEventHandler, FocusEventHandler, ReactElement, ReactNode } from "react";
import { CommonProps } from "@/types";

export type AlternativeFieldFuncProps<Value> = CommonProps & {
  dense: boolean;
  disabled: boolean;
  hasError: boolean;
  id?: string;
  name?: string;
  onBlur: FocusEventHandler;
  onChange: ChangeEventHandler;
  onFocus: FocusEventHandler;
  readOnly: boolean;
  setHasError: (error: boolean) => void;
  value?: Value;
};

export type AlternativeFieldCommonProps = {
  dense?: boolean;
  disabled?: boolean;
  errors?: ReactNode[];
  helper?: ReactNode;
  id?: string;
  label?: ReactNode;
  name?: string;
  readOnly?: boolean;
  required?: boolean;
};

export type AlternativeFieldProps<Value, Input = unknown> = CommonProps &
  AlternativeFieldCommonProps & {
    children?: (props: AlternativeFieldFuncProps<Value>) => ReactElement;
    onBlur?: FocusEventHandler<Input>;
    onChange?: ChangeEventHandler<Input>;
    onFocus?: FocusEventHandler<Input>;
    value?: Value;
  };

declare function AlternativeField<Value>(props: AlternativeFieldProps<Value>): JSX.Element;

export default AlternativeField;
