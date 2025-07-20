import cn from "classnames";
import { FeedbackStateProps } from "./types";
import "./FeedbackState.css";

/**
 * A component for displaying feedback states such as loading, progress,
 * or custom messages with optional headers and footers.
 */
const FeedbackState = ({ className, testId, color = "light", title, subtitle, header, footer }: FeedbackStateProps) => (
  <div
    data-testid={testId}
    className={cn("tempo-feedback-state-v2", className, {
      "tempo-feedback-state-v2--dark": color === "dark",
    })}
  >
    {header && <div className="tempo-feedback-state-v2__header">{header}</div>}
    <div className="tempo-feedback-state-v2__message">
      {title && <div className="tempo-feedback-state-v2__title">{title}</div>}
      {subtitle && <div className="tempo-feedback-state-v2__subtitle">{subtitle}</div>}
    </div>
    {footer && <div className="tempo-feedback-state-v2__footer">{footer}</div>}
  </div>
);

export default FeedbackState;
