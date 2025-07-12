import React, { cloneElement } from "react";
import cn from "classnames";
import useInlineIcons from "./hooks/useInlineIcons";
import ErrorIcon from "./ErrorIcon";
import type { IconProps } from "./types";
import "./Icon.css";

const Icon: React.FC<IconProps> = ({ className, testId, group, name, errorFallback = <ErrorIcon />, ...rest }) => {
  const { error, svgRef } = useInlineIcons({ group, name });

  const computedClassName = cn("tempo-icon", className);

  const commonProps = {
    "data-icon-name": name,
    "data-icon-group": group,
    className: computedClassName,
    ...rest,
  };

  if (error) {
    return cloneElement(errorFallback, commonProps);
  }

  return (
    <svg
      ref={svgRef}
      role="img"
      width={20}
      height={20}
      viewBox="0 0 20 20"
      data-testid={testId}
      className={computedClassName}
      xmlns="http://www.w3.org/2000/svg"
      data-icon-group={group}
      data-icon-name={name}
      {...rest}
    />
  );
};

export default Icon;
