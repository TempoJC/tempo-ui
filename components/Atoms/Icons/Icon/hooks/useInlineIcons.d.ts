import { RefObject } from '../../../../../../node_modules/react';
import { UseInlineIconsProps } from './../types';
declare const useInlineIcons: ({ group, name }: UseInlineIconsProps) => {
    error: boolean;
    svgRef: RefObject<SVGSVGElement | null>;
};
export default useInlineIcons;
