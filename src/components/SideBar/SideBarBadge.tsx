import { forwardRef } from "react";
import type { SideBarBadgeProps } from "./SideBarBadge.types";
import { cx } from "../../utils/cx";
import styles from "./SideBarBadge.module.css";

export const SideBarBadge = forwardRef<HTMLSpanElement, SideBarBadgeProps>(
  ({ count, max = 99, className, ...rest }, ref) => {
    const display = count > max ? `${max}+` : String(count);

    return (
      <span
        ref={ref}
        className={cx(styles.badge, className)}
        aria-label={`${count} notifications`}
        {...rest}
      >
        {display}
      </span>
    );
  },
);

SideBarBadge.displayName = "SideBarBadge";
