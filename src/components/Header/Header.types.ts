import type { HTMLAttributes, ReactNode } from "react";

// ─── Shared ───────────────────────────────────────────────────────────────────

/**
 * Visual variant of the Header root.
 * - `default`     — Solid background with a bottom border. Standard application header.
 * - `floating`    — Elevated surface with shadow and rounded corners. Ideal for overlaying on maps.
 * - `transparent` — No background, border, or shadow. Blends into the underlying content.
 */
export type HeaderVariant = "default" | "floating" | "glass" | "transparent";

/**
 * CSS `position` value applied to the Header root.
 * - `static`   — Normal document flow. Default behavior.
 * - `sticky`   — Sticks to the top of the scroll container.
 * - `fixed`    — Fixed relative to the viewport.
 * - `absolute` — Positioned relative to the nearest positioned ancestor.
 */
export type HeaderPosition = "static" | "sticky" | "fixed" | "absolute";

// ─── HeaderRoot ───────────────────────────────────────────────────────────────

export interface HeaderProps extends HTMLAttributes<HTMLElement> {
  /**
   * Visual style of the header.
   * @default "default"
   */
  variant?: HeaderVariant;
  /**
   * CSS position behavior of the header.
   * @default "static"
   */
  position?: HeaderPosition;
  /**
   * When `true`, the header uses a compact height with reduced padding.
   * Useful for map interfaces where vertical space is limited.
   * @default false
   */
  compact?: boolean;
}

// ─── HeaderBrand ──────────────────────────────────────────────────────────────

export interface HeaderBrandProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

// ─── HeaderNav ────────────────────────────────────────────────────────────────

export interface HeaderNavProps extends HTMLAttributes<HTMLElement> {
  /**
   * Accessible label for the navigation landmark.
   * @default "Main navigation"
   */
  "aria-label"?: string;
  children: ReactNode;
}

// ─── HeaderActions ────────────────────────────────────────────────────────────

export interface HeaderActionsProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}
