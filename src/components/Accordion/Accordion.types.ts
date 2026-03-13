import type { HTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

// ─── Shared ───────────────────────────────────────────────────────────────────

export type AccordionVariant = "default" | "flush";

// ─── AccordionRoot ────────────────────────────────────────────────────────────

export interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Visual style of the accordion.
   * - `default`: bordered container with rounded corners.
   * - `flush`: no outer border or radius; items are separated by dividers only.
   * @default "default"
   */
  variant?: AccordionVariant;
}

// ─── AccordionItem ────────────────────────────────────────────────────────────

export interface AccordionItemProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Whether this item is expanded by default (uncontrolled).
   * @default false
   */
  defaultOpen?: boolean;
  /**
   * Controlled open state. When provided, the component becomes controlled
   * and `onOpenChange` must also be supplied.
   */
  open?: boolean;
  /**
   * Callback fired when the item's open state changes.
   */
  onOpenChange?: (open: boolean) => void;
  /**
   * When `true`, the item cannot be toggled.
   * @default false
   */
  disabled?: boolean;
}

// ─── AccordionTrigger ─────────────────────────────────────────────────────────

/**
 * `open` is intentionally omitted from ButtonHTMLAttributes because it is not
 * a valid attribute on <button> and would conflict with the internal open state
 * passed down from AccordionItem.
 */
export interface AccordionTriggerProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
  children: ReactNode;
}

// ─── AccordionContent ─────────────────────────────────────────────────────────

export interface AccordionContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}
