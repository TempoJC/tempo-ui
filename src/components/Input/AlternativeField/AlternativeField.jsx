import { useState } from "react";
import cn from "classnames";
import InputInfo from "./AlternativeFieldInputInfo.jsx";
import { TabIndexContextProvider } from "@/hooks/index.js";
import { is, noop } from "@/utils";
import "./AlternativeField.css";

/**
 * Base component for defining an alternative form field component.
 * This is similar to `Field`, but it is designed for rendering borderless inputs.
 */
const AlternativeField = ({
  children,
  dense = false,
  disabled = false,
  readOnly = false,
  label,
  color = "light",
  onChange = noop,
  onBlur = noop,
  onFocus = noop,
  required = false,
  errors = [],
  name,
  className,
  id = name,
  helper,
  testId,
  tabIndexValues = {},
  ...rest
}) => {
  const [hasError, setHasError] = useState(errors.length > 0);

  const classNames = cn("tempo-alternative-field", className, {
    "tempo-alternative-field--dense": dense,
    "tempo-alternative-field--required": required,
    "tempo-alternative-field--color-dark": color === "dark",
  });

  const inputProps = {
    ...rest,
    className: "tempo-alternative-field-input",
    disabled,
    readOnly,
    id,
    name,
    onBlur,
    onFocus,
    onChange,
    hasError,
    setHasError,
    color,
    testId,
  };

  return (
    <TabIndexContextProvider value={tabIndexValues}>
      <div className={classNames} data-testid={testId}>
        {label && (
          <label
            htmlFor={id}
            className={cn("tempo-alternative-field__label", {
              "tempo-alternative-field__label--has-error": hasError,
              "tempo-alternative-field__label--disabled": disabled,
            })}
            data-testid={testId && `${testId}-label`}
          >
            {label}
          </label>
        )}
        <div className="tempo-alternative-field__input">{is(Function, children) && children(inputProps)}</div>
        <InputInfo testId={testId && `${testId}-inputInfo`} helper={helper} errors={errors} disabled={disabled} />
      </div>
    </TabIndexContextProvider>
  );
};

export default AlternativeField;
