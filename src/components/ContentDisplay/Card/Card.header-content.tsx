import React from "react";
import cn from "classnames";
import { BasicCardProps } from "./types";

const HeaderContent: React.FC<BasicCardProps> = ({ className, testId, children }) => (
  <div className={cn("tempo-card-header-content", className)} data-testid={testId}>
    {children}
  </div>
);

export default HeaderContent;
