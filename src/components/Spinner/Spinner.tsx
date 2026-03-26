import { forwardRef } from "react";
import type { SpinnerProps } from "./Spinner.types";
import styles from "./Spinner.module.css";
import { cx } from "@/utils";

export const Spinner = forwardRef<HTMLSpanElement, SpinnerProps>(
  (
    {
      size = "md",
      variant = "primary",
      label = "Loading...",
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <span
        ref={ref}
        role="status"
        aria-label={label}
        className={cx(
          styles.spinner,
          styles[size],
          styles[variant],
          className,
        )}
        {...props}
      >
        {/* Visually hidden text for screen readers */}
        <span className={styles.srOnly}>{label}</span>
      </span>
    );
  },
);

Spinner.displayName = "Spinner";
