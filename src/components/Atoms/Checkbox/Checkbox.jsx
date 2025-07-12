import { forwardRef } from "react";
import cn from "classnames";
import { useTabIndexValues } from "@/hooks";
import { keystroke } from "@/utils";
import "./Checkbox.css";

/**
 * Base component to define a checkbox.
 */
const Checkbox = forwardRef(
  (
    {
      id,
      name,
      label,
      className,
      inputValue,
      indeterminate = false,
      readOnly = false,
      disabled = false,
      testId,
      color = "light",
      value,
      onChange,
      onClick,
      onFocus,
      onBlur,
      tabIndex,
      inputProps,
    },
    ref,
  ) => {
    const tabIndexValues = useTabIndexValues();
    const handleChange = (value, e) => {
      if (!readOnly && onChange) {
        onChange(value, e);
      }
    };

    const defaultClassName = cn("tempo-checkbox", className, {
      "tempo-checkbox--checked": value,
      "tempo-checkbox--disabled": disabled,
      "tempo-checkbox--read-only": readOnly,
      "tempo-checkbox--indeterminate": !value && indeterminate,
      "tempo-checkbox--color-dark": color === "dark",
    });

    return (
      <label className={defaultClassName} data-testid={testId}>
        <input
          data-testid={testId && `${testId}-input`}
          className="tempo-checkbox__input"
          id={id}
          name={name}
          value={inputValue}
          checked={value}
          disabled={disabled}
          readOnly={readOnly}
          ref={ref}
          onChange={(e) => handleChange(e.target.checked, e)}
          onFocus={onFocus}
          onBlur={onBlur}
          type="checkbox"
          onClick={onClick}
          tabIndex={tabIndexValues.input ?? tabIndex}
          {...(readOnly ? { tabIndex: -1 } : {})}
          onKeyPress={(e) => {
            if (keystroke(e).enter) {
              e.preventDefault();
              handleChange(!e.target.checked, e);
            }
          }}
          {...inputProps}
        />
        <span className="tempo-checkbox__icon" />
        {label && (
          <span className="tempo-checkbox__label" data-testid={testId && `${testId}-label`}>
            {label}
          </span>
        )}
      </label>
    );
  },
);

export default Checkbox;
