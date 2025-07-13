import cn from "classnames";
import { BadgeProps } from "./types";
import "./Badge.css";

export const BADGE_COLOR_COCONUT = "coconut";
export const BADGE_COLOR_BLACKBERRY = "blackberry";
export const BADGE_COLOR_CHERRY = "cherry";
export const BADGE_COLOR_APRICOT = "apricot";
export const BADGE_COLOR_KIWI = "kiwi";
export const BADGE_COLOR_MINT = "mint";
export const BADGE_COLOR_WATER = "water";
export const BADGE_COLOR_BLUEBERRY = "blueberry";
export const BADGE_COLOR_GRAPE = "grape";
export const BADGE_COLOR_WATERMELON = "watermelon";

/**
 * Component to render a badge (with optional text content).
 */
const Badge = ({
  className,
  color = "light",
  kind = "circular",
  size = "large",
  variant = BADGE_COLOR_CHERRY,
  testId,
  text,
}: BadgeProps) => {
  const classesContainer = cn(
    "tempo-badge",
    {
      "tempo-badge--small": size === "small",
      "tempo-badge--autolayout": kind === "autolayout",
      "tempo-badge--color-dark": color === "dark",
      "tempo-badge--color-coconut": variant === BADGE_COLOR_COCONUT,
      "tempo-badge--color-blackberry": variant === BADGE_COLOR_BLACKBERRY,
      "tempo-badge--color-cherry": variant === BADGE_COLOR_CHERRY,
      "tempo-badge--color-apricot": variant === BADGE_COLOR_APRICOT,
      "tempo-badge--color-kiwi": variant === BADGE_COLOR_KIWI,
      "tempo-badge--color-mint": variant === BADGE_COLOR_MINT,
      "tempo-badge--color-water": variant === BADGE_COLOR_WATER,
      "tempo-badge--color-blueberry": variant === BADGE_COLOR_BLUEBERRY,
      "tempo-badge--color-grape": variant === BADGE_COLOR_GRAPE,
      "tempo-badge--color-watermelon": variant === BADGE_COLOR_WATERMELON,
    },
    className,
  );

  return (
    <div className={classesContainer} data-testid={testId}>
      <div className="tempo-badge__item" data-testid={testId && `${testId}-badge`}>
        {kind === "circular" ? (text || "").slice(0, 1) : text}
      </div>
    </div>
  );
};

export default Badge;
