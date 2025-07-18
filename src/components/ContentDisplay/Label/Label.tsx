import cn from "classnames";
import "./Label.css";
import { LabelProps } from "./types";
import {
  LABEL_COLOR_APRICOT,
  LABEL_COLOR_BLACKBERRY,
  LABEL_COLOR_BLUEBERRY,
  LABEL_COLOR_CHERRY,
  LABEL_COLOR_COCONUT,
  LABEL_COLOR_GRAPE,
  LABEL_COLOR_KIWI,
  LABEL_COLOR_MINT,
  LABEL_COLOR_WATER,
  LABEL_COLOR_WATERMELON,
  LABEL_DARK,
  LABEL_LIGHT,
} from "./constants";

/**
 * Component which shows a text value as a label.
 */
const Label = ({
  className,
  iconLeft,
  iconRight,
  variant = LABEL_COLOR_WATER,
  testId,
  color = LABEL_LIGHT,
  label,
  uppercase = true,
}: LabelProps) => (
  <div
    data-testid={testId}
    className={cn(
      "tempo-label",
      {
        "tempo-label--icon--left": iconLeft,
        "tempo-label--icon--right": iconRight,
        "tempo-label--dark": color === LABEL_DARK,
        "tempo-label--light": color === LABEL_LIGHT,
        "tempo-label--color-coconut": variant === LABEL_COLOR_COCONUT,
        "tempo-label--color-blackberry": variant === LABEL_COLOR_BLACKBERRY,
        "tempo-label--color-cherry": variant === LABEL_COLOR_CHERRY,
        "tempo-label--color-apricot": variant === LABEL_COLOR_APRICOT,
        "tempo-label--color-kiwi": variant === LABEL_COLOR_KIWI,
        "tempo-label--color-mint": variant === LABEL_COLOR_MINT,
        "tempo-label--color-water": variant === LABEL_COLOR_WATER,
        "tempo-label--color-blueberry": variant === LABEL_COLOR_BLUEBERRY,
        "tempo-label--color-grape": variant === LABEL_COLOR_GRAPE,
        "tempo-label--color-watermelon": variant === LABEL_COLOR_WATERMELON,
      },
      className,
    )}
  >
    {iconLeft && <div className="tempo-label__icon">{iconLeft}</div>}
    <div
      className={cn("tempo-label__content", {
        "tempo-label__content--lowercase": !uppercase,
      })}
    >
      {label}
    </div>
    {iconRight && <div className="tempo-label__icon">{iconRight}</div>}
  </div>
);

export default Label;
