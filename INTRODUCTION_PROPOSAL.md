# Proposta de Reformulação: Introduction.mdx

Para tornar a página inicial do Storybook mais atrativa e demonstrar o verdadeiro poder do Boulder UI, proponho utilizarmos os **Doc Blocks avançados do Storybook 8** (como `<Canvas>`, `<Story>`, `<Unstyled>` e `<Source>`) combinados com layouts customizados em JSX.

Aqui está a estrutura proposta para o novo `Introduction.mdx`:

## 1. Hero Section Customizada (com `<Unstyled>`)
Usaremos o bloco `<Unstyled>` para remover a formatação padrão de texto do Storybook no topo da página. Isso nos permitirá criar um "Hero" visualmente impactante, com o logo centralizado, badges do NPM/Tree-shaking e uma tipografia maior para a proposta de valor da biblioteca.

## 2. Destaques (Features Grid)
Em vez de uma lista simples em texto, criaremos um grid responsivo usando `divs` com `display: flex` (similar ao que fizemos em `Typography.mdx`) para destacar os três pilares:
*   **🧩 Simplicity**: Componentes mínimos e composáveis.
*   **♿ Accessibility**: Foco em WAI-ARIA e navegação por teclado.
*   **🎨 Consistency**: Design tokens e abordagem **font-agnostic** (agnóstica de fonte, permitindo que o consumidor traga sua própria tipografia).

## 3. Live Demo Interativa (com `<Canvas>` e `<Story>`)
Esta é a maior novidade: em vez de apenas listar o que existe, vamos **embedar um componente real e interativo** logo na página inicial.
Usaremos o bloco `<Canvas>` importando uma story complexa (como o `Card` de amostra de solo ou o `Modal` de formulário). O usuário poderá interagir com o componente e ver o código-fonte (`<Source>`) diretamente na introdução, sem precisar navegar para outras páginas.

## 4. Catálogo de Componentes Organizado
Atualizaremos a seção "Available Components" para refletir a nova categorização que acabamos de criar. Usaremos um layout de grid com cartões simples para cada categoria:
*   **Controls**: Button
*   **Forms**: Input, Select, Checkbox, etc.
*   **Data Display**: Card, Accordion, DataAttribute, etc.
*   **Feedback**: Toast, Spinner
*   **Layout & Overlay**: Sidebar, Header, Modal

## 5. Quick Start (com `<Source>`)
Melhoraremos a seção de instalação usando o bloco `<Source dark>`, que fornece um syntax highlighting muito mais bonito e um botão de "Copy" nativo para os comandos de instalação (`npm install boulder-ui`) e importação de estilos.

---

### O que ganhamos com isso?
1.  **Primeira impressão profissional**: A documentação parecerá um site de produto real, não apenas um repositório de código.
2.  **Interatividade imediata**: O `<Canvas>` prova que os componentes funcionam logo de cara.
3.  **Navegação clara**: O catálogo reflete a nova arquitetura semântica.

O que acha dessa estrutura? Se aprovar, posso começar a implementar o código MDX imediatamente!
