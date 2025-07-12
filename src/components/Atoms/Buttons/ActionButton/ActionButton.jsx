import { forwardRef } from "react";
import cn from "classnames";
import { Loader } from "@/components/Feedback/Loader";
import { Icon } from "@/components/Atoms/Icons/Icon";
import "./ActionButton.css";

/**
 * Use this component to show an action button.
 */
const ActionButton = forwardRef(
  (
    {
      as: As = "button",
      className,
      onClick,
      onMouseDown,
      onMouseUp,
      onMouseEnter,
      onMouseLeave,
      onTouchStart,
      onTouchEnd,
      onKeyDown,
      onKeyUp,
      disabled = false,
      fullWidth = false,
      tabIndex,
      autoFocus = false,
      label,
      hideLabel = false,
      iconStart,
      iconEnd,
      testId,
      title,
      type = "button",
      kind = "standard",
      loading = false,
      dropdown = false,
      dropdownVisible = false,
      color = "light",
      badge = null,
      form,
    },
    ref,
  ) => {
    const hasIcon = iconStart || iconEnd;

    return (
      <As
        ref={ref}
        className={cn(className, "tempo-action-button", {
          "tempo-action-button--icon": hasIcon,
          "tempo-action-button--just-icon": hasIcon && !label,
          "tempo-action-button--color-dark": color === "dark",
          "tempo-action-button--full-width": fullWidth,
          "tempo-action-button--standard": kind === "standard",
          "tempo-action-button--danger": kind === "danger",
          "tempo-action-button--dropdown": dropdown,
          "tempo-action-button--loading": loading,
        })}
        onClick={onClick}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        disabled={disabled || loading}
        tabIndex={tabIndex}
        autoFocus={autoFocus}
        title={title}
        data-testid={testId}
        type={type}
        form={form}
      >
        {loading && <Loader size="small" color={color} className="tempo-action-button__loader" />}

        <div className={cn("tempo-action-button__content", { "tempo-action-button__content--loading": loading })}>
          {badge && <div className="tempo-action-button--badge">{badge}</div>}
          {iconStart && <span className="tempo-action-button__icon-wrapper">{iconStart}</span>}
          {label && !hideLabel && <span className={"tempo-action-button__label"}>{label}</span>}
          {iconEnd && <span className="tempo-action-button__icon-wrapper">{iconEnd}</span>}
          {dropdown && dropdownVisible && <Icon group="arrows" name="chevron-up-outlined" />}
          {dropdown && !dropdownVisible && <Icon group="arrows" name="chevron-down-outlined" />}
        </div>
      </As>
    );
  },
);

export default ActionButton;
