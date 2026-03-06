import type { ButtonProps } from "./Button.types";
import styles from "./Button.module.css";
import { cx } from "@/utils";

export function Button({
  variant = "primary",
  size = "md",
  children,
  isLoading = false,
  className,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cx(styles.button, styles[variant], styles[size], className)}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && <span className={styles.spinner} />}
      {children}
    </button>
  );
}
