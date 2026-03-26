import { forwardRef } from "react";
import type { SelectProps } from "./Select.types";
import styles from "./Select.module.css";
import { cx } from "@/utils";

// ─── Default Chevron Icon ─────────────────────────────────────────────────────

const ChevronDownIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

// ─── Select ───────────────────────────────────────────────────────────────────

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      variant = "outline",
      size = "md",
      error,
      icon,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <div className={styles.wrapper}>
        <select
          ref={ref}
          className={cx(
            styles.select,
            styles[variant],
            styles[size],
            error && styles.error,
            className,
          )}
          aria-invalid={error ? true : undefined}
          {...props}
        >
          {children}
        </select>

        <div className={styles.iconWrapper}>
          {icon ?? <ChevronDownIcon />}
        </div>
      </div>
    );
  },
);

Select.displayName = "Select";
