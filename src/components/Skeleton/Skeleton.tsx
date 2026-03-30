import { forwardRef } from "react";
import type { SkeletonProps } from "./Skeleton.types";
import styles from "./Skeleton.module.css";
import { cx } from "@/utils";

const defaultHeights: Record<string, string> = {
  text: "1em",
  circular: "40px",
  rectangular: "120px",
};

export const Skeleton = forwardRef<HTMLSpanElement, SkeletonProps>(
  (
    {
      variant = "text",
      width = "100%",
      height,
      animate = true,
      className,
      style,
      ...props
    },
    ref,
  ) => {
    const resolvedHeight = height ?? defaultHeights[variant];

    return (
      <span
        ref={ref}
        className={cx(
          styles.skeleton,
          styles[variant],
          animate && styles.animate,
          className,
        )}
        style={{ width, height: resolvedHeight, ...style }}
        aria-hidden="true"
        {...props}
      />
    );
  },
);

Skeleton.displayName = "Skeleton";
