import type { InputHTMLAttributes, ReactNode } from "react";

export type SearchFieldSize = "sm" | "md" | "lg";

export interface SearchFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
  /**
   * Visual size of the field.
   * @default "md"
   */
  size?: SearchFieldSize;

  /**
   * Icon rendered on the left side of the field.
   * Accepts any ReactNode (SVG, img, icon component).
   * Typically a magnifying glass icon.
   */
  leadingIcon?: ReactNode;

  /**
   * Icon or action rendered on the right side of the field.
   * Useful for a clear button or a keyboard shortcut hint.
   */
  trailingIcon?: ReactNode;

  /**
   * Callback fired when the clear button is clicked.
   * When provided alongside a non-empty value, a clear (×) button is
   * rendered on the right, replacing `trailingIcon`.
   */
  onClear?: () => void;
}
