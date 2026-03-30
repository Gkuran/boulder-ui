import type { ReactNode } from "react";

export type TooltipPosition = "top" | "right" | "bottom" | "left";

export interface TooltipProps {
  /**
   * The content to display inside the tooltip.
   */
  content: ReactNode;
  /**
   * The element that triggers the tooltip on hover/focus.
   */
  children: ReactNode;
  /**
   * Preferred position of the tooltip relative to the trigger.
   * @default "top"
   */
  position?: TooltipPosition;
  /**
   * Delay in milliseconds before showing the tooltip.
   * @default 300
   */
  delay?: number;
  /**
   * When true, the tooltip is never shown.
   * @default false
   */
  disabled?: boolean;
}
