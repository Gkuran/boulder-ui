import type { AnchorHTMLAttributes } from "react";

export type LinkVariant = "default" | "subtle" | "underline";

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * Visual style of the link.
   * - `default` — Primary color, underline on hover.
   * - `subtle` — Secondary text color, underline on hover.
   * - `underline` — Always underlined.
   * @default "default"
   */
  variant?: LinkVariant;
  /**
   * When true, adds `target="_blank"` and `rel="noopener noreferrer"` automatically.
   * @default false
   */
  isExternal?: boolean;
}
