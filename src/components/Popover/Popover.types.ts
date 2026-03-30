import type { HTMLAttributes, ReactNode } from "react";

export type PopoverPosition = "top" | "right" | "bottom" | "left";

export interface PopoverRootProps {
  /**
   * Controls the open state externally. Use with `onOpenChange` for controlled usage.
   */
  open?: boolean;
  /**
   * Called when the open state changes.
   */
  onOpenChange?: (open: boolean) => void;
  /**
   * Initial open state for uncontrolled usage.
   * @default false
   */
  defaultOpen?: boolean;
  children: ReactNode;
}

export interface PopoverTriggerProps {
  children: ReactNode;
}

export interface PopoverContentProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Preferred position relative to the trigger.
   * @default "bottom"
   */
  position?: PopoverPosition;
  children: ReactNode;
}
