import React from "react";
import cn from "classnames";
import {
  DIVIDER_CONTRAST_HIGH,
  DIVIDER_CONTRAST_LOW,
  DIVIDER_CONTRAST_MEDIUM,
  DIVIDER_DARK,
  DIVIDER_HORIZONTAL,
  DIVIDER_LIGHT,
  DIVIDER_VERTICAL,
  DividerProps,
} from "./types";
import "./Divider.css";

/**
 * Use this component to show a divider.
 */
const Divider: React.FC<DividerProps> = ({
  className,
  kind = DIVIDER_HORIZONTAL,
  color = DIVIDER_LIGHT,
  contrast = DIVIDER_CONTRAST_HIGH,
  testId,
}) => (
  <div
    className={cn(
      className,
      "tempo-divider",
      {
        "tempo-divider--light": color === DIVIDER_LIGHT,
        "tempo-divider--dark": color === DIVIDER_DARK,
      },
      {
        "tempo-divider--horizontal": kind === DIVIDER_HORIZONTAL,
        "tempo-divider--vertical": kind === DIVIDER_VERTICAL,
      },
      {
        "tempo-divider--high": contrast === DIVIDER_CONTRAST_HIGH,
        "tempo-divider--medium": contrast === DIVIDER_CONTRAST_MEDIUM,
        "tempo-divider--low": contrast === DIVIDER_CONTRAST_LOW,
      },
    )}
    data-testid={testId}
  />
);

export default Divider;
