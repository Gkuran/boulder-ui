import type { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  /**
   * Optional icon rendered to the left of the button label.
   * Accepts any ReactNode (SVG, img, icon component).
   */
  icon?: ReactNode;
}
