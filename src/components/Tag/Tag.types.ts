import type { HTMLAttributes, MouseEvent } from "react";

export type TagVariant = "default" | "primary" | "success" | "warning" | "danger";

export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  /** Variante visual da tag. Controla a cor de fundo e do texto. */
  variant?: TagVariant;
  /**
   * Função chamada quando o botão de remover (X) é clicado.
   * Se não for fornecida, a tag é renderizada em modo somente-leitura,
   * sem o botão de remover.
   */
  onRemove?: (e: MouseEvent<HTMLButtonElement>) => void;
  /**
   * Rótulo acessível para o botão de remover.
   * Deve descrever o que será removido para leitores de tela.
   * @default "Remover tag"
   */
  removeAriaLabel?: string;
}
