import { forwardRef } from "react";
import type { LabelProps } from "./Label.types";
import styles from "./Label.module.css";
import { cx } from "@/utils/cx";

export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, ...props }, ref) => {
    return (
      <label ref={ref} className={cx(styles.label, className)} {...props} />
    );
  },
);

Label.displayName = "Label";
