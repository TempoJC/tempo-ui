export type Color = "dark" | "light";

export type CommonProps = {
  /**
   * Additional CSS class to be applied to the component.
   */
  className?: string;
  /**
   * Sets the color scheme of the component.
   */
  color?: Color;
  /**
   * Sets the following `data-testid`s:
   *
   * * `testId`: points toward the outermost wrapper.
   * * `testId-label`: points toward the label.
   * * `testId-inputInfo`: points toward the wrapper for helper & error information.
   * * `testId-inputInfo-helper`: points toward the helper text.
   * * `testId-inputInfo-errors`: points toward the errors outter most wrapper.
   * * `testId-inputInfo-errors-{index}`: points toward a specific error.
   */
  testId?: string;
};

export type ControlledUncontrolledValueProps<Value, Event = never> = {
  onChange?: (value: Value, event: Event) => void;
} & (
  | {
      defaultValue?: Value;
      value?: never;
    }
  | {
      defaultValue?: never;
      value?: Value;
    }
);

export type VariantColor =
  | "coconut"
  | "blackberry"
  | "cherry"
  | "apricot"
  | "kiwi"
  | "mint"
  | "water"
  | "blueberry"
  | "grape"
  | "watermelon";
