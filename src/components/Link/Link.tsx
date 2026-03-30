import { forwardRef } from "react";
import type { LinkProps } from "./Link.types";
import styles from "./Link.module.css";
import { cx } from "@/utils";

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      variant = "default",
      isExternal = false,
      children,
      className,
      target,
      rel,
      ...props
    },
    ref,
  ) => {
    const externalProps = isExternal
      ? {
          target: target ?? "_blank",
          rel: rel ?? "noopener noreferrer",
        }
      : { target, rel };

    return (
      <a
        ref={ref}
        className={cx(styles.link, styles[variant], className)}
        {...externalProps}
        {...props}
      >
        {children}
      </a>
    );
  },
);

Link.displayName = "Link";
