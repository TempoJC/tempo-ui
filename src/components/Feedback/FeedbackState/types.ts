import type { ReactNode } from "react";
import { CommonProps } from "@/types";

export type FeedbackStateProps = CommonProps & {
  /**
   * The content to show under the title and subtitle.
   */
  footer?: ReactNode;
  /**
   * The content to show over the title and subtitle.
   */
  header?: ReactNode;
  /**
   * Description text that will be shown under the title.
   */
  subtitle?: ReactNode;
  /**
   * Title of the feedback state.
   */
  title?: ReactNode;
};
