import type { HTMLAttributes } from "react";

export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  /** The label displayed inside the tag. */
  label: string;

  /**
   * Callback fired when the remove button (×) is clicked.
   * When provided, the remove button is rendered.
   * When omitted, the tag is display-only (no remove button).
   */
  onRemove?: () => void;

  /**
   * Accessible label for the remove button.
   * @default `"Remove ${label}"`
   */
  removeLabel?: string;

  /**
   * Whether the tag is in a selected/active state.
   * @default false
   */
  active?: boolean;
}
