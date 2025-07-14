import React from "react";
import cn from "classnames";
import { Divider } from "@/components/Atoms/Divider";
import { CardProps } from "./types.js";
import "./Card.css";

/**
 * A card component.
 */
const Card: React.FC<CardProps> = ({ kind = "default", className, color = "light", testId, children }) => (
  <div
    className={cn("tempo-card-wrapper", className, {
      "tempo-card-wrapper--outlined": kind === "outlined",
      "tempo-card-wrapper--dark": color === "dark",
    })}
    data-testid={testId}
  >
    {children}
    {kind !== "outlined" && <Divider contrast="low" color={color} />}
  </div>
);

export default Card;
