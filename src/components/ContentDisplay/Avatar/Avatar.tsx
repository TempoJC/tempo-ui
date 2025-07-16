import { useEffect, useState } from "react";
import cn from "classnames";
import { AvatarProps } from "./types";
import "./Avatar.css";

/**
 * If an image is used it will be shown as avatar, otherwise the initials will be used.
 */
const Avatar = ({
  className,
  imageUrl,
  initials,
  size = "small",
  onClick,
  color = "light",
  shape = "square",
  type = "filled",
  testId,
}: AvatarProps) => {
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    if (!imageUrl) {
      return;
    }

    const image = new Image();
    let canceled = false;

    image.onload = () => {
      if (!canceled) {
        setLoadError(false);
      }
    };

    image.onerror = () => {
      if (!canceled) {
        setLoadError(true);
      }
    };

    image.src = imageUrl;

    return () => {
      canceled = true;
    };
  }, [imageUrl]);

  return (
    <div
      className={cn("tempo-avatar", className, {
        "tempo-avatar--clickable": Boolean(onClick),
        "tempo-avatar--large": size === "large",
        "tempo-avatar--medium": size === "medium",
        "tempo-avatar--color-dark": color === "dark",
        "tempo-avatar--outlined": type === "outlined",
        "tempo-avatar--circle": shape === "circle",
      })}
      onClick={onClick}
      data-testid={testId}
    >
      {imageUrl && !loadError ? (
        <div
          className="tempo-avatar__image"
          style={{ backgroundImage: `url(${imageUrl})` }}
          title={initials}
          data-testid={testId && `${testId}-image`}
        />
      ) : (
        <div className="tempo-avatar__initials" data-testid={testId && `${testId}-initials`}>
          {initials}
        </div>
      )}
    </div>
  );
};

export default Avatar;
