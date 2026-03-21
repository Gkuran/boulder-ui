import { forwardRef } from "react";
import type { SideBarProps } from "./SideBar.types";
import { cx } from "../../utils/cx";
import styles from "./SideBar.module.css";

export const SideBar = forwardRef<HTMLElement, SideBarProps>(
  ({ logo, children, className, ...rest }, ref) => {
    return (
      <nav
        ref={ref}
        className={cx(styles.sidebar, className)}
        aria-label="Main navigation"
        {...rest}
      >
        {logo && (
          <div className={styles.logo} aria-hidden="true">
            {logo}
          </div>
        )}

        <div className={styles.nav}>{children}</div>
      </nav>
    );
  },
);

SideBar.displayName = "SideBar";
