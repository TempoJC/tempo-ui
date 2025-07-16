export default AlternativeField;
/**
 * Base component for defining an alternative form field component.
 * This is similar to `Field`, but it is designed for rendering borderless inputs.
 */
declare function AlternativeField({ children, dense, disabled, readOnly, label, color, onChange, onBlur, onFocus, required, errors, name, className, id, helper, testId, tabIndexValues, ...rest }: {
    [x: string]: any;
    children: any;
    dense?: boolean | undefined;
    disabled?: boolean | undefined;
    readOnly?: boolean | undefined;
    label: any;
    color?: string | undefined;
    onChange?: (() => void) | undefined;
    onBlur?: (() => void) | undefined;
    onFocus?: (() => void) | undefined;
    required?: boolean | undefined;
    errors?: never[] | undefined;
    name: any;
    className: any;
    id?: any;
    helper: any;
    testId: any;
    tabIndexValues?: {} | undefined;
}): import("react/jsx-runtime").JSX.Element;
