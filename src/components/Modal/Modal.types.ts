import type { HTMLAttributes, ReactNode } from "react";

/**
 * Controls the maximum width of the modal dialog.
 * - `sm`   — 400px. Ideal for simple confirmations.
 * - `md`   — 560px. Ideal for short forms. Default.
 * - `lg`   — 800px. Ideal for complex multi-column forms.
 * - `full` — 96vw. Ideal for data-dense views or full-screen content.
 */
export type ModalSize = "sm" | "md" | "lg" | "full";

export type ModalVariant = "default" | "glass";

/**
 * Padding scale applied to `ModalContent`.
 */
export type ModalPadding = "none" | "sm" | "md" | "lg";

// ─── Modal (Root) ─────────────────────────────────────────────────────────────

export interface ModalProps {
  /**
   * Controls whether the modal is visible.
   */
  isOpen: boolean;

  /**
   * Callback fired when the modal should close.
   * Triggered by: Escape key, overlay click (if enabled), or close button.
   */
  onClose: () => void;

  /**
   * The content of the modal, typically composed of ModalHeader,
   * ModalContent, and ModalFooter.
   */
  children: ReactNode;

  /**
   * Controls the maximum width of the modal dialog.
   * @default "md"
   */
  size?: ModalSize;

  /**
   * Visual style of the modal surface.
   * @default "default"
   */
  variant?: ModalVariant;

  /**
   * If true, clicking the dark overlay behind the modal will trigger onClose.
   * @default true
   */
  closeOnOverlayClick?: boolean;

  /**
   * If true, the default close button (X) in the top-right corner is hidden.
   * Use this when you want to force the user to take an explicit action.
   * @default false
   */
  hideCloseButton?: boolean;
}

// ─── ModalHeader ──────────────────────────────────────────────────────────────

export interface ModalHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

// ─── ModalTitle ───────────────────────────────────────────────────────────────

export interface ModalTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  /**
   * The HTML heading element to render.
   * Allows consumers to maintain correct heading hierarchy within the page.
   * @default "h2"
   */
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: ReactNode;
}

// ─── ModalContent ─────────────────────────────────────────────────────────────

export interface ModalContentProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Controls the internal padding of the content area.
   * Use `"none"` when the content manages its own spacing (e.g., a table or image).
   * @default "md"
   */
  padding?: ModalPadding;
  children: ReactNode;
}

// ─── ModalFooter ──────────────────────────────────────────────────────────────

export interface ModalFooterProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}
