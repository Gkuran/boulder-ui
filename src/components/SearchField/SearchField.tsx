import { forwardRef } from "react";
import type { SearchFieldProps } from "./SearchField.types";
import { cx } from "@/utils";
import styles from "./SearchField.module.css";

const ClearIcon = () => (
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
);

export const SearchField = forwardRef<HTMLInputElement, SearchFieldProps>(
  (
    {
      size = "md",
      leadingIcon,
      trailingIcon,
      onClear,
      value,
      className,
      ...rest
    },
    ref,
  ) => {
    const hasValue = value !== undefined && value !== "";
    const showClear = onClear != null && hasValue;

    return (
      <div className={cx(styles.wrapper, styles[size], className)}>
        {leadingIcon && (
          <span className={styles.leadingIcon} aria-hidden="true">
            {leadingIcon}
          </span>
        )}

        <input
          ref={ref}
          type="search"
          value={value}
          className={styles.input}
          {...rest}
        />

        {showClear && (
          <button
            type="button"
            className={styles.clearButton}
            onClick={onClear}
            aria-label="Clear search"
            tabIndex={0}
          >
            <ClearIcon />
          </button>
        )}

        {!showClear && trailingIcon && (
          <span className={styles.trailingIcon} aria-hidden="true">
            {trailingIcon}
          </span>
        )}
      </div>
    );
  },
);

SearchField.displayName = "SearchField";
