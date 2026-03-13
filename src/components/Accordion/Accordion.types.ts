import type { HTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

// ─── Shared ───────────────────────────────────────────────────────────────────

export type AccordionVariant = "default" | "flush";

/**
 * Controls the fixed width of the Accordion.
 * - `sm`   — 280px. Suitable for sidebars or narrow panels.
 * - `md`   — 480px. Suitable for content areas and forms.
 * - `full` — 100% of the parent container. Default behavior.
 */
export type AccordionWidth = "sm" | "md" | "full";

// ─── AccordionRoot ────────────────────────────────────────────────────────────

export interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Visual style of the accordion.
   * - `default`: bordered container with rounded corners.
   * - `flush`: no outer border or radius; items are separated by dividers only.
   * @default "default"
   */
  variant?: AccordionVariant;
  /**
   * Fixed width of the accordion root.
   * Ensures the component maintains the same width whether open or closed.
   * - `sm`   — 280px. Suitable for sidebars or narrow panels.
   * - `md`   — 480px. Suitable for content areas and forms.
   * - `full` — 100% of the parent container.
   * @default "full"
   */
  width?: AccordionWidth;
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
 * `type` is intentionally omitted from ButtonHTMLAttributes — it is always
 * set to `"button"` internally to prevent accidental form submission.
 */
export interface AccordionTriggerProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
  children: ReactNode;
}

// ─── AccordionContent ─────────────────────────────────────────────────────────

export interface AccordionContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}
