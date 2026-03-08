import type { InputHTMLAttributes } from "react";

export type InputVariant = "outline" | "filled";
export type InputSize = "sm" | "md" | "lg";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  variant?: InputVariant;
  sizeVariant?: InputSize;
}
