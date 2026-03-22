import { forwardRef } from "react";
import type { TagProps } from "./Tag.types";
import { cx } from "@/utils";
import styles from "./Tag.module.css";

export const Tag = forwardRef<HTMLSpanElement, TagProps>(
  ({ label, onRemove, removeLabel, active = false, className, ...rest }, ref) => {
    return (
      <span
        ref={ref}
        className={cx(styles.tag, active && styles.active, className)}
        {...rest}
      >
        {label}

        {onRemove && (
          <button
            type="button"
            className={styles.remove}
            onClick={onRemove}
            aria-label={removeLabel ?? `Remove ${label}`}
            tabIndex={0}
          >
            <svg
              viewBox="0 0 10 10"
              fill="none"
              strokeWidth="1.75"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <line x1="1" y1="1" x2="9" y2="9" />
              <line x1="9" y1="1" x2="1" y2="9" />
            </svg>
          </button>
        )}
      </span>
    );
  },
);

Tag.displayName = "Tag";
