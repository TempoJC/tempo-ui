import React from "react";
import cn from "classnames";
import { Icon } from "@/components";
import { TagProps } from "./types";
import {
  TAG_COLOR_APRICOT,
  TAG_COLOR_BLACKBERRY,
  TAG_COLOR_BLUEBERRY,
  TAG_COLOR_CHERRY,
  TAG_COLOR_COCONUT,
  TAG_COLOR_GRAPE,
  TAG_COLOR_KIWI,
  TAG_COLOR_MINT,
  TAG_COLOR_WATER,
  TAG_COLOR_WATERMELON,
  TAG_DARK,
  TAG_LIGHT,
} from "./constants";
import "./Tag.css";

/**
 * Component that shows a text value as a tag.
 */
const Tag = ({
  className,
  onClick,
  onRemoveButtonClick,
  readOnly = true,
  label,
  disabled = false,
  color = TAG_LIGHT,
  variant,
  testId,
  uppercase = true,
}: TagProps) => {
  const handleRemove = (e: React.MouseEvent<HTMLSpanElement> | React.KeyboardEvent<HTMLSpanElement>) => {
    if (disabled) return undefined;
    e.stopPropagation();

    onRemoveButtonClick?.(e as React.MouseEvent<HTMLSpanElement>);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLSpanElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleRemove(e);
    }
  };

  return (
    <div
      className={cn(
        "tempo-tag",
        className,
        {
          "tempo-tag--dark": color === TAG_DARK,
          "tempo-tag--light": color === TAG_LIGHT,
        },
        {
          "tempo-tag--color": Boolean(variant),
          "tempo-tag--color-coconut": variant === TAG_COLOR_COCONUT,
          "tempo-tag--color-blackberry": variant === TAG_COLOR_BLACKBERRY,
          "tempo-tag--color-cherry": variant === TAG_COLOR_CHERRY,
          "tempo-tag--color-apricot": variant === TAG_COLOR_APRICOT,
          "tempo-tag--color-kiwi": variant === TAG_COLOR_KIWI,
          "tempo-tag--color-mint": variant === TAG_COLOR_MINT,
          "tempo-tag--color-water": variant === TAG_COLOR_WATER,
          "tempo-tag--color-blueberry": variant === TAG_COLOR_BLUEBERRY,
          "tempo-tag--color-grape": variant === TAG_COLOR_GRAPE,
          "tempo-tag--color-watermelon": variant === TAG_COLOR_WATERMELON,
        },
        {
          "tempo-tag--disabled": disabled,
          "tempo-tag--readOnly": readOnly,
        },
      )}
      data-testid={testId}
    >
      <div
        onClick={disabled ? undefined : onClick}
        className={cn("tempo-tag__label", {
          "tempo-tag__label--lowercase": !uppercase,
        })}
        data-testid={testId && `${testId}-label`}
      >
        {label}
      </div>
      {!readOnly && (
        <span
          className="tempo-tag__action"
          onClick={handleRemove}
          onKeyDown={handleKeyDown}
          role="button"
          tabIndex={disabled ? -1 : 0}
          data-testid={testId && `${testId}-delete-button`}
        >
          <Icon group="actions" name="close-small" />
        </span>
      )}
    </div>
  );
};

export default Tag;
