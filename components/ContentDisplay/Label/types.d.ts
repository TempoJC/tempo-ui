import { ReactNode } from '../../../../node_modules/react';
import { CommonProps, VariantColor } from '../../../types';
export type LabelProps = CommonProps & {
    iconLeft?: ReactNode;
    iconRight?: ReactNode;
    label?: ReactNode;
    uppercase?: boolean;
    variant?: VariantColor;
};
