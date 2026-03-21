import type { HTMLAttributes, ReactNode } from "react";

// ─── SideBar ──────────────────────────────────────────────────────────────────

export interface SideBarProps extends HTMLAttributes<HTMLElement> {
  /**
   * Logo or brand element rendered at the top of the sidebar.
   * Accepts any ReactNode (img, SVG, icon component).
   */
  logo?: ReactNode;

  /**
   * Navigation items. Should be SideBarItem components.
   */
  children: ReactNode;
}

// ─── SideBarItem ──────────────────────────────────────────────────────────────

export interface SideBarItemProps extends HTMLAttributes<HTMLElement> {
  /** The icon to render. Accepts any ReactNode (SVG, img, icon component). */
  icon: ReactNode;

  /** Text label displayed below the icon. */
  label: string;

  /**
   * Whether this item is currently active/selected.
   * @default false
   */
  active?: boolean;

  /**
   * Optional badge count. When provided, a Badge with variant="count" is
   * rendered overlaying the icon.
   */
  badge?: number;

  /**
   * Maximum badge value before showing "max+".
   * @default 99
   */
  badgeMax?: number;

  /**
   * Render as a `<button>` instead of `<a>`.
   * Useful when the item triggers an action rather than navigation.
   * @default false
   */
  asButton?: boolean;

  /** Navigation URL. Only used when rendering as `<a>` (default). */
  href?: string;
}
