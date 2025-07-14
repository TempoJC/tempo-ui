import React from "react";
import cn from "classnames";
import { ContentImageProps } from "./types";

const ContentImage: React.FC<ContentImageProps> = ({ className, testId, src, children }) => (
  <div className={cn("tempo-card-content-image", className)} data-testid={testId}>
    <img src={src} />
    {children}
  </div>
);

export default ContentImage;
