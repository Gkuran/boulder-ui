import { forwardRef } from "react";
import styles from "./Switch.module.css";
import type { SwitchProps } from "./Switch.types";

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  ({ id, label, disabled, ...props }, ref) => {
    return (
      <label
        htmlFor={id}
        className={styles.container}
        aria-disabled={disabled || undefined}
      >
        <span className={styles.switch}>
          <input
            ref={ref}
            id={id}
            type="checkbox"
            disabled={disabled}
            className={styles.input}
            {...props}
          />

          <span className={styles.track}>
            <span className={styles.thumb} />
          </span>
        </span>

        {label && <span className={styles.label}>{label}</span>}
      </label>
    );
  },
);

Switch.displayName = "Switch";
