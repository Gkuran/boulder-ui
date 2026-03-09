import type { TextareaHTMLAttributes } from "react";

export type TextareaVariant = "outline" | "filled";
export type TextareaSize = "sm" | "md" | "lg";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: TextareaVariant;
  size?: TextareaSize;
}
