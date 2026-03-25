import { forwardRef } from "react";
import type {
  SidebarProps,
  SidebarHeaderProps,
  SidebarContentProps,
  SidebarFooterProps,
} from "./Sidebar.types";
import styles from "./Sidebar.module.css";
import { cx } from "@/utils";

// ─── SidebarRoot ──────────────────────────────────────────────────────────────

export const Sidebar = forwardRef<HTMLElement, SidebarProps>(
  (
    {
      variant = "floating",
      position = "sticky",
      side = "left",
      width = "280px",
      className,
      style,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <aside
        ref={ref}
        className={cx(
          styles.root,
          styles[variant],
          styles[`position-${position}`],
          styles[`side-${side}`],
          className,
        )}
        style={{ width, ...style }}
        {...props}
      >
        {children}
      </aside>
    );
  },
);
Sidebar.displayName = "Sidebar";

// ─── SidebarHeader ────────────────────────────────────────────────────────────

export const SidebarHeader = forwardRef<HTMLDivElement, SidebarHeaderProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cx(styles.header, className)} {...props}>
        {children}
      </div>
    );
  },
);
SidebarHeader.displayName = "SidebarHeader";

// ─── SidebarContent ───────────────────────────────────────────────────────────

export const SidebarContent = forwardRef<HTMLDivElement, SidebarContentProps>(
  ({ padding = "md", className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cx(styles.content, styles[`padding-${padding}`], className)}
        {...props}
      >
        {children}
      </div>
    );
  },
);
SidebarContent.displayName = "SidebarContent";

// ─── SidebarFooter ────────────────────────────────────────────────────────────

export const SidebarFooter = forwardRef<HTMLDivElement, SidebarFooterProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cx(styles.footer, className)} {...props}>
        {children}
      </div>
    );
  },
);
SidebarFooter.displayName = "SidebarFooter";
