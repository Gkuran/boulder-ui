import type { HTMLAttributes, ReactNode } from "react";

// ─── Shared ───────────────────────────────────────────────────────────────────

/**
 * Visual variant of the Card root.
 * - `default`     — Standard surface background with a subtle border.
 * - `elevated`    — Adds a drop shadow. Ideal for floating widgets over map canvases.
 * - `outlined`    — Transparent background with a prominent border.
 * - `transparent` — No background, border, or shadow. Useful for embedding in rich backgrounds.
 */
export type CardVariant = "default" | "elevated" | "glass" | "outlined" | "transparent";

/**
 * Padding scale applied to `CardContent`.
 * - `none` — No padding. Useful when the content manages its own spacing (e.g., an image or a list).
 * - `sm`   — Small padding (`--boulder-spacing-sm`).
 * - `md`   — Medium padding (`--boulder-spacing-md`). Default.
 * - `lg`   — Large padding (`--boulder-spacing-lg`).
 */
export type CardPadding = "none" | "sm" | "md" | "lg";

// ─── CardRoot ─────────────────────────────────────────────────────────────────

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Visual style of the card.
   * @default "default"
   */
  variant?: CardVariant;
  children: ReactNode;
}

// ─── CardHeader ───────────────────────────────────────────────────────────────

export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

// ─── CardTitle ────────────────────────────────────────────────────────────────

export interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  /**
   * The HTML heading element to render.
   * Allows consumers to maintain correct heading hierarchy within the page.
   * @default "h3"
   */
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: ReactNode;
}

// ─── CardDescription ──────────────────────────────────────────────────────────

export interface CardDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
}

// ─── CardContent ──────────────────────────────────────────────────────────────

export interface CardContentProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Controls the internal padding of the content area.
   * Use `"none"` when the content (e.g., a list or image) should manage its own spacing.
   * @default "md"
   */
  padding?: CardPadding;
  children: ReactNode;
}

// ─── CardFooter ───────────────────────────────────────────────────────────────

export interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}
