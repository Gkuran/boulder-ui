# Planejamento do Componente: Toast

## Visão Geral
O `Toast` (ou Snackbar) é um componente de feedback não obstrutivo usado para exibir notificações temporárias sobre o resultado de uma ação (ex: "Shapefile importado com sucesso", "Erro ao salvar amostra de solo").

Ele deve ser altamente configurável, suportando diferentes posições na tela, variantes visuais, controle de tempo (com barra de progresso visual) e opções de persistência.

## Requisitos Chave
1. **Posicionamento Flexível**: Suportar os 6 cantos/centros principais da tela.
2. **Variantes Visuais**: Oferecer uma versão neutra e versões coloridas baseadas no estado (sucesso, erro, aviso).
3. **Controle de Tempo**: Desaparecer automaticamente após um tempo configurável, com uma barra de progresso visual indicando o tempo restante.
4. **Persistência (Pin)**: Permitir que o toast fique fixo na tela até que o usuário o feche manualmente.
5. **Acessibilidade**: Deve anunciar seu conteúdo para leitores de tela (usando `role="status"` ou `role="alert"` dependendo da severidade) e permitir foco no botão de fechar.

## API Planejada (`ToastProps`)

O componente principal será o `Toast`. Em uma implementação completa de design system, geralmente há um `ToastProvider` e um hook `useToast` para gerenciar múltiplos toasts imperativamente, mas para esta etapa, focaremos na **UI do componente isolado** (a casca visual), que é o padrão do Boulder UI até o momento.

| Prop | Tipo | Padrão | Descrição |
| :--- | :--- | :--- | :--- |
| `title` | `ReactNode` | **Obrigatório** | O título principal da notificação. |
| `description` | `ReactNode` | `undefined` | Texto secundário opcional com mais detalhes. |
| `variant` | `"default" \| "success" \| "danger" \| "warning" \| "info"` | `"default"` | Define as cores do toast. `default` é a versão neutra. |
| `position` | `"top-left" \| "top-right" \| "top-center" \| "bottom-left" \| "bottom-right" \| "bottom-center"` | `"bottom-right"` | Posição do toast na tela. |
| `icon` | `ReactNode` | `undefined` | Ícone opcional para ser exibido à esquerda do texto. |
| `duration` | `number` | `5000` | Tempo em milissegundos antes do toast desaparecer automaticamente. |
| `persistent` | `boolean` | `false` | Se `true`, o toast não desaparece automaticamente (ignora `duration` e barra de progresso). Equivalente a "pinar". |
| `showProgress` | `boolean` | `true` | Se `true` e `persistent` for `false`, exibe uma barra animada na base do toast. |
| `onClose` | `() => void` | `undefined` | Callback disparado quando o botão de fechar (X) é clicado ou o tempo acaba. Se fornecido, renderiza o botão de fechar. |

## Estrutura Interna (DOM)
```html
<div class="toast position-bottom-right variant-success" role="status">
  <div class="toast-content-wrapper">
    <!-- Ícone Opcional -->
    <div class="toast-icon">{icon}</div>
    
    <!-- Textos -->
    <div class="toast-text">
      <strong class="toast-title">{title}</strong>
      <span class="toast-description">{description}</span>
    </div>
    
    <!-- Botão de Fechar Opcional -->
    <button class="toast-close" aria-label="Close" onClick={onClose}>
      <CloseIcon />
    </button>
  </div>
  
  <!-- Barra de Progresso Opcional -->
  <div class="toast-progress-bar" style="animation-duration: {duration}ms"></div>
</div>
```

## Estilização e Tokens
*   **Fundo e Bordas**:
    *   `default`: Fundo `--boulder-color-surface`, borda `--boulder-color-border`.
    *   `danger`: Fundo/Borda baseados em `--boulder-color-danger`.
    *   *(Nota: Precisaremos adicionar tokens para `success`, `warning` e `info` no `tokens.css`, pois atualmente só temos `danger` e as cores base).*
*   **Sombra**: Utilizará uma sombra proeminente (similar à variante `floating` do Card/Sidebar) para se destacar do fundo.
*   **Animação da Barra**: Uma animação CSS simples (`@keyframes shrink { from { width: 100% } to { width: 0% } }`) aplicada à barra de progresso.

## Storybook
Conforme solicitado, o componente será categorizado sob um novo subgrupo no Storybook.
O `title` no meta do Storybook será: `title: "Feedback/Toast"`.

**Stories Planejadas:**
1.  **Default**: Toast neutro no canto inferior direito.
2.  **Variants**: Demonstração das cores (Success, Danger, Warning, Info).
3.  **Positions**: Demonstração das 6 posições possíveis na tela.
4.  **With Icon & Description**: Um toast rico com ícone e texto detalhado.
5.  **Persistent (Pinned)**: Toast sem barra de progresso que exige fechamento manual.
6.  **Custom Duration**: Toast rápido (ex: 2000ms) para mostrar a barra de progresso acelerada.

## Considerações Futuras
Esta implementação focará na **UI do Toast**. Para uso real em produção, a aplicação consumidora precisará de um gerenciador de estado (como um Context API ou Zustand) para renderizar múltiplos toasts dinamicamente e empilhá-los corretamente. O Boulder UI fornecerá a "peça de lego" perfeita para isso.
