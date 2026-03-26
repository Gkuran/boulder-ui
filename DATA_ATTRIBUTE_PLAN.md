# Planejamento do Componente: DataAttribute

## Visão Geral
O `DataAttribute` será um componente focado na exibição padronizada de pares de chave-valor (metadados). No contexto de um software científico que lida com fauna, flora e amostras de solo, a interface frequentemente precisa exibir listas densas de informações técnicas (ex: coordenadas, pH do solo, nome científico, status de conservação, método de coleta).

Este componente garantirá que esses dados sejam exibidos de forma consistente, legível e acessível, evitando que os desenvolvedores precisem recriar layouts de chave-valor repetidamente.

## Requisitos Chave
1. **Consistência Visual**: Padronizar o espaçamento, tipografia e alinhamento entre o rótulo (label) e o valor (value).
2. **Flexibilidade de Layout**: Suportar diferentes orientações (horizontal vs. vertical) para se adaptar a espaços apertados (como dentro de um `Card` ou `Sidebar`) ou espaços amplos.
3. **Suporte a Dados Complexos**: O valor não deve ser apenas texto; deve aceitar `ReactNode` para permitir a inclusão de badges (ex: status IUCN), links (ex: fonte GBIF) ou formatação rica (ex: itálico para nomes científicos).
4. **Estados de "Dado Ausente"**: Lidar graciosamente com valores nulos ou indefinidos (ex: exibindo "N/A" ou "Não informado").

## API Planejada

O componente será simples e direto, não necessitando do padrão Compound Component, pois sua estrutura interna é muito previsível.

### Props (`DataAttributeProps`)

| Prop | Tipo | Padrão | Descrição |
| :--- | :--- | :--- | :--- |
| `label` | `ReactNode` | **Obrigatório** | O nome do atributo (ex: "Coordenadas", "pH"). |
| `value` | `ReactNode` | **Obrigatório** | O valor do atributo. |
| `orientation` | `"horizontal" \| "vertical"` | `"horizontal"` | Define se o valor fica ao lado do label ou abaixo dele. |
| `align` | `"left" \| "right" \| "between"` | `"between"` | (Apenas para horizontal) Como distribuir o espaço. `between` empurra o valor para a direita. |
| `fallback` | `string` | `"N/A"` | Texto a ser exibido caso o `value` seja `null`, `undefined` ou string vazia. |
| `truncate` | `boolean` | `false` | Se `true`, aplica reticências (`text-overflow: ellipsis`) a valores muito longos. |

## Variantes e Estilização (Tokens)

*   **Label**:
    *   Cor: `--boulder-color-text-secondary` (para dar menos peso visual que o dado em si).
    *   Tamanho: `--boulder-font-size-sm` ou `--boulder-font-size-md`.
*   **Value**:
    *   Cor: `--boulder-color-text`.
    *   Peso: `--boulder-font-weight-medium` (para destacar a informação).
*   **Espaçamento**:
    *   Gap entre label e value: `--boulder-spacing-xs` (vertical) ou `--boulder-spacing-sm` (horizontal).

## Exemplos de Uso Projetados

### 1. Horizontal (Padrão - Ideal para Sidebars/Cards)
```tsx
<DataAttribute 
  label="Coordenadas" 
  value="3°42′11″ S, 60°01′34″ W" 
/>
// Renderiza: Coordenadas ................... 3°42′11″ S, 60°01′34″ W
```

### 2. Vertical (Ideal para textos longos ou formulários)
```tsx
<DataAttribute 
  orientation="vertical"
  label="Notas de Campo" 
  value="Indivíduo avistado próximo à margem do rio, comportamento de forrageamento." 
/>
// Renderiza: 
// Notas de Campo
// Indivíduo avistado próximo à margem do rio...
```

### 3. Com formatação rica (ReactNode)
```tsx
<DataAttribute 
  label="Espécie" 
  value={<i>Panthera onca</i>} 
/>
```

### 4. Com Fallback (Dado ausente)
```tsx
<DataAttribute 
  label="Voucher Institucional" 
  value={null} 
  fallback="Não coletado"
/>
// Renderiza: Voucher Institucional ......... Não coletado
```

## Considerações de Acessibilidade
*   O componente não precisa de roles ARIA complexos, pois é essencialmente semântico se usarmos tags como `<dl>`, `<dt>` (definition term) e `<dd>` (definition description).
*   **Decisão Arquitetural**: O componente raiz renderizará um `<div>` por padrão para facilitar o uso em qualquer contexto, mas podemos oferecer uma prop `as="dl"` ou simplesmente recomendar que múltiplos `DataAttribute` sejam envolvidos por uma `<dl>` na aplicação consumidora, enquanto o componente em si renderiza `<dt>` e `<dd>`. Para manter a simplicidade e evitar quebra de layout flexbox, usaremos `div` > `span` + `span` ou `div` + `div`.

## Por que este componente é o próximo passo ideal?
Nas stories do `Card` e da `Sidebar`, já tivemos que recriar manualmente o layout de chave-valor várias vezes usando `div` com `display: flex` e `justify-content: space-between`. Ter o `DataAttribute` formalizado reduzirá drasticamente o boilerplate nas aplicações que consumirem o Boulder UI para exibir dados de shapefiles ou registros de campo.
