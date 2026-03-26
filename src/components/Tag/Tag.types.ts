import type { HTMLAttributes, MouseEvent } from "react";

export type TagVariant = "default" | "primary" | "success" | "warning" | "danger";

export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  /** Visual variant of the tag. Controls background and text color. */
  variant?: TagVariant;
  /**
   * Callback fired when the remove button (X) is clicked.
   * When not provided, the tag renders in read-only mode with no remove button.
   */
  onRemove?: (e: MouseEvent<HTMLButtonElement>) => void;
  /**
   * Accessible label for the remove button.
   * Should describe what will be removed for screen reader users.
   * @default "Remove tag"
   */
  removeAriaLabel?: string;
}
