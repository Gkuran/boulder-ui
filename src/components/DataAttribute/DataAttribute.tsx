import { forwardRef } from "react";
import type { DataAttributeProps } from "./DataAttribute.types";
import styles from "./DataAttribute.module.css";
import { cx } from "@/utils";

/**
 * Determines whether a value should be replaced by the fallback text.
 * Treats `null`, `undefined`, and empty strings as absent values.
 */
function isValueAbsent(value: unknown): boolean {
  return value === null || value === undefined || value === "";
}

export const DataAttribute = forwardRef<HTMLDivElement, DataAttributeProps>(
  (
    {
      label,
      value,
      orientation = "horizontal",
      align = "between",
      fallback = "N/A",
      truncate = false,
      className,
      ...props
    },
    ref,
  ) => {
    const absent = isValueAbsent(value);

    return (
      <div
        ref={ref}
        className={cx(
          styles.root,
          styles[orientation],
          orientation === "horizontal" && styles[`align-${align}`],
          className,
        )}
        {...props}
      >
        <span className={styles.label}>{label}</span>

        {absent ? (
          <span className={cx(styles.value, styles.fallback)}>{fallback}</span>
        ) : (
          <span className={cx(styles.value, truncate && styles.truncate)}>
            {value}
          </span>
        )}
      </div>
    );
  },
);

DataAttribute.displayName = "DataAttribute";
