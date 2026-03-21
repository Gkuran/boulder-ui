import type { SideBarItemProps } from "./SideBarItem.types";
import { SideBarBadge } from "./SideBarBadge";
import { cx } from "../../utils/cx";
import styles from "./SideBarItem.module.css";

export function SideBarItem({
  icon,
  label,
  active = false,
  badge,
  badgeMax,
  asButton = false,
  className,
  ...rest
}: SideBarItemProps) {
  const sharedProps = {
    className: cx(styles.item, active && styles.active, className),
    "aria-current": active ? ("page" as const) : undefined,
    ...rest,
  };

  const content = (
    <>
      <span className={styles.iconWrapper} aria-hidden="true">
        {icon}
        {badge != null && badge > 0 && (
          <SideBarBadge count={badge} max={badgeMax} />
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
