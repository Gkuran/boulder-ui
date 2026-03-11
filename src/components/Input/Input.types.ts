import type { InputHTMLAttributes } from "react";

export type InputVariant = "outline" | "filled";
export type InputSize = "sm" | "md" | "lg";

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  error?: string;
  variant?: InputVariant;
  /** Tamanho visual do input. Substitui o atributo nativo `size` (number). */
  size?: InputSize;
}
