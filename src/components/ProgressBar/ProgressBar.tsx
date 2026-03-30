import { forwardRef } from "react";
import type { ProgressBarProps } from "./ProgressBar.types";
import styles from "./ProgressBar.module.css";
import { cx } from "@/utils";

export const ProgressBar = forwardRef<HTMLDivElement, ProgressBarProps>(
  (
    {
      value,
      max = 100,
      variant = "primary",
      size = "md",
      label,
      showValue = false,
      className,
      ...props
    },
    ref,
  ) => {
    const clampedValue = Math.min(Math.max(value, 0), max);
    const percentage = max > 0 ? Math.round((clampedValue / max) * 100) : 0;

    return (
      <div ref={ref} className={cx(styles.wrapper, className)} {...props}>
        {(label || showValue) && (
          <div className={styles.labelRow}>
            {label && <span>{label}</span>}
            {showValue && <span>{percentage}%</span>}
          </div>
        )}
        <div
          className={cx(styles.track, styles[size])}
          role="progressbar"
          aria-valuenow={clampedValue}
          aria-valuemin={0}
          aria-valuemax={max}
          aria-label={label ?? `${percentage}% complete`}
        >
          <div
            className={cx(styles.fill, styles[variant])}
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    );
  },
);

ProgressBar.displayName = "ProgressBar";
