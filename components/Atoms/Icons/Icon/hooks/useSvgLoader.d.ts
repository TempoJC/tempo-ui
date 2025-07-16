declare const useSvgLoader: ({ group, name, onSvgLoaded, }: {
    group: string;
    name: string;
    onSvgLoaded: ({ content, ref }: {
        content: string;
        ref: React.RefObject<SVGSVGElement>;
    }) => void;
}) => {
    error: boolean;
    svgRef: import('../../../../../../node_modules/react').RefObject<SVGSVGElement | null>;
};
export default useSvgLoader;
