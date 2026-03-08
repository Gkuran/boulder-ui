import { forwardRef } from "react";
import type { InputProps } from "./Input.types";
import styles from "./Input.module.css";
import { cx } from "@/utils/cx";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { error, className, variant = "outline", sizeVariant = "md", ...props },
    ref,
  ) => {
    return (
      <>
        <input
          ref={ref}
          {...props}
          className={cx(
            styles.input,
            styles[variant],
            styles[sizeVariant],
            error && styles.error,
            className,
          )}
        />

        {error && <span className={styles.errorMessage}>{error}</span>}
      </>
    );
  },
);

Input.displayName = "Input";
