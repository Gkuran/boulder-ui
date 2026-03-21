import type { SideBarItemProps } from "./SideBarItem.types";
import { Badge } from "../Badge";
import { cx } from "../../utils/cx";
import styles from "./SideBarItem.module.css";

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
