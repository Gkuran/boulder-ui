import { forwardRef } from "react";
import { cx } from "@/utils";
import styles from "./Switch.module.css";
import type { SwitchProps } from "./Switch.types";

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  (
    {
      id,
      label,
      size = "md",
      checked,
      defaultChecked,
      disabled,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <label
        htmlFor={id}
        className={cx(styles.container, styles[size], className)}
        aria-disabled={disabled || undefined}
      >
        <span className={styles.switch}>
          <input
            ref={ref}
            id={id}
            type="checkbox"
            role="switch"
            checked={checked}
            defaultChecked={defaultChecked}
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
