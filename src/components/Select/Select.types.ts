import type { SelectHTMLAttributes, ReactNode } from "react";

export type SelectVariant = "outline" | "filled";
export type SelectSize = "sm" | "md" | "lg";

export interface SelectProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "size"> {
  /** Variante visual do select. Padrão: "outline" */
  variant?: SelectVariant;
  /** Tamanho visual do select. Substitui o atributo nativo `size`. Padrão: "md" */
  size?: SelectSize;
  /** Mensagem de erro. Aplica borda vermelha e aria-invalid no elemento nativo. */
  error?: string;
  /** Ícone customizado para substituir o chevron padrão à direita. */
  icon?: ReactNode;
}
