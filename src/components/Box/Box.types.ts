import type { ReactNode } from "react";

export interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Content to render inside the box */
  children?: ReactNode;

  /**
   * Visual variant of the box.
   *
   * - `glass` — Glassmorphism effect with gradient background, blur, and subtle border (default)
   * - `solid` — Solid dark surface without transparency
   * - `ghost` — Transparent with only a subtle border
   */
  variant?: "glass" | "solid" | "ghost";

  /**
   * Padding preset applied to the box.
   *
   * - `none` — No padding
   * - `sm` — Small padding
   * - `md` — Medium padding (default)
   * - `lg` — Large padding
   */
  padding?: "none" | "sm" | "md" | "lg";

  /**
   * Whether to render the box as a semantic `<section>` element.
   * Defaults to `false` (renders as `<div>`).
   */
  asSection?: boolean;
}
