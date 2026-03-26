# Plano de Categorização do Storybook - Boulder UI

Com o crescimento da biblioteca, a categoria genérica `Components` está ficando sobrecarregada. A proposta abaixo reorganiza todos os componentes existentes em subgrupos semânticos, melhorando a navegação e a descoberta.

## Estrutura Proposta

### 1. 🎛️ Controls (Controles)
Componentes de interação direta que disparam ações.
*   `Button` (Atualmente em *Components*)

### 2. 📝 Forms (Formulários)
Componentes de entrada de dados e validação.
*   `Checkbox` (Atualmente em *Components*)
*   `ErrorMessage` (Já em *Forms*)
*   `FormField` (Já em *Forms*)
*   `Input` (Atualmente em *Components*)
*   `Label` (Atualmente em *Components*)
*   `Select` (Já em *Forms*)
*   `Switch` (Atualmente em *Components*)
*   `Textarea` (Atualmente em *Components*)

### 3. 📊 Data Display (Exibição de Dados)
Componentes usados para apresentar informações e metadados.
*   `Accordion` (Atualmente em *Components*)
*   `Badge` (Atualmente em *Components*)
*   `Card` (Atualmente em *Components*)
*   `DataAttribute` (Atualmente em *Components*)

### 4. 📢 Feedback (Feedback)
Componentes que comunicam o status do sistema ao usuário.
*   `Spinner` (Já em *Feedback*)
*   `Toast` (Já em *Feedback*)

### 5. 🗺️ Layout & Navigation (Layout e Navegação)
Componentes estruturais de alto nível para organizar a página.
*   `Header` (Atualmente em *Components*)
*   `Sidebar` (Atualmente em *Components*)

### 6. 🔲 Overlay (Sobreposições)
Componentes que flutuam acima do conteúdo principal, interrompendo ou complementando o fluxo.
*   `Modal` (Já em *Overlay*)

---

## Ações Necessárias
Para implementar essa mudança, precisaremos editar o campo `title` no objeto `meta` de cada arquivo `.stories.tsx` correspondente. Exemplo:
De: `title: "Components/Button"`
Para: `title: "Controls/Button"`
