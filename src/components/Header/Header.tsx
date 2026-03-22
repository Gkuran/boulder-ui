import { forwardRef } from "react";
import type {
  HeaderProps,
  HeaderSectionProps,
  HeaderActionProps,
  HeaderActionButtonProps,
  HeaderActionAnchorProps,
} from "./Header.types";
import { Badge } from "@/components/Badge";
import { cx } from "@/utils";
import styles from "./Header.module.css";

// ─── Header (Root) ───────────────────────────────────────────────────────────

export const Header = forwardRef<HTMLElement, HeaderProps>(
  (
    { sticky = true, variant = "glass", className, children, ...rest },
    ref,
  ) => {
    return (
      <header
        ref={ref}
        className={cx(
          styles.header,
          styles[variant],
          sticky && styles.sticky,
          className,
        )}
        {...rest}
      >
        {children}
      </header>
    );
  },
);
Header.displayName = "Header";

// ─── HeaderSection ───────────────────────────────────────────────────────────

export const HeaderSection = forwardRef<HTMLDivElement, HeaderSectionProps>(
  ({ align = "left", grow = false, className, children, ...rest }, ref) => {
    const alignClass =
      align === "center"
        ? styles.alignCenter
        : align === "right"
          ? styles.alignRight
          : styles.alignLeft;

    return (
      <div
        ref={ref}
        className={cx(styles.section, alignClass, grow && styles.grow, className)}
        {...rest}
      >
        {children}
      </div>
    );
  },
);
HeaderSection.displayName = "HeaderSection";

// ─── HeaderAction ────────────────────────────────────────────────────────────

export function HeaderAction({
  icon,
  badge,
  badgeMax = 99,
  className,
  ...rest
}: HeaderActionProps) {
  const badgeDisplay =
    badge != null && badge > 0
      ? badge > badgeMax
        ? `${badgeMax}+`
        : String(badge)
      : null;

  const content = (
    <>
      <span className={styles.actionIcon} aria-hidden="true">
        {icon}
      </span>
      {badgeDisplay && (
        <Badge
          variant="count"
          className={styles.actionBadge}
          aria-label={`${badge} notifications`}
        >
          {badgeDisplay}
        </Badge>
      )}
    </>
  );

  // Render as anchor
  if ((rest as HeaderActionAnchorProps).as === "a") {
    const { as: _as, ...anchorRest } = rest as HeaderActionAnchorProps;
    return (
      <a className={cx(styles.action, className)} {...anchorRest}>
        {content}
      </a>
    );
  }

  // Render as button (default)
  const { as: _as, ...buttonRest } = rest as HeaderActionButtonProps;
  return (
    <button
      type="button"
      className={cx(styles.action, className)}
      {...buttonRest}
    >
      {content}
    </button>
  );
}
HeaderAction.displayName = "HeaderAction";
