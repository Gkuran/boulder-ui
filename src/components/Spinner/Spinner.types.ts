import type { HTMLAttributes } from "react";

export type SpinnerSize = "xs" | "sm" | "md" | "lg" | "xl";
export type SpinnerVariant = "primary" | "muted" | "success" | "danger" | "warning" | "info" | "inverse";

export interface SpinnerProps extends HTMLAttributes<HTMLSpanElement> {
  /** Tamanho visual do spinner. Padrão: "md" */
  size?: SpinnerSize;
  /** Variante de cor do spinner. Padrão: "primary" */
  variant?: SpinnerVariant;
  /** Texto acessível anunciado por leitores de tela. Padrão: "Loading..." */
  label?: string;
}
