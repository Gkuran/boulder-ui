# Planejamento do Componente: Sidebar

## Visão Geral
A `Sidebar` será um componente de layout projetado para aplicações geoespaciais e científicas. Ela servirá como um painel lateral flutuante e *sticky*, ideal para abrigar controles de camadas de mapas, filtros de busca de ocorrências (fauna/flora) ou formulários de entrada de dados de campo.

O componente seguirá o padrão de **Compound Components** do Boulder UI, garantindo flexibilidade para que os consumidores componham o layout interno conforme necessário.

## Requisitos Chave
1. **Posicionamento Sticky/Flutuante**: A sidebar deve permanecer visível e fixa na tela mesmo quando o usuário rolar a página ao fundo (comportamento `sticky` ou `fixed`).
2. **Design Flutuante**: Deve suportar uma variante que a faça parecer "flutuar" sobre o mapa (com margens, bordas arredondadas e sombra).
3. **Conteúdo Estático**: O conteúdo interno da sidebar **não rola**. A sidebar é um painel estático que acompanha a viewport.
4. **Colapsabilidade (Opcional/Futuro)**: A estrutura deve prever a possibilidade de ser minimizada para economizar espaço no mapa.

## Sub-componentes Planejados

A API será dividida em 4 partes principais:

### 1. `Sidebar` (Root)
O container principal que gerencia o posicionamento, largura e variantes visuais.
*   **Props**:
    *   `variant`: `"default"` (colada na borda da tela) | `"floating"` (com margem, sombra e border-radius, ideal para sobrepor mapas).
    *   `position`: `"sticky"` | `"fixed"` | `"absolute"`.
    *   `side`: `"left"` | `"right"` (define de qual lado da tela ela ficará ancorada).
    *   `width`: Permite sobrescrever a largura padrão (ex: `320px`).

### 2. `SidebarHeader`
A seção superior. Ideal para o título do painel, botões de fechar/minimizar ou abas de navegação.
*   **Comportamento**: Borda inferior sutil.

### 3. `SidebarContent`
A área principal de conteúdo.
*   **Comportamento**: Ocupa o espaço restante (`flex: 1`). **Não possui rolagem interna**.
*   **Props**:
    *   `padding`: `"none"` | `"sm"` | `"md"` | `"lg"` (similar ao `CardContent`).

### 4. `SidebarFooter`
A seção inferior. Ideal para botões de ação globais (ex: "Aplicar Filtros", "Exportar Dados").
*   **Comportamento**: Borda superior sutil.

## Variantes Visuais (`SidebarVariant`)

*   **`default`**:
    *   Fundo sólido (`var(--boulder-color-surface)`).
    *   Sem margens externas.
    *   Borda apenas no lado oposto ao ancoramento (ex: borda direita se `side="left"`).
    *   Sem border-radius (colada na tela).
*   **`floating`**:
    *   Fundo sólido.
    *   Margem externa (`var(--boulder-spacing-md)`).
    *   Bordas arredondadas (`var(--boulder-radius-md)`).
    *   Sombra (`box-shadow`) para destacar sobre o mapa.
    *   Borda completa ao redor.

## Tokens Utilizados
A estilização dependerá estritamente dos tokens existentes:
*   **Cores**: `--boulder-color-surface`, `--boulder-color-border`, `--boulder-color-text`.
*   **Espaçamento**: `--boulder-spacing-sm`, `--boulder-spacing-md`.
*   **Bordas**: `--boulder-radius-md`.

## Exemplo de Uso Projetado

```tsx
<Sidebar variant="floating" position="sticky" side="left">
  <SidebarHeader>
    <h2 style={{ margin: 0, fontSize: 'var(--boulder-font-size-lg)' }}>
      Camadas do Mapa
    </h2>
  </SidebarHeader>
  
  <SidebarContent padding="md">
    {/* Conteúdo estático do painel */}
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Checkbox label="Ocorrências de Fauna" defaultChecked />
      <Checkbox label="Ocorrências de Flora" defaultChecked />
      <Checkbox label="Amostras de Solo" />
    </div>
  </SidebarContent>
  
  <SidebarFooter>
    <Button variant="primary" style={{ width: '100%' }}>
      Aplicar Filtros
    </Button>
  </SidebarFooter>
</Sidebar>
```

## Considerações para o Storybook
Como a Sidebar envolve posicionamento complexo (`sticky`/`fixed`/`absolute`), as stories no Storybook precisarão de um *decorator* ou configuração de layout específica (`layout: 'fullscreen'`) e um container longo para simular o scroll da página ao fundo, demonstrando que a Sidebar permanece fixa enquanto o resto rola.
