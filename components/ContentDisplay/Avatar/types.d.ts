import { CommonProps } from '../../../types';
import { MouseEventHandler } from '../../../../node_modules/react';
export type AvatarProps = CommonProps & {
    /**
     * URL of the image to be shown.
     */
    imageUrl?: string;
    /**
     * User initials.
     */
    initials: string;
    /**
     * Function which will be called when clicking on the component.
     */
    onClick?: MouseEventHandler<HTMLDivElement>;
    /**
     * Shape.
     */
    shape?: "circle" | "square";
    /**
     * Size.
     */
    size?: "small" | "medium" | "large";
    /**
     * The type of avatar, "outlined" or "filled".
     */
    type?: "filled" | "outlined";
};
