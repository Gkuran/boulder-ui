import { forwardRef } from "react";
import type { CheckboxProps } from "./Checkbox.types";
import styles from "./Checkbox.module.css";
import { cx } from "@/utils";

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, className, ...props }, ref) => {
    return (
      <label className={cx(styles.wrapper, className)}>
        <input ref={ref} type="checkbox" className={styles.input} {...props} />

        <span className={styles.control} aria-hidden="true">
          <svg
            className={styles.checkmark}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </span>

        {label && <span className={styles.label}>{label}</span>}
      </label>
    );
  },
);

Checkbox.displayName = "Checkbox";
