export declare const BADGE_COLOR_COCONUT = "coconut";
export declare const BADGE_COLOR_BLACKBERRY = "blackberry";
export declare const BADGE_COLOR_CHERRY = "cherry";
export declare const BADGE_COLOR_APRICOT = "apricot";
export declare const BADGE_COLOR_KIWI = "kiwi";
export declare const BADGE_COLOR_MINT = "mint";
export declare const BADGE_COLOR_WATER = "water";
export declare const BADGE_COLOR_BLUEBERRY = "blueberry";
export declare const BADGE_COLOR_GRAPE = "grape";
export declare const BADGE_COLOR_WATERMELON = "watermelon";
export interface BadgeProps {
    /**
     * Additional CSS to be applied to the component.
     */
    className?: string;
    /**
     * Sets the color scheme of the component.
     */
    color?: "light" | "dark";
    /**
     * Kind of badge. Circular badges only for one character content.
     */
    kind?: "circular" | "autolayout";
    /**
     * Size.
     */
    size?: "large" | "small";
    /**
     * Text.
     */
    text?: string;
    /**
     * Color variant.
     */
    variant?: typeof BADGE_COLOR_COCONUT | typeof BADGE_COLOR_BLACKBERRY | typeof BADGE_COLOR_CHERRY | typeof BADGE_COLOR_APRICOT | typeof BADGE_COLOR_KIWI | typeof BADGE_COLOR_MINT | typeof BADGE_COLOR_WATER | typeof BADGE_COLOR_BLUEBERRY | typeof BADGE_COLOR_GRAPE | typeof BADGE_COLOR_WATERMELON;
    /**
     * Adds a `data-testid` attribute to the component outermost wrapper, set to the given value.
     */
    testId?: string;
}
