import { CommonProps } from '../../../types';
import { MouseEventHandler } from '../../../../node_modules/react';
export type AvatarProps = CommonProps & {
    imageUrl?: string;
    initials: string;
    onClick?: MouseEventHandler<HTMLDivElement>;
    shape?: "circle" | "square";
    size?: "small" | "medium" | "large";
    type?: "filled" | "outlined";
};
