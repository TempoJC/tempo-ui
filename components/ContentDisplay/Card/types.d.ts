import { ReactNode } from '../../../../node_modules/react';
import { Color } from '../../../types';
export type BasicCardProps = {
    children?: ReactNode | Array<ReactNode>;
    className?: string;
    testId?: string;
};
export type CardProps = BasicCardProps & {
    color?: Color;
    kind?: "default" | "outlined";
};
export type HeaderImageProps = BasicCardProps & {
    src?: string;
    width?: number;
};
export type ContentImageProps = BasicCardProps & {
    src?: string;
};
