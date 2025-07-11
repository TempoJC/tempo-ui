import { forwardRef } from "react";
import cn from "classnames";
import Loader from "@components/Loaders/Loader";
import Icon from "@components/Icons/Icon";
import type { ButtonProps } from "./types";
import "./Button.css";

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      onClick,
      onMouseDown,
      onMouseUp,
      onMouseLeave,
      onTouchStart,
      onTouchEnd,
      disabled = false,
      fullWidth = false,
      tabIndex,
      autoFocus = false,
      label,
      iconStart,
      iconEnd,
      testId,
      title,
      type = "button",
      kind = "standard",
      loading = false,
      extra = false,
      dropdown = false,
      dropdownVisible = false,
      color = "light",
      form,
    },
    ref,
  ) => {
    const hasIcon = iconStart || iconEnd;
    const iconAndLabel = hasIcon && label;
    const iconNoLabel = hasIcon && !label;

    return (
      <button
        ref={ref}
        className={cn(className, "tempo-button", {
          "tempo-button--color-dark": color === "dark",
          "tempo-button--full-width": fullWidth,
          "tempo-button--standard": kind === "standard",
          "tempo-button--primary": kind === "primary",
          "tempo-button--danger": kind === "danger",
          "tempo-button--extra": extra,
          "tempo-button--icon": iconNoLabel,
          "tempo-button--icon-and-label": iconAndLabel,
          "tempo-button--loading": loading,
          "tempo-button--dropdown": dropdown,
        })}
        onClick={onClick}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeave}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        disabled={disabled || loading}
        tabIndex={tabIndex}
        autoFocus={autoFocus}
        title={title}
        data-testid={testId}
        type={type}
        form={form}
      >
        {loading && <Loader size="small" color={color} className="tempo-button__loader" />}
        <div className={cn("tempo-button__content", { "tempo-button__content--loading": loading })}>
          {iconStart}
          {label && <span className={"tempo-button__label"}>{label}</span>}
          {iconEnd}
          {dropdown && dropdownVisible && <Icon group="arrows" name="chevron-up" />}
          {dropdown && !dropdownVisible && <Icon group="arrows" name="chevron-down" />}
        </div>
      </button>
    );
  },
);

export default Button;
