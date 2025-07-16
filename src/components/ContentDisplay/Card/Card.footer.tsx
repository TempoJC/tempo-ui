import React from "react";
import cn from "classnames";
import { BasicCardProps } from "./types";

const Footer: React.FC<BasicCardProps> = ({ className, testId, children }) => (
  <div className={cn("tempo-card-footer", className)} data-testid={testId}>
    {children}
  </div>
);

export default Footer;
