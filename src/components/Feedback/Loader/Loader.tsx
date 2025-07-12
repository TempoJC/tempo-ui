import cn from "classnames";
import type { LoaderProps } from "./types";
import {
  LOADER_BAR,
  LOADER_CIRCULAR,
  LOADER_CIRCULAR_LARGE,
  LOADER_CIRCULAR_MEDIUM,
  LOADER_CIRCULAR_SMALL,
  LOADER_DARK,
  LOADER_LIGHT,
} from "./constants";
import "./Loader.css";

const Loader = ({
  className,
  testId,
  color = LOADER_LIGHT,
  size = LOADER_CIRCULAR_LARGE,
  kind = LOADER_CIRCULAR,
}: LoaderProps) => (
  <span
    className={cn(
      className,
      "tempo-loader",
      {
        "tempo-loader--light": color === LOADER_LIGHT,
        "tempo-loader--dark": color === LOADER_DARK,
      },
      {
        "tempo-loader--bar": kind === LOADER_BAR,
        "tempo-loader--circular": kind === LOADER_CIRCULAR,
      },
      {
        "tempo-loader--circular-small": kind === LOADER_CIRCULAR && size === LOADER_CIRCULAR_SMALL,
        "tempo-loader--circular-medium": kind === LOADER_CIRCULAR && size === LOADER_CIRCULAR_MEDIUM,
        "tempo-loader--circular-large": kind === LOADER_CIRCULAR && size === LOADER_CIRCULAR_LARGE,
      },
    )}
    data-testid={testId}
  >
    <span
      className={cn(
        {
          "tempo-loader__progress--bar": kind === LOADER_BAR,
          "tempo-loader__progress--circular": kind === LOADER_CIRCULAR,
        },
        {
          "tempo-loader__progress--circular-small": kind === LOADER_CIRCULAR && size === LOADER_CIRCULAR_SMALL,
          "tempo-loader__progress--circular-medium": kind === LOADER_CIRCULAR && size === LOADER_CIRCULAR_MEDIUM,
          "tempo-loader__progress--circular-large": kind === LOADER_CIRCULAR && size === LOADER_CIRCULAR_LARGE,
        },
      )}
    />
  </span>
);

export default Loader;
