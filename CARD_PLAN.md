# Plano de Arquitetura: Componente Card

## Visão Geral

O componente `Card` será um container flexível e composável, projetado para agrupar informações relacionadas. Seguindo a filosofia do Boulder UI, ele utilizará o padrão de **Compound Components** para garantir máxima flexibilidade, permitindo que os consumidores montem o card com as seções que precisarem (cabeçalho, conteúdo principal, rodapé, etc.).

Como o Boulder UI é voltado para aplicações de geolocalização e mapas, o `Card` deve suportar casos de uso como:
- Painéis de informações sobre um local (Place Details).
- Widgets flutuantes sobre o mapa (ex: controles de camadas, legendas).
- Listagens de resultados de busca.

## Estrutura de Sub-componentes

A API será dividida nos seguintes sub-componentes:

1.  **`Card`** (Root): O container principal. Controla o layout geral, bordas, sombras e fundo.
2.  **`CardHeader`**: Seção superior do card. Geralmente contém o título, subtítulo e ações secundárias (ex: botão de fechar).
3.  **`CardTitle`**: Componente tipográfico específico para o título do card, garantindo consistência visual.
4.  **`CardContent`**: O corpo principal do card, onde o conteúdo dinâmico é inserido. Possui padding padrão.
5.  **`CardFooter`**: Seção inferior do card. Geralmente usada para botões de ação primária ou informações secundárias.
6.  **`CardImage`** (Opcional/Extra): Um slot para imagens de capa (ex: foto de um local), que pode ser posicionado no topo ou nas laterais, removendo o padding e ajustando o border-radius para se alinhar ao container.

## API e Tipagem (`Card.types.ts`)

```typescript
import type { HTMLAttributes, ReactNode } from "react";

// ─── Shared ───────────────────────────────────────────────────────────────────

export type CardVariant = "default" | "elevated" | "outlined" | "transparent";
export type CardPadding = "none" | "sm" | "md" | "lg";

// ─── CardRoot ─────────────────────────────────────────────────────────────────

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Visual style of the card.
   * - `default`: Standard background with subtle border.
   * - `elevated`: Adds a shadow, ideal for floating widgets over maps.
   * - `outlined`: Transparent background with a prominent border.
   * - `transparent`: No background, border, or shadow.
   * @default "default"
   */
  variant?: CardVariant;
  children: ReactNode;
}

// ─── CardHeader ───────────────────────────────────────────────────────────────

export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

// ─── CardTitle ────────────────────────────────────────────────────────────────

export interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  /**
   * HTML heading level to render.
   * @default "h3"
   */
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: ReactNode;
}

// ─── CardContent ──────────────────────────────────────────────────────────────

export interface CardContentProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Controls the padding inside the content area.
   * @default "md"
   */
  padding?: CardPadding;
  children: ReactNode;
}

// ─── CardFooter ───────────────────────────────────────────────────────────────

export interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}
```

## Estilização e Tokens (`Card.module.css`)

O componente utilizará estritamente os tokens CSS existentes no `tokens.css`.

**Tokens principais a serem utilizados:**
- Fundo: `var(--boulder-color-surface)` ou `var(--boulder-color-background)`
- Bordas: `var(--boulder-color-border)`
- Raios de borda: `var(--boulder-radius-md)`
- Espaçamento (Padding/Gap): `var(--boulder-spacing-sm)`, `var(--boulder-spacing-md)`, `var(--boulder-spacing-lg)`
- Tipografia: `var(--boulder-font-size-lg)`, `var(--boulder-font-weight-semibold)` para o título.

**Exemplo de estrutura CSS:**
```css
.root {
  display: flex;
  flex-direction: column;
  border-radius: var(--boulder-radius-md);
  overflow: hidden; /* Garante que imagens respeitem o border-radius */
}

.root.default {
  background-color: var(--boulder-color-surface);
  border: 1px solid var(--boulder-color-border);
}

.root.elevated {
  background-color: var(--boulder-color-surface);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15); /* Sombra para flutuar sobre mapas */
  border: 1px solid var(--boulder-color-border);
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--boulder-spacing-md);
  border-bottom: 1px solid var(--boulder-color-border); /* Opcional, dependendo do design */
}

.title {
  margin: 0;
  font-size: var(--boulder-font-size-lg);
  font-weight: var(--boulder-font-weight-semibold);
  color: var(--boulder-color-text);
}

.content {
  padding: var(--boulder-spacing-md);
  flex: 1;
}

.footer {
  display: flex;
  align-items: center;
  padding: var(--boulder-spacing-md);
  border-top: 1px solid var(--boulder-color-border);
}
```

## Acessibilidade (a11y)

- O `Card` em si é um `div` genérico, mas pode receber `role="region"` ou `role="article"` via props se representar um bloco de conteúdo independente.
- O `CardTitle` permite configurar a tag de cabeçalho (`as="h2"`, `as="h3"`, etc.) para manter a hierarquia semântica da página correta.
- O uso de Compound Components permite que os consumidores adicionem `aria-labelledby` ou `aria-describedby` facilmente, conectando o `Card` ao seu `CardTitle`.

## Exemplos de Uso (Storybook)

### 1. Card Básico (Place Details)
```tsx
<Card>
  <CardHeader>
    <CardTitle>Central Park</CardTitle>
    <Badge variant="success">Open</Badge>
  </CardHeader>
  <CardContent>
    <p>A large public, urban park in the city center.</p>
  </CardContent>
  <CardFooter>
    <Button variant="primary">Get Directions</Button>
  </CardFooter>
</Card>
```

### 2. Widget Flutuante (Map Overlay)
```tsx
<Card variant="elevated" style={{ position: 'absolute', top: 16, right: 16, width: 300 }}>
  <CardHeader>
    <CardTitle as="h4">Map Layers</CardTitle>
  </CardHeader>
  <CardContent padding="sm">
    <Checkbox label="Satellite View" />
    <Checkbox label="Traffic" />
    <Checkbox label="Transit" />
  </CardContent>
</Card>
```

## Próximos Passos (Implementação)
1. Criar os arquivos `Card.tsx`, `Card.types.ts`, `Card.module.css` e `index.ts`.
2. Implementar os sub-componentes usando `forwardRef` e o utilitário `cx`.
3. Criar `Card.stories.tsx` com documentação MDX e exemplos focados em geolocalização.
4. Exportar o componente no barrel principal (`src/components/index.ts`).
