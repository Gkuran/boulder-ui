import { forwardRef } from "react";
import { cx } from "../../utils/cx";
import type { BoxProps } from "./Box.types";
import styles from "./Box.module.css";

const paddingMap = {
  none: styles.paddingNone,
  sm: styles.paddingSm,
  md: styles.paddingMd,
  lg: styles.paddingLg,
} as const;

export const Box = forwardRef<HTMLDivElement, BoxProps>(
  (
    {
      children,
      variant = "glass",
      padding = "md",
      asSection = false,
      className,
      ...rest
    },
    ref
  ) => {
    const Component = asSection ? "section" : "div";

    return (
      <Component
        ref={ref}
        className={cx(
          styles.box,
          styles[variant],
          paddingMap[padding],
          className
        )}
        {...rest}
      >
        {children}
      </Component>
    );
  }
);

Box.displayName = "Box";
