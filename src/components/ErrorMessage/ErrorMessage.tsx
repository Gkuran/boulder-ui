import { forwardRef } from "react";
import styles from "./ErrorMessage.module.css";
import type { ErrorMessageProps } from "./ErrorMessage.types";

export const ErrorMessage = forwardRef<HTMLParagraphElement, ErrorMessageProps>(
  ({ children, id, ...props }, ref) => {
    if (!children) return null;

    return (
      <p ref={ref} id={id} role="alert" className={styles.error} {...props}>
        {children}
      </p>
    );
  },
);

ErrorMessage.displayName = "ErrorMessage";
