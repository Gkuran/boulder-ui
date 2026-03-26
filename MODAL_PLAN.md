# Planejamento do Componente: Modal

## Visão Geral
O `Modal` (ou Dialog) é um componente de sobreposição (overlay) que interrompe o fluxo atual do usuário para exibir informações críticas, solicitar confirmações ou apresentar formulários complexos. No contexto científico/geoespacial, é ideal para ações como "Confirmar exclusão de amostra", "Visualizar metadados completos do shapefile" ou "Formulário de nova ocorrência de fauna".

Seguindo a filosofia do Boulder UI, o Modal será construído utilizando o padrão de **Compound Components** para garantir máxima flexibilidade e composabilidade, similar ao `Card` e à `Sidebar`.

## Requisitos Chave
1. **Acessibilidade (a11y)**: 
   - Deve usar `role="dialog"` ou `role="alertdialog"`.
   - Deve gerenciar o foco (trap focus) para que o usuário não consiga interagir com o fundo usando o teclado (Tab).
   - Deve fechar ao pressionar a tecla `Escape`.
   - Deve fechar ao clicar no overlay (backdrop), a menos que seja configurado para não fazê-lo.
2. **Composabilidade**: Dividido em Header, Content e Footer.
3. **Controle de Tamanho**: Suportar diferentes larguras (sm, md, lg, full).
4. **Portal**: O modal deve ser renderizado no final do `<body>` usando `React.createPortal` para evitar problemas de `z-index` e `overflow` com containers pais.

## API Planejada (Compound Pattern)

A API será dividida em 5 partes principais:

### 1. `Modal` (Root)
O container principal que gerencia o estado de visibilidade, o portal e o backdrop.
*   `isOpen` (boolean): Controla se o modal está visível.
*   `onClose` (função): Callback disparado quando o modal deve ser fechado (clique no backdrop, botão X ou tecla Esc).
*   `size` (`"sm" | "md" | "lg" | "full"`): Controla a largura máxima do modal. Padrão: `"md"`.
*   `closeOnOverlayClick` (boolean): Se `true`, fecha o modal ao clicar no fundo escuro. Padrão: `true`.
*   `hideCloseButton` (boolean): Se `true`, esconde o botão "X" padrão no canto superior direito.

### 2. `ModalHeader`
Seção superior, geralmente para o título. O botão de fechar (X) será renderizado automaticamente aqui pelo componente Root (a menos que `hideCloseButton` seja true).
*   Aceita `children` (ReactNode).

### 3. `ModalTitle`
Componente tipográfico semântico para o título do modal.
*   `as` (`"h1" | "h2" | "h3" | "h4" | "h5" | "h6"`): Padrão `"h2"`.

### 4. `ModalContent`
Corpo principal do modal. Terá rolagem vertical automática (`overflow-y: auto`) se o conteúdo for maior que a altura da tela.
*   `padding` (`"none" | "sm" | "md" | "lg"`): Controle de espaçamento interno. Padrão: `"md"`.

### 5. `ModalFooter`
Seção inferior fixa, ideal para botões de ação ("Cancelar", "Confirmar").
*   Aceita `children` (ReactNode).

## Estrutura Interna (DOM)
```html
<!-- Renderizado via React Portal no final do <body> -->
<div class="modal-portal">
  <!-- Backdrop escuro -->
  <div class="modal-overlay" aria-hidden="true"></div>
  
  <!-- Container do Modal -->
  <div class="modal-dialog size-md" role="dialog" aria-modal="true">
    <div class="modal-header">
      <h2 class="modal-title">Confirmar Exclusão</h2>
      <button class="modal-close-button" aria-label="Close">X</button>
    </div>
    
    <div class="modal-content padding-md">
      <p>Tem certeza que deseja excluir a amostra de solo SS-047?</p>
    </div>
    
    <div class="modal-footer">
      <Button variant="secondary">Cancelar</Button>
      <Button variant="danger">Excluir</Button>
    </div>
  </div>
</div>
```

## Estilização e Tokens
*   **Overlay**: Fundo preto com opacidade (ex: `rgba(0, 0, 0, 0.5)`).
*   **Dialog**: Fundo `--boulder-color-surface`, bordas arredondadas `--boulder-radius-md`, sombra proeminente.
*   **Animações**: 
    *   Overlay: `fadeIn` (opacidade 0 para 1).
    *   Dialog: `slideUp` (leve translação de baixo para cima + fadeIn).

## Storybook
O componente será categorizado sob `Overlay/Modal`.

**Stories Planejadas:**
1.  **Default**: Modal simples de confirmação (ex: "Excluir Registro de Fauna").
2.  **Sizes**: Demonstração dos tamanhos `sm`, `md`, `lg` e `full`.
3.  **Long Content**: Modal com conteúdo extenso (ex: "Termos de Uso de Dados Públicos") para demonstrar a rolagem interna do `ModalContent`.
4.  **Form**: Modal contendo um formulário complexo (ex: "Nova Amostra de Solo" com inputs e selects).
5.  **Non-dismissible**: Modal que exige uma ação explícita (clique no overlay desativado, sem botão de fechar).

## Considerações Técnicas
*   **Focus Trap**: Para manter a biblioteca leve e sem dependências externas pesadas, implementaremos um trap focus simples usando um `useEffect` que escuta o evento `keydown` (Tab) e restringe o foco aos elementos focáveis dentro do modal.
*   **Scroll Lock**: Quando o modal abrir, adicionaremos `overflow: hidden` ao `document.body` para evitar que a página de fundo role.
