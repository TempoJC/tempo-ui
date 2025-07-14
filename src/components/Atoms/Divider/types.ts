export const DIVIDER_DARK = "dark";
export const DIVIDER_LIGHT = "light";

export const DIVIDER_HORIZONTAL = "horizontal";
export const DIVIDER_VERTICAL = "vertical";

export const DIVIDER_CONTRAST_HIGH = "high";
export const DIVIDER_CONTRAST_MEDIUM = "medium";
export const DIVIDER_CONTRAST_LOW = "low";

export interface DividerProps {
  /**
   * Kind of the divider.
   */
  kind?: typeof DIVIDER_HORIZONTAL | typeof DIVIDER_VERTICAL;

  /**
   * Sets the color scheme of the component.
   */
  color?: typeof DIVIDER_LIGHT | typeof DIVIDER_DARK;

  /**
   * Contrast of the divider.
   */
  contrast?: typeof DIVIDER_CONTRAST_HIGH | typeof DIVIDER_CONTRAST_MEDIUM | typeof DIVIDER_CONTRAST_LOW;

  /**
   * Additional CSS to be applied to the component.
   */
  className?: string;

  /**
   * Adds a `data-testid` attribute to the component outermost wrapper, set to the given value.
   */
  testId?: string;
}
