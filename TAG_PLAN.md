# Planejamento do Componente: Tag

## 1. Visão Geral e Filosofia
O componente `Tag` será um elemento visual interativo utilizado primariamente para representar filtros ativos, seleções múltiplas (como em dropdowns de múltipla escolha) e categorizações dinâmicas. 

Diferente do componente `Badge` (que é estático e focado em exibir status), a `Tag` possui um formato *pill* (arredondado) e suporta interatividade, especificamente a capacidade de ser removida/limpa através de um pequeno botão "X" embutido. Seguindo a filosofia do **Boulder UI**, o componente será leve, acessível e construído estritamente com os *design tokens* existentes.

## 2. API e Tipagem (`TagProps`)
A API será simples e focada na funcionalidade de remoção. O componente base será um `span` ou `div` que atua como contêiner, e aceitará uma função `onRemove`.

```typescript
import type { HTMLAttributes, MouseEvent } from "react";

export type TagVariant = "default" | "primary" | "success" | "warning" | "danger";

export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  /** Variante visual da tag */
  variant?: TagVariant;
  /** 
   * Função chamada quando o botão de remover (X) é clicado.
   * Se não for fornecida, a tag será renderizada sem o botão de remover (apenas visual).
   */
  onRemove?: (e: MouseEvent<HTMLButtonElement>) => void;
  /** Rótulo acessível para o botão de remover (útil para leitores de tela) */
  removeAriaLabel?: string;
}
```

## 3. Arquitetura e Estrutura DOM
A estrutura DOM consistirá em um contêiner principal que envolve o conteúdo (texto) e, condicionalmente, um botão de remoção.

```tsx
<span className={cx(styles.tag, styles[variant], className)} {...props}>
  <span className={styles.content}>{children}</span>
  
  {onRemove && (
    <button
      type="button"
      className={styles.removeButton}
      onClick={onRemove}
      aria-label={removeAriaLabel || "Remover tag"}
    >
      <CloseIcon aria-hidden="true" />
    </button>
  )}
</span>
```

**Considerações de Acessibilidade:**
- O botão de remover será um `<button type="button">` real para garantir navegabilidade por teclado.
- O botão terá um `aria-label` claro (ex: "Remover filtro Cerrado").
- O ícone "X" (SVG) terá `aria-hidden="true"` para não poluir a leitura do leitor de tela.

## 4. Variantes e Estados (Tokens)
O componente utilizará os tokens do sistema para garantir consistência:

*   **Formato Pill**: Utilizaremos um `border-radius` alto (ex: `9999px` ou um novo token `--boulder-radius-full` se adicionado, mas por enquanto podemos usar um valor absoluto seguro para formato pill, já que os tokens atuais vão até `md`).
*   **Variantes**: 
    *   `default`: Fundo `surface` e texto `text`.
    *   `primary`: Fundo `primary-soft` e texto `primary`.
    *   `success`, `warning`, `danger`: Cores semânticas correspondentes (fundo claro e texto escuro, ou fundo sólido, dependendo do contraste).
*   **Botão de Remover**: O botão terá um estado de `:hover` e `:focus-visible` claro, utilizando `opacity` ou alterando o `background-color` com tokens como `--boulder-color-muted` ou variações de hover.
*   **Espaçamento**: Paddings assimétricos (ex: menor na direita quando o botão "X" estiver presente) baseados em `--boulder-spacing-xs` e `--boulder-spacing-sm`.

## 5. Exemplos Projetados para o Storybook (Contexto Científico)
As stories serão categorizadas em `Data Display/Tag` (ou `Forms/Tag` dependendo do uso primário) e incluirão exemplos reais do domínio do software:

1.  **Filtros Ativos (Default)**: Tags representando filtros aplicados em um mapa ou tabela.
    *   Exemplo: "Bioma: Cerrado" (com botão de remover).
2.  **Seleção de Camadas (Primary)**: Tags representando *shapefiles* ou camadas ativas.
    *   Exemplo: "Bacias Hidrográficas" (com botão de remover).
3.  **Status de Espécies (Danger/Warning)**: Tags indicando categorias de ameaça da IUCN.
    *   Exemplo: "CR - Criticamente em Perigo" (variante `danger`).
4.  **Apenas Leitura (Sem onRemove)**: Tags usadas apenas para exibição em formato pill, sem a ação de remover.
    *   Exemplo: "Amostra de Solo #402".
5.  **Grupo de Tags**: Um exemplo demonstrando múltiplas tags alinhadas com `gap` (flexbox), simulando uma barra de filtros ativos acima de uma tabela de ocorrências de fauna.
