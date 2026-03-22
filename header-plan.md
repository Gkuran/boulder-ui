# Plano de Implementação: Componente Header (Virtu UI)

O componente `Header` será a âncora de navegação superior do Virtu UI, projetado para trabalhar em conjunto com a `SideBar` e o `Box`. Ele seguirá o mesmo padrão de composição interna e o estilo **glassmorphism** já estabelecido no design system.

## 1. Arquitetura de Componentes

Para garantir máxima flexibilidade (permitindo que o consumidor coloque breadcrumbs, títulos, barras de busca ou avatares onde quiser), o `Header` será dividido em subcomponentes exportados a partir de um único arquivo `Header.tsx`.

| Subcomponente | Elemento HTML | Papel |
| :--- | :--- | :--- |
| **`Header`** | `<header>` | Container principal. Aplica o `backdrop-filter: blur`, gradiente translúcido, `position: sticky` (opcional) e gerencia o layout flexível. |
| **`HeaderSection`** | `<div>` | Agrupador de conteúdo. Usado para alinhar itens à esquerda (ex: Título), centro (ex: Busca) ou direita (ex: Ações/Perfil). |
| **`HeaderAction`** | `<button>` ou `<a>` | Botão iconográfico translúcido para ações rápidas (ex: sino de notificação, engrenagem de config). Suporta badge numérico. |

## 2. Reutilização de Componentes Existentes

Seguindo as diretrizes do Virtu UI, o `Header` não recriará elementos que já existem. Ele será composto utilizando:

*   **`Badge`**: Para exibir contadores de notificação no `HeaderAction` (usando a variante `"count"` criada anteriormente).
*   **`SearchField`**: Pode ser inserido dentro de um `HeaderSection` para busca global.
*   **`Button`**: Para ações primárias ou secundárias (ex: "Novo Pedido").

## 3. Tipagem e Props (`Header.types.ts`)

```typescript
import type { HTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

// ─── Header (Root) ──────────────────────────────────────────────────────────

export interface HeaderProps extends HTMLAttributes<HTMLElement> {
  /**
   * Se true, o header fica fixo no topo da página ao rolar.
   * @default true
   */
  sticky?: boolean;
  
  /**
   * Variante visual do header.
   * - 'glass': Fundo translúcido com blur (padrão Virtu UI).
   * - 'transparent': Sem fundo, apenas layout.
   * @default "glass"
   */
  variant?: "glass" | "transparent";
}

// ─── HeaderSection ──────────────────────────────────────────────────────────

export interface HeaderSectionProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Alinhamento interno dos itens na seção.
   * @default "left"
   */
  align?: "left" | "center" | "right";
  
  /**
   * Se true, a seção ocupa o espaço restante (flex: 1).
   * Útil para empurrar a próxima seção para a direita.
   * @default false
   */
  grow?: boolean;
}

// ─── HeaderAction ───────────────────────────────────────────────────────────

export interface HeaderActionProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Ícone da ação (ex: <BellIcon />) */
  icon: ReactNode;
  
  /** Número opcional para exibir um badge de notificação */
  badge?: number;
  
  /** Texto acessível obrigatório para leitores de tela */
  "aria-label": string;
}
```

## 4. Estilização e Glassmorphism (`Header.module.css`)

O CSS utilizará os tokens globais do Virtu UI para garantir consistência com o `Box` e a `SideBar`.

*   **Fundo**: `var(--virtu-glass-gradient)` ou uma variação mais sutil `rgba(26, 26, 26, 0.6)`.
*   **Blur**: `backdrop-filter: blur(var(--virtu-glass-blur))`.
*   **Borda Inferior**: `1px solid var(--virtu-glass-border)` para separar do conteúdo da página.
*   **Altura**: Fixa (ex: `72px`) ou baseada no padding (`var(--virtu-spacing-md)`).
*   **Z-Index**: Elevado para garantir que fique sobre o conteúdo ao rolar a página.

## 5. Exemplo de Composição (Como será usado)

```tsx
<Header sticky>
  {/* Esquerda: Título da Página */}
  <HeaderSection>
    <h1 style={{ fontSize: 'var(--virtu-font-size-xl)', margin: 0 }}>Pedidos</h1>
  </HeaderSection>

  {/* Centro: Busca Global (opcional) */}
  <HeaderSection grow align="center">
    <SearchField placeholder="Buscar em todo o sistema..." />
  </HeaderSection>

  {/* Direita: Ações e Perfil */}
  <HeaderSection align="right">
    <HeaderAction icon={<BellIcon />} badge={3} aria-label="Notificações" />
    <HeaderAction icon={<SettingsIcon />} aria-label="Configurações" />
    <div className="avatar-placeholder" />
  </HeaderSection>
</Header>
```

## 6. Entregáveis Planejados

1.  **`Header.tsx`**: Contendo `Header`, `HeaderSection` e `HeaderAction`.
2.  **`Header.types.ts`**: Tipagem estrita.
3.  **`Header.module.css`**: Estilos com glassmorphism.
4.  **`Header.stories.tsx`**:
    *   `Default`: Header simples com título e ações.
    *   `WithSearch`: Header com barra de busca central.
    *   `Transparent`: Variante sem fundo.
    *   `PageLayout`: Uma demonstração completa mostrando a `SideBar` à esquerda, o `Header` no topo e um `Box` de conteúdo rolável abaixo, provando o efeito de blur do glassmorphism na prática.
5.  **Atualização dos Barrels**: Exportação no `index.ts` global.

---
*Este plano garante que o Header seja flexível, acessível e perfeitamente alinhado à identidade visual do Virtu UI.*
