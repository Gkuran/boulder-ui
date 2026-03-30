import type { HTMLAttributes } from "react";

export type ProgressBarVariant = "primary" | "success" | "warning" | "danger";
export type ProgressBarSize = "sm" | "md" | "lg";

export interface ProgressBarProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Current progress value. Must be between 0 and `max`.
   */
  value: number;
  /**
   * Maximum value. Defaults to 100.
   * @default 100
   */
  max?: number;
  /**
   * Visual color variant.
   * @default "primary"
   */
  variant?: ProgressBarVariant;
  /**
   * Height of the bar.
   * @default "md"
   */
  size?: ProgressBarSize;
  /**
   * Optional visible label displayed above the bar.
   */
  label?: string;
  /**
   * When true, displays the percentage value next to the label.
   * @default false
   */
  showValue?: boolean;
}
