import type { RefObject } from "react";
import type { UseInlineIconsProps } from "./../types";
import useSvgLoader from "./useSvgLoader";

const insertSvgNode = ({ content, ref }: { content: string; ref: RefObject<SVGSVGElement> }) => {
  if (ref.current) {
    ref.current.innerHTML = "";
    ref.current.insertAdjacentHTML("beforeend", content);
  }
};

const useInlineIcons = ({ group, name }: UseInlineIconsProps) => {
  return useSvgLoader({
    group,
    name,
    onSvgLoaded: insertSvgNode,
  });
};

export default useInlineIcons;
