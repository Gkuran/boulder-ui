import type { HTMLAttributes, ReactNode } from "react";

export type AlertVariant = "info" | "success" | "warning" | "danger";

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Visual style of the alert, mapped to semantic color tokens.
   * @default "info"
   */
  variant?: AlertVariant;
  /**
   * Optional bold heading displayed above the description.
   */
  heading?: ReactNode;
  /**
   * Optional icon displayed to the left of the content.
   * When not provided, a default icon for the variant is rendered.
   */
  icon?: ReactNode;
  /**
   * When provided, renders a dismiss button and calls this handler on click.
   */
  onClose?: () => void;
  /**
   * Accessible label for the dismiss button.
   * @default "Dismiss alert"
   */
  closeAriaLabel?: string;
  children?: ReactNode;
}
