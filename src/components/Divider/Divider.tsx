import { forwardRef } from "react";
import type { DividerProps } from "./Divider.types";
import styles from "./Divider.module.css";
import { cx } from "@/utils";

export const Divider = forwardRef<HTMLHRElement, DividerProps>(
  (
    { orientation = "horizontal", variant = "solid", className, ...props },
    ref,
  ) => (
    <hr
      ref={ref}
      role="separator"
      aria-orientation={orientation}
      className={cx(
        styles.divider,
        styles[orientation],
        styles[variant],
        className,
      )}
      {...props}
    />
  ),
);

Divider.displayName = "Divider";
