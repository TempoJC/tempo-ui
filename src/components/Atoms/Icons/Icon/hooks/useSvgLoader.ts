import { useEffect, useState, useRef } from "react";
import { getIconSvg } from "../iconSvgs";

const useSvgLoader = ({
  group,
  name,
  onSvgLoaded,
}: {
  group: string;
  name: string;
  onSvgLoaded: ({ content, ref }: { content: string; ref: React.RefObject<SVGSVGElement> }) => void;
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    getIconSvg(group, name)
      .then((svgContent) => {
        const contentMatch = svgContent.match(/<svg[^>]*>([\s\S]*)<\/svg>/);
        const innerContent = contentMatch ? contentMatch[1] : "";
        onSvgLoaded({ content: innerContent, ref: svgRef as React.RefObject<SVGSVGElement> });
      })
      .catch(() => {
        setError(true);
      });
  }, [group, name, onSvgLoaded]);

  return { error, svgRef };
};

export default useSvgLoader;
