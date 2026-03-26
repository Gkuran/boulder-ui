import { forwardRef } from "react";
import type { TagProps } from "./Tag.types";
import styles from "./Tag.module.css";
import { cx } from "@/utils";

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="10"
    height="10"
    viewBox="0 0 10 10"
    fill="none"
    aria-hidden="true"
    focusable="false"
  >
    <path
      d="M1 1L9 9M9 1L1 9"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export const Tag = forwardRef<HTMLSpanElement, TagProps>(
  (
    {
      variant = "default",
      onRemove,
      removeAriaLabel = "Remove tag",
      className,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <span
        ref={ref}
        className={cx(styles.tag, styles[variant], className)}
        {...props}
      >
        <span className={styles.content}>{children}</span>

        {onRemove && (
          <button
            type="button"
            className={styles.removeButton}
            onClick={onRemove}
            aria-label={removeAriaLabel}
          >
            <CloseIcon />
          </button>
        )}
      </span>
    );
  },
);

Tag.displayName = "Tag";
