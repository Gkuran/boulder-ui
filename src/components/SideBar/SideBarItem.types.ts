import type { ReactNode } from "react";

export interface SideBarItemProps extends React.HTMLAttributes<HTMLElement> {
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
   * Optional badge count. When provided, a SideBarBadge is rendered
   * overlaying the icon with this number.
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
