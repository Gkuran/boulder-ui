import { forwardRef } from "react";
import type {
  HeaderProps,
  HeaderBrandProps,
  HeaderNavProps,
  HeaderActionsProps,
} from "./Header.types";
import styles from "./Header.module.css";
import { cx } from "@/utils";

// ─── HeaderRoot ───────────────────────────────────────────────────────────────

export const Header = forwardRef<HTMLElement, HeaderProps>(
  (
    {
      variant = "default",
      position = "static",
      compact = false,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <header
        ref={ref}
        role="banner"
        className={cx(
          styles.root,
          styles[variant],
          styles[`position-${position}`],
          compact && styles.compact,
          className,
        )}
        {...props}
      >
        {children}
      </header>
    );
  },
);
Header.displayName = "Header";

// ─── HeaderBrand ──────────────────────────────────────────────────────────────

export const HeaderBrand = forwardRef<HTMLDivElement, HeaderBrandProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cx(styles.brand, className)} {...props}>
        {children}
      </div>
    );
  },
);
HeaderBrand.displayName = "HeaderBrand";

// ─── HeaderNav ────────────────────────────────────────────────────────────────

export const HeaderNav = forwardRef<HTMLElement, HeaderNavProps>(
  ({ "aria-label": ariaLabel = "Main navigation", className, children, ...props }, ref) => {
    return (
      <nav
        ref={ref}
        aria-label={ariaLabel}
        className={cx(styles.nav, className)}
        {...props}
      >
        {children}
      </nav>
    );
  },
);
HeaderNav.displayName = "HeaderNav";

// ─── HeaderActions ────────────────────────────────────────────────────────────

export const HeaderActions = forwardRef<HTMLDivElement, HeaderActionsProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cx(styles.actions, className)} {...props}>
        {children}
      </div>
    );
  },
);
HeaderActions.displayName = "HeaderActions";
