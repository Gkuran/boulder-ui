import type { CSSProperties, HTMLAttributes } from "react";

export type SkeletonVariant = "text" | "circular" | "rectangular";

export interface SkeletonProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * Shape of the skeleton placeholder.
   * - `text` — Rounded pill shape, ideal for text lines.
   * - `circular` — Perfect circle, ideal for avatars.
   * - `rectangular` — Rectangle with slight rounding, ideal for images and cards.
   * @default "text"
   */
  variant?: SkeletonVariant;
  /**
   * Width of the skeleton. Accepts any valid CSS width value.
   * @default "100%"
   */
  width?: CSSProperties["width"];
  /**
   * Height of the skeleton. Accepts any valid CSS height value.
   * @default "1em" for text, "40px" for circular and rectangular
   */
  height?: CSSProperties["height"];
  /**
   * When false, disables the pulsing animation.
   * Automatically respects `prefers-reduced-motion`.
   * @default true
   */
  animate?: boolean;
}
