import type { HTMLAttributes, ReactNode, CSSProperties } from "react";

// ─── Shared ───────────────────────────────────────────────────────────────────

/**
 * Visual variant of the Sidebar root.
 * - `default`  — Solid surface background, no margins, no border-radius. Anchored flush to the edge of the screen.
 * - `floating` — Elevated surface with outer margin, rounded corners, and a drop shadow.
 *                Designed to float over map canvases or page content.
 */
export type SidebarVariant = "default" | "floating";

/**
 * CSS `position` value applied to the Sidebar root.
 * - `sticky`   — Sticks to the top of the scroll container while the page scrolls behind it.
 *                Requires the parent to have a defined height.
 * - `fixed`    — Fixed relative to the viewport. Stays in place regardless of scroll.
 * - `absolute` — Positioned relative to the nearest positioned ancestor.
 *                Useful when the sidebar must float over a map canvas with `position: relative`.
 */
export type SidebarPosition = "sticky" | "fixed" | "absolute";

/**
 * Side of the screen the Sidebar is anchored to.
 * - `left`  — Anchored to the left edge.
 * - `right` — Anchored to the right edge.
 */
export type SidebarSide = "left" | "right";

/**
 * Padding scale applied to `SidebarContent`.
 * - `none` — No padding. Useful when the content manages its own spacing.
 * - `sm`   — Small padding (`--boulder-spacing-sm`).
 * - `md`   — Medium padding (`--boulder-spacing-md`). Default.
 * - `lg`   — Large padding (`--boulder-spacing-lg`).
 */
export type SidebarPadding = "none" | "sm" | "md" | "lg";

// ─── SidebarRoot ──────────────────────────────────────────────────────────────

export interface SidebarProps extends HTMLAttributes<HTMLElement> {
  /**
   * Visual style of the sidebar.
   * @default "floating"
   */
  variant?: SidebarVariant;
  /**
   * CSS position behavior of the sidebar.
   * Use `"sticky"` to keep the sidebar in view while the page scrolls behind it.
   * Use `"fixed"` for a viewport-anchored panel that is always visible.
   * Use `"absolute"` to float over a positioned container such as a map canvas.
   * @default "sticky"
   */
  position?: SidebarPosition;
  /**
   * Side of the screen the sidebar is anchored to.
   * @default "left"
   */
  side?: SidebarSide;
  /**
   * Width of the sidebar. Accepts any valid CSS width value.
   * @default "280px"
   */
  width?: CSSProperties["width"];
  children: ReactNode;
}

// ─── SidebarHeader ────────────────────────────────────────────────────────────

export interface SidebarHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

// ─── SidebarContent ───────────────────────────────────────────────────────────

export interface SidebarContentProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Controls the internal padding of the content area.
   * @default "md"
   */
  padding?: SidebarPadding;
  children: ReactNode;
}

// ─── SidebarFooter ────────────────────────────────────────────────────────────

export interface SidebarFooterProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}
