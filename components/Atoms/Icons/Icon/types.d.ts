import { ReactElement, ComponentPropsWithoutRef } from '../../../../../node_modules/react';
export interface IconProps extends ComponentPropsWithoutRef<"svg"> {
    /**
     * Additional CSS class to be applied to the component.
     */
    group: string;
    /**
     * The icon name.
     */
    name: string;
    /**
     * Sets the following `data-testid`s:
     *
     * * `testId`: points toward the component wrapper.
     */
    testId?: string;
    errorFallback?: ReactElement;
    /**
     * Additional CSS class to be applied to the component.
     */
    className?: string;
}
export interface UseInlineIconsProps {
    /**
     * The icon group.
     */
    group: string;
    /**
     * The icon name.
     */
    name: string;
}
