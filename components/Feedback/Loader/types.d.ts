type LoaderKind = "circular" | "bar";
type LoaderSize = "small" | "medium" | "large";
type LoaderColor = "dark" | "light";
export interface LoaderProps {
    /**
     * Loader kind.
     */
    kind?: LoaderKind;
    /**
     * Loader size, only applies to the `circular` kind.
     */
    size?: LoaderSize;
    /**
     * Additional CSS to be applied to the component.
     */
    className?: string;
    /**
     * Adds a `data-testid` attribute to the component outermost wrapper, set to the given value.
     */
    testId?: string;
    /**
     * Sets the color scheme of the component.
     */
    color?: LoaderColor;
}
export {};
