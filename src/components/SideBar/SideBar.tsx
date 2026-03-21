import { forwardRef } from "react";
import type { SideBarProps, SideBarItemProps } from "./SideBar.types";
import { Badge } from "../Badge";
import { cx } from "@/utils";
import styles from "./SideBar.module.css";

// ─── SideBar ──────────────────────────────────────────────────────────────────

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

// ─── SideBarItem ──────────────────────────────────────────────────────────────

export function SideBarItem({
  icon,
  label,
  active = false,
  badge,
  badgeMax = 99,
  asButton = false,
  className,
  ...rest
}: SideBarItemProps) {
  const badgeDisplay =
    badge != null && badge > 0
      ? badge > badgeMax
        ? `${badgeMax}+`
        : String(badge)
      : null;

  const sharedProps = {
    className: cx(styles.item, active && styles.active, className),
    "aria-current": active ? ("page" as const) : undefined,
    ...rest,
  };

  const content = (
    <>
      <span className={styles.iconWrapper} aria-hidden="true">
        {icon}
        {badgeDisplay && (
          <Badge
            variant="count"
            className={styles.badge}
            aria-label={`${badge} notifications`}
          >
            {badgeDisplay}
          </Badge>
        )}
      </span>
      <span className={styles.label}>{label}</span>
    </>
  );

  if (asButton) {
    return <button {...sharedProps}>{content}</button>;
  }

  return <a {...sharedProps}>{content}</a>;
}
SideBarItem.displayName = "SideBarItem";
