import React from "react";
import cn from "classnames";
import { BasicCardProps } from "./types";

const Header: React.FC<BasicCardProps> = ({ className, testId, children }) => (
  <div className={cn("tempo-card-header", className)} data-testid={testId}>
    {children}
  </div>
);

export default Header;
