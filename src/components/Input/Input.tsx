import { forwardRef } from "react";
import type { InputProps } from "./Input.types";
import styles from "./Input.module.css";
import { cx } from "@/utils";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { error, className, variant = "outline", size = "md", ...props },
    ref,
  ) => {
    return (
      <input
        ref={ref}
        {...props}
        className={cx(
          styles.input,
          styles[variant],
          styles[size],
          error && styles.error,
          className,
        )}
        aria-invalid={error ? true : undefined}
      />
    );
  },
);

Input.displayName = "Input";
