import type { ButtonProps } from "./Button.types";
import styles from "./Button.module.css";

export function Button({
  variant = "primary",
  children,
  ...props
}: ButtonProps) {
  return (
    <button className={`${styles.button} ${styles[variant]}`} {...props}>
      {children}
    </button>
  );
}
