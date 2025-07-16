import React from "react";
import cn from "classnames";
import { HeaderImageProps } from "./types";

const HeaderImage: React.FC<HeaderImageProps> = ({ className, testId, src, children, width = 80 }) => (
  <div className={cn("tempo-card-header-image", className)} data-testid={testId}>
    <img style={{ width }} src={src} />
    {children}
  </div>
);

export default HeaderImage;
