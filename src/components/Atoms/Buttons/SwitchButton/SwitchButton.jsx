import { forwardRef, useEffect } from "react";
import cn from "classnames";
import "./SwitchButton.css";
import { useSyncedRef } from "@/hooks";

/**
 * Use this component to show a switch button.
 */
const SwitchButton = forwardRef(
  (
    {
      className,
      onClick,
      onMouseDown,
      onMouseUp,
      onMouseEnter,
      onMouseLeave,
      onTouchStart,
      onTouchEnd,
      selected = false,
      disabled = false,
      tabIndex,
      autoFocus = false,
      icon,
      testId,
      focused = false,
      color = "light",
    },
    ref,
  ) => {
    const buttonRef = useSyncedRef(ref);

    useEffect(() => {
      if (focused) {
        buttonRef.current.focus();
      }
    }, [focused, buttonRef]);

    return (
      <button
        ref={buttonRef}
        data-testid={testId}
        className={cn("tempo-switch-button", className, {
          "tempo-switch-button--dark": color === "dark",
          "tempo-switch-button--selected": selected,
          "tempo-switch-button--disabled": disabled,
        })}
        onClick={onClick}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        disabled={disabled}
        tabIndex={tabIndex}
        autoFocus={autoFocus}
      >
        {icon}
      </button>
    );
  },
);

export default SwitchButton;
