import type { HTMLAttributes, ReactNode } from "react";

export type ToastVariant = "default" | "success" | "danger" | "warning" | "info";

export type ToastPosition =
  | "top-left"
  | "top-right"
  | "top-center"
  | "bottom-left"
  | "bottom-right"
  | "bottom-center";

export interface ToastProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  /**
   * The main title of the notification.
   */
  title: ReactNode;

  /**
   * Optional secondary text with more details.
   */
  description?: ReactNode;

  /**
   * Defines the color scheme of the toast.
   * @default "default"
   */
  variant?: ToastVariant;

  /**
   * Position of the toast on the screen.
   * @default "bottom-right"
   */
  position?: ToastPosition;

  /**
   * Optional icon displayed to the left of the text.
   */
  icon?: ReactNode;

  /**
   * Time in milliseconds before the toast automatically disappears.
   * Only applies if `persistent` is false.
   * @default 5000
   */
  duration?: number;

  /**
   * If true, the toast will not disappear automatically.
   * It hides the progress bar and requires manual closing.
   * @default false
   */
  persistent?: boolean;

  /**
   * If true and `persistent` is false, displays an animated progress bar at the bottom.
   * @default true
   */
  showProgress?: boolean;

  /**
   * Callback fired when the close button is clicked or the duration ends.
   * If provided, a close button (X) will be rendered.
   */
  onClose?: () => void;
}
