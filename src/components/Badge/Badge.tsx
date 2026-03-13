import { forwardRef } from "react";
import type { BadgeProps } from "./Badge.types";
import styles from "./Badge.module.css";
import { cx } from "@/utils";

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant = "default", className, children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cx(styles.badge, styles[variant], className)}
        {...props}
      >
        {children}
      </span>
    );
  },
);

Badge.displayName = "Badge";
