import { forwardRef } from "react";
import type { TextareaProps } from "./Textarea.types";
import styles from "./Textarea.module.css";
import { cx } from "@/utils";

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ variant = "outline", size = "md", className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        {...props}
        className={cx(
          styles.textarea,
          styles[variant],
          styles[size],
          className,
        )}
      />
    );
  },
);

Textarea.displayName = "Textarea";
