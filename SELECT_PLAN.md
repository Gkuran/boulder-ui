# Planejamento do Componente: Select

## 1. Visão Geral e Filosofia
O componente `Select` será um controle de formulário para seleção de opções. Seguindo a filosofia do **Boulder UI** de ser leve, acessível e focado em performance (tree-shakeable), ele será construído sobre o elemento nativo `<select>` do HTML. 

Em vez de recriar um dropdown complexo do zero (o que adicionaria muito JavaScript e problemas de acessibilidade), estilizaremos o `<select>` nativo para ter a mesma aparência do componente `Input`, ocultando a seta padrão do sistema operacional e injetando um ícone de *chevron* customizado.

## 2. API e Tipagem (`SelectProps`)
A API será quase idêntica à do componente `Input` para garantir consistência.

```typescript
import type { SelectHTMLAttributes, ReactNode } from "react";

export type SelectVariant = "outline" | "filled";
export type SelectSize = "sm" | "md" | "lg";

export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "size"> {
  /** Variante visual do select */
  variant?: SelectVariant;
  /** Tamanho visual do select */
  size?: SelectSize;
  /** Estado de erro (aplica borda vermelha e aria-invalid) */
  error?: string;
  /** Ícone customizado para substituir o chevron padrão */
  icon?: ReactNode;
}
```

*Nota: Omitimos o atributo nativo `size` (que no HTML define quantas opções são visíveis de uma vez) para usar nossa própria prop de tamanho visual (`sm`, `md`, `lg`).*

## 3. Arquitetura e Estrutura DOM
Para permitir a customização do ícone da seta (já que o `<select>` nativo não permite pseudo-elementos como `::after` de forma consistente em todos os browsers), usaremos um *wrapper*:

```tsx
<div className={styles.wrapper}>
  <select className={cx(styles.select, styles[variant], styles[size], error && styles.error)}>
    {children} {/* Aqui entram as <option> nativas */}
  </select>
  <div className={styles.iconWrapper} aria-hidden="true">
    {icon || <DefaultChevronIcon />}
  </div>
</div>
```

**Truque de CSS principal:**
O `<select>` terá `appearance: none` para esconder a seta nativa. O `iconWrapper` terá `position: absolute` à direita e `pointer-events: none` para que os cliques passem através dele e abram o select nativo.

## 4. Integração com `FormField`
O `Select` foi planejado para ser o `children` direto do componente `FormField` existente. O `FormField` injetará automaticamente o `id`, `aria-invalid` e `aria-describedby`, mantendo a acessibilidade perfeita sem esforço extra.

## 5. Variantes e Estados (Tokens)
*   **Variantes**: `outline` (borda padrão) e `filled` (fundo sutil, sem borda).
*   **Tamanhos**: `sm`, `md`, `lg` (mesmos paddings e fontes do `Input`).
*   **Estados**: `:focus` (anel de foco primário), `:disabled` (opacidade reduzida, cursor not-allowed), `error` (borda vermelha).

## 6. Exemplos Projetados para o Storybook (Contexto Científico)
As stories serão categorizadas em `Forms/Select` e incluirão exemplos reais do domínio do software:

1.  **Default**: Seleção de Bioma (Amazônia, Cerrado, Mata Atlântica, etc.).
2.  **Filled Variant**: Seleção de Horizonte de Solo (O, A, B, C, R).
3.  **With FormField**: Um campo completo com label e descrição para selecionar o Sistema de Referência de Coordenadas (CRS - EPSG:4674, EPSG:4326).
4.  **Error State**: Validação falha ao não selecionar um método de coleta obrigatório.
5.  **Disabled**: Campo desabilitado aguardando carregamento de dados.
