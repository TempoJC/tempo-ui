import { default as React } from '../../../../../node_modules/react';
export interface ButtonProps {
    /**
     * HTML button type.
     */
    type?: "button" | "submit" | "reset";
    /**
     * Additional CSS to be applied to the component.
     */
    className?: string;
    /**
     * Click action handler (for standard buttons).
     */
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    /**
     * Mouse down event handler.
     */
    onMouseDown?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    /**
     * Mouse up event handler.
     */
    onMouseUp?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    /**
     * Mouse leave event handler.
     */
    onMouseLeave?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    /**
     * Touch start event handler.
     */
    onTouchStart?: (event: React.TouchEvent<HTMLButtonElement>) => void;
    /**
     * Touch end event handler.
     */
    onTouchEnd?: (event: React.TouchEvent<HTMLButtonElement>) => void;
    /**
     * `true` to disable the button.
     */
    disabled?: boolean;
    /**
     * Indicates whether the button is shown in block, taking the whole width of its container.
     */
    fullWidth?: boolean;
    /**
     * HTML `tabIndex` attribute.
     */
    tabIndex?: number;
    /**
     * HTML title attribute.
     */
    title?: string;
    /**
     * HTML form attribute.
     */
    form?: string;
    /**
     * Indicates whether the button shall obtain focus on mount or not.
     */
    autoFocus?: boolean;
    /**
     * An optional icon, at the start of the `Button` (before the label).
     */
    iconStart?: React.ReactElement;
    /**
     * An optional icon, at the end of the `Button` (after the label).
     */
    iconEnd?: React.ReactElement;
    /**
     * A text to show as the button label. Both icon and label cannot be used at the same time.
     */
    label?: React.ReactNode;
    /**
     * Adds a `data-testid` attribute to the component outermost wrapper, set to the given value.
     */
    testId?: string;
    /**
     * When set to `true`, the button shows a spinner.
     */
    loading?: boolean;
    /**
     * When set to `true`, the button size is slightly increased.
     */
    extra?: boolean;
    /**
     * The kind of button.
     */
    kind?: "standard" | "primary" | "danger";
    /**
     * If specified, the button will show a chevron. Private, used by DropdownButton.
     * @ignore
     * @private
     */
    dropdown?: boolean;
    /**
     * Dropdown visibility status. Private, used by DropdownButton.
     * @ignore
     * @private
     */
    dropdownVisible?: boolean;
    /**
     * Sets the color scheme of the component.
     */
    color?: "light" | "dark";
}
