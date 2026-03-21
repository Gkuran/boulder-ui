# Virtu UI — Guia de Contribuição

Este documento é o **guia de referência** para criar e manter componentes no virtu-ui. Ele descreve as convenções, padrões e decisões de arquitetura que devem ser seguidos por qualquer pessoa (ou agente) que contribua com a biblioteca.

Leia este guia integralmente antes de criar qualquer componente novo.

---

## Índice

1. [Filosofia do projeto](#1-filosofia-do-projeto)
2. [Estrutura de pastas](#2-estrutura-de-pastas)
3. [Criando um novo componente — passo a passo](#3-criando-um-novo-componente--passo-a-passo)
4. [Tipagem TypeScript](#4-tipagem-typescript)
5. [Sistema de tokens](#5-sistema-de-tokens)
6. [Estilização com CSS Modules](#6-estilização-com-css-modules)
7. [Acessibilidade](#7-acessibilidade)
8. [Storybook — formato de stories](#8-storybook--formato-de-stories)
9. [Exports e tree-shaking](#9-exports-e-tree-shaking)
10. [Checklist de revisão](#10-checklist-de-revisão)

---

## 1. Filosofia do projeto

Virtu UI é uma biblioteca **minimal, composable e acessível**. Cada decisão de design deve ser guiada por três perguntas:

> **É necessário?** Adicione apenas o que resolve um problema real. Abstrações prematuras aumentam o custo de manutenção.
>
> **É previsível?** A API do componente deve se comportar exatamente como um desenvolvedor experiente esperaria.
>
> **É acessível?** Se não funciona com teclado e leitor de tela, não está pronto.

A biblioteca não impõe opiniões sobre layout, grid ou temas. Ela fornece **primitivos de interface** que o consumidor compõe livremente.

---

## 2. Estrutura de pastas

Cada componente vive em seu próprio diretório dentro de `src/components/`. A estrutura é sempre a mesma, independentemente da complexidade do componente.

```
src/
├── components/
│   ├── NomeDoComponente/
│   │   ├── NomeDoComponente.tsx          ← implementação
│   │   ├── NomeDoComponente.types.ts     ← tipos e interfaces
│   │   ├── NomeDoComponente.module.css   ← estilos (CSS Modules)
│   │   ├── NomeDoComponente.stories.tsx  ← documentação Storybook
│   │   └── index.ts                      ← barrel export do componente
│   │
│   └── index.ts                          ← barrel export de todos os componentes
│
├── styles/
│   └── tokens.css                        ← design tokens (CSS custom properties)
│
├── utils/
│   ├── cx.ts                             ← utilitário de composição de classes
│   └── index.ts                          ← barrel export dos utilitários
│
└── index.ts                              ← entry point da biblioteca
```

**Regras de nomenclatura:**

- O diretório e todos os arquivos usam **PascalCase** com o mesmo nome do componente.
- O arquivo de tipos é sempre separado do componente (`*.types.ts`), nunca inline.
- O arquivo de stories segue o mesmo nome do componente (`*.stories.tsx`).
- Nunca crie subpastas dentro de um diretório de componente.

---

## 3. Criando um novo componente — passo a passo

A seguir, um exemplo completo de como criar um componente `Badge` do zero.

### 3.1 Criar o arquivo de tipos

Sempre comece pelos tipos. Isso força a pensar na API antes da implementação.

**`src/components/Badge/Badge.types.ts`**

```ts
import type { HTMLAttributes } from "react";

export type BadgeVariant = "default" | "success" | "warning" | "danger";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}
```

**Regras:**

- A interface principal se chama `{Nome}Props` e é sempre exportada.
- Tipos auxiliares (unions, enums) são exportados como `type`, não como `interface`.
- Sempre estenda o atributo HTML nativo correspondente ao elemento raiz do componente.
- Use `Omit<>` quando uma prop nativa conflitar com uma prop customizada (ver [Seção 4](#4-tipagem-typescript)).

### 3.2 Implementar o componente

**`src/components/Badge/Badge.tsx`**

```tsx
import { forwardRef } from "react";
import type { BadgeProps } from "./Badge.types";
import styles from "./Badge.module.css";
import { cx } from "@/utils";

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant = "default", className, children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cx(styles.badge, styles[variant], className)}
        {...props}
      >
        {children}
      </span>
    );
  },
);

Badge.displayName = "Badge";
```

**Regras obrigatórias:**

- Todo componente usa `forwardRef`. Sem exceção. Isso permite que o consumidor acesse o DOM node quando necessário (ex: integração com bibliotecas de animação, foco programático).
- O `displayName` deve ser definido explicitamente após o `forwardRef`. Ele aparece no React DevTools e nas mensagens de erro.
- O `className` do consumidor é sempre mesclado via `cx()` e aplicado **por último**, permitindo sobrescrita.
- O spread `{...props}` vai no elemento raiz, garantindo que atributos HTML nativos (como `data-*`, `aria-*`, event handlers) funcionem sem configuração adicional.
- Importe `cx` sempre de `@/utils`, nunca de `@/utils/cx` diretamente.

### 3.3 Criar os estilos

**`src/components/Badge/Badge.module.css`**

```css
.badge {
  display: inline-flex;
  align-items: center;
  padding: var(--virtu-spacing-xs) var(--virtu-spacing-sm);
  border-radius: var(--virtu-radius-sm);
  font-size: var(--virtu-font-size-xs);
  font-weight: var(--virtu-font-weight-medium);
  font-family: var(--virtu-font-family);
  line-height: var(--virtu-line-height-sm);
}

/* ─── Variantes ───────────────────────────────────────────────────────────── */

.default {
  background: var(--virtu-color-surface);
  color: var(--virtu-color-text);
}

.success {
  background: #d1fae5;
  color: #065f46;
}

.warning {
  background: #fef3c7;
  color: #92400e;
}

.danger {
  background: var(--virtu-color-danger);
  color: var(--virtu-color-text-inverse);
}
```

> **Atenção:** As cores de `success` e `warning` acima são provisórias. Antes de publicar um componente com estados semânticos novos, adicione os tokens correspondentes em `tokens.css` (ver [Seção 5](#5-sistema-de-tokens)).

### 3.4 Criar o barrel export do componente

**`src/components/Badge/index.ts`**

```ts
export { Badge } from "./Badge";
export type { BadgeProps, BadgeVariant } from "./Badge.types";
```

**Regras:**

- Use named exports explícitos. **Nunca** `export * from "./Badge"`.
- Exporte todos os tipos auxiliares públicos (`BadgeVariant`, `BadgeSize`, etc.) junto com a interface principal.
- A ordem é sempre: componente primeiro, tipos depois.

### 3.5 Registrar no barrel global

Adicione uma linha no arquivo `src/components/index.ts`:

```ts
// src/components/index.ts
export * from "./Button";
export * from "./Checkbox";
// ...demais componentes...
export * from "./Badge"; // ← adicionar aqui, em ordem alfabética
```

> O barrel global de componentes pode usar `export *` porque cada componente já controla seus próprios exports explicitamente. O `export *` aqui apenas re-exporta o que cada `index.ts` já expõe.

### 3.6 Criar as stories

Ver [Seção 8](#8-storybook--formato-de-stories) para o formato completo.

---

## 4. Tipagem TypeScript

### Estendendo atributos HTML nativos

Sempre estenda o atributo HTML nativo do elemento raiz. Isso garante que o consumidor possa passar qualquer atributo HTML válido sem que você precise declará-lo explicitamente.

| Elemento raiz | Tipo a estender |
|---|---|
| `<button>` | `ButtonHTMLAttributes<HTMLButtonElement>` |
| `<input>` | `InputHTMLAttributes<HTMLInputElement>` |
| `<textarea>` | `TextareaHTMLAttributes<HTMLTextAreaElement>` |
| `<label>` | `LabelHTMLAttributes<HTMLLabelElement>` |
| `<div>`, `<span>`, `<p>` | `HTMLAttributes<HTMLDivElement>` (etc.) |
| `<a>` | `AnchorHTMLAttributes<HTMLAnchorElement>` |
| `<select>` | `SelectHTMLAttributes<HTMLSelectElement>` |

### Usando `Omit` para evitar conflitos

Quando uma prop customizada tem o mesmo nome de um atributo HTML nativo mas com tipo diferente, use `Omit` para remover o atributo nativo antes de redeclará-lo.

O caso mais comum é o atributo `size`, que nos elementos HTML é um `number`, mas na biblioteca é uma union de strings:

```ts
// ✗ Errado — cria conflito de tipos
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  size?: "sm" | "md" | "lg"; // conflita com size: number do HTML
}

// ✓ Correto — remove o size nativo antes de redeclarar
export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  size?: "sm" | "md" | "lg";
}
```

Outros casos onde `Omit` pode ser necessário: `color`, `width`, `height`, `wrap` (em textarea).

### Props obrigatórias vs. opcionais

- Props que têm um valor padrão razoável devem ser **opcionais** (`?`).
- Props sem valor padrão que são semanticamente necessárias para acessibilidade devem ser **obrigatórias** (ex: `id` no `Switch`, que é necessário para associar o `<label>` ao `<input>`).
- Evite `any`. Use `React.ReactNode` para conteúdo genérico e `React.ReactElement` quando precisar de um único elemento React (como o `children` do `FormField`).

### Tipos auxiliares

Declare tipos auxiliares (unions de variantes, tamanhos) como `type`, não como `interface`, e sempre os exporte:

```ts
// ✓
export type ButtonVariant = "primary" | "secondary" | "danger";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}
```

Isso permite que o consumidor importe e reutilize os tipos auxiliares em seu próprio código.

---

## 5. Sistema de tokens

### Princípio fundamental

**Nenhum valor visual pode ser hardcoded.** Cores, espaçamentos, tamanhos de fonte, raios de borda e sombras devem sempre vir de um token `--virtu-*`.

```css
/* ✗ Proibido */
color: #333333;
padding: 12px 16px;
font-size: 14px;
border-radius: 4px;

/* ✓ Correto */
color: var(--virtu-color-text);
padding: var(--virtu-spacing-sm) var(--virtu-spacing-md);
font-size: var(--virtu-font-size-md);
border-radius: var(--virtu-radius-sm);
```

As únicas exceções aceitáveis são valores estruturais sem semântica visual, como `border-radius: 999px` (círculo perfeito), `border-radius: 50%`, `opacity: 0` e `inset: 0`.

### Convenção de nomenclatura

Todos os tokens seguem o padrão:

```
--virtu-{categoria}-{nome}
```

| Categoria | Exemplos |
|---|---|
| `color` | `--virtu-color-primary`, `--virtu-color-danger`, `--virtu-color-text` |
| `spacing` | `--virtu-spacing-xs`, `--virtu-spacing-sm`, `--virtu-spacing-md`, `--virtu-spacing-lg` |
| `font-size` | `--virtu-font-size-xs`, `--virtu-font-size-sm`, `--virtu-font-size-md`, `--virtu-font-size-lg` |
| `font-weight` | `--virtu-font-weight-regular`, `--virtu-font-weight-medium`, `--virtu-font-weight-bold` |
| `radius` | `--virtu-radius-sm`, `--virtu-radius-md` |
| `line-height` | `--virtu-line-height-sm`, `--virtu-line-height-md` |

### Adicionando tokens para um novo componente

Se o componente precisar de valores que não existem nos tokens globais, adicione-os em `src/styles/tokens.css` antes de usá-los no CSS Module. Agrupe os tokens do novo componente com um comentário de seção:

```css
/* ─── Badge ───────────────────────────────────────────────────────────────── */
--virtu-color-success: #065f46;
--virtu-color-success-bg: #d1fae5;
--virtu-color-warning: #92400e;
--virtu-color-warning-bg: #fef3c7;
```

Nunca adicione tokens específicos de um componente sem antes verificar se um token global já resolve o problema.

### Variáveis CSS locais para variações internas

Quando um componente tem múltiplas variações que alteram vários valores ao mesmo tempo (como o `Switch` com `sm/md/lg`), use variáveis CSS locais (prefixadas com `--_`) para evitar repetição e manter o CSS legível:

```css
/* Define as variáveis locais por tamanho no container */
.sm {
  --_track-width: var(--virtu-switch-track-width-sm);
  --_thumb-size: var(--virtu-switch-thumb-size-sm);
  --_translate: var(--virtu-switch-translate-sm);
}

/* Usa as variáveis locais nos elementos filhos */
.switch {
  width: var(--_track-width, var(--virtu-switch-track-width-md));
}

.thumb {
  width: var(--_thumb-size, var(--virtu-switch-thumb-size-md));
}
```

O segundo argumento do `var()` é o fallback — use sempre o valor `md` como padrão.

---

## 6. Estilização com CSS Modules

### Estrutura e organização

Organize o CSS Module em seções com comentários delimitadores:

```css
/* ─── Base ────────────────────────────────────────────────────────────────── */

.componentName {
  /* estilos base */
}

/* ─── Variantes ───────────────────────────────────────────────────────────── */

.primary { ... }
.secondary { ... }

/* ─── Tamanhos ────────────────────────────────────────────────────────────── */

.sm { ... }
.md { ... }
.lg { ... }

/* ─── Estados ─────────────────────────────────────────────────────────────── */

.componentName:hover { ... }
.componentName:focus-visible { ... }
.componentName:disabled { ... }
```

### Composição de classes no componente

Use a função `cx()` para compor classes condicionalmente. A ordem importa: classes mais específicas devem vir depois das mais genéricas, e o `className` do consumidor sempre por último.

```tsx
className={cx(
  styles.button,      // 1. classe base
  styles[variant],    // 2. variante
  styles[size],       // 3. tamanho
  isLoading && styles.loading, // 4. estado condicional
  className,          // 5. override do consumidor (sempre por último)
)}
```

### Focus visível

Todo elemento interativo deve ter um estilo de foco visível. Use `:focus-visible` (não `:focus`) para não mostrar o anel de foco em cliques com mouse:

```css
.input:focus-visible {
  outline: 2px solid var(--virtu-color-primary);
  outline-offset: 2px;
}
```

### Transições

Prefira transições em propriedades específicas em vez de `transition: all`. Isso é mais performático e evita transições indesejadas:

```css
/* ✗ Evitar */
transition: all 0.2s ease;

/* ✓ Preferir */
transition:
  border-color 0.15s ease,
  background 0.15s ease,
  box-shadow 0.15s ease;
```

---

## 7. Acessibilidade

Acessibilidade não é opcional. Todo componente deve passar na auditoria do addon `@storybook/addon-a11y` antes de ser considerado pronto.

### Regras gerais

**Use HTML semântico.** O elemento HTML correto já carrega comportamento e semântica de acessibilidade nativamente. Prefira `<button>` a `<div onClick>`, `<label>` a `<span onClick>`, `<input type="checkbox">` a um componente custom do zero.

**Associe labels a controles.** Todo campo de formulário deve ter um `<label>` associado via `htmlFor` / `id`. O `FormField` faz isso automaticamente via `useId()` — use-o sempre que possível.

**Não remova o outline nativo sem substituí-lo.** Se você usar `outline: none`, adicione imediatamente um estilo de foco alternativo com `:focus-visible`.

### Atributos ARIA essenciais

| Situação | Atributo | Exemplo |
|---|---|---|
| Campo com erro | `aria-invalid` | `aria-invalid={!!error}` |
| Campo descrito por outro elemento | `aria-describedby` | `aria-describedby="field-error"` |
| Elemento em carregamento | `aria-busy` | `aria-busy={isLoading}` |
| Elemento decorativo (SVG, ícone) | `aria-hidden` | `aria-hidden="true"` |
| Toggle (switch) | `role="switch"` | `<input role="switch" />` |
| Elemento desabilitado (não-form) | `aria-disabled` | `aria-disabled={disabled}` |
| Mensagem de erro ao vivo | `role="alert"` | `<p role="alert">...</p>` |

### Padrões por tipo de componente

**Campos de formulário** (`Input`, `Textarea`, `Checkbox`, `Switch`):
- Sempre associados a um `<label>` (diretamente ou via `FormField`).
- Devem aceitar e propagar `aria-describedby` para mensagens de erro e descrições.
- Estados de erro sinalizados com `aria-invalid`.

**Botões e ações** (`Button`):
- Use `<button>` nativo — nunca `<div>` ou `<span>` clicáveis.
- O estado de carregamento deve ser comunicado com `aria-busy`.
- O botão deve ser desabilitado (`disabled`) durante o loading para evitar submissões duplas.

**Elementos decorativos** (ícones SVG, spinners, checkmarks):
- Sempre `aria-hidden="true"`. O texto ou label adjacente já comunica o significado.

**Mensagens de erro** (`ErrorMessage`):
- Usa `role="alert"` para que leitores de tela anunciem o erro automaticamente quando ele aparece.
- Deve ter um `id` para ser referenciado via `aria-describedby` no campo correspondente.

**Componentes compostos** (`FormField`):
- Usa `useId()` para gerar IDs únicos e estáveis, sem `Math.random()`.
- Propaga `id`, `aria-invalid` e `aria-describedby` para o filho via `cloneElement`.

### Navegação por teclado

Componentes interativos devem funcionar completamente com teclado:

- `Tab` / `Shift+Tab`: navegar entre controles.
- `Space` / `Enter`: ativar botões e checkboxes.
- `Space`: alternar switches.
- `Arrow keys`: navegar em grupos de opções (radio groups, menus).

Componentes que usam elementos HTML nativos (`<button>`, `<input>`, `<select>`) herdam esse comportamento automaticamente. Componentes custom precisam implementá-lo explicitamente.

---

## 8. Storybook — formato de stories

Cada componente deve ter um arquivo `*.stories.tsx` com a seguinte estrutura.

### Estrutura completa

```tsx
import type { Meta, StoryObj } from "@storybook/react";
import { NomeDoComponente } from "./NomeDoComponente";

// ─── Meta ──────────────────────────────────────────────────────────────────

const meta: Meta<typeof NomeDoComponente> = {
  title: "Components/NomeDoComponente",  // ou "Forms/NomeDoComponente"
  component: NomeDoComponente,
  tags: ["autodocs"],                     // gera documentação automática
  args: {
    // valores padrão para todos os controls
  },
  argTypes: {
    // configuração dos controls do Storybook
    variant: {
      control: "radio",
      options: ["primary", "secondary", "danger"],
    },
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
Descrição do componente em Markdown.

## Overview
...

## Import
\`\`\`tsx
import { NomeDoComponente } from 'virtu-ui';
\`\`\`

## Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| \`variant\` | \`'primary' \\| 'secondary'\` | \`'primary'\` | Visual style |
`,
      },
    },
  },
};

export default meta;

// ─── Stories ───────────────────────────────────────────────────────────────

type Story = StoryObj<typeof NomeDoComponente>;

export const Default: Story = {};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
```

### Convenções de título

| Categoria | Prefixo |
|---|---|
| Componentes visuais gerais | `Components/` |
| Componentes de formulário | `Forms/` |
| Documentação e fundações | `Foundation/` |

### Convenções de stories

- A story `Default` deve sempre existir e representar o estado mais comum do componente.
- Crie uma story para cada variante relevante (`Primary`, `Secondary`, `Danger`).
- Crie uma story para cada estado importante (`Disabled`, `Loading`, `WithError`, `Checked`).
- Use `render` quando precisar de contexto adicional (ex: `FormField` que envolve um `Input`).
- Não crie stories para combinações exaustivas — o Storybook Controls já permite isso interativamente.

### Documentação inline (JSDoc na tabela de props)

A tabela de props na documentação deve cobrir todas as props customizadas do componente. Props herdadas do HTML nativo não precisam ser documentadas.

---

## 9. Exports e tree-shaking

A biblioteca é configurada com `preserveModules: true` no Vite, o que significa que cada arquivo gera um módulo separado na `dist/`. Isso permite que bundlers como Webpack e Rollup façam tree-shaking granular — se o consumidor importar apenas `Button`, apenas o código do `Button` vai para o bundle final.

Para que isso funcione corretamente, siga estas regras:

### Barrel do componente: named exports explícitos

```ts
// ✓ Correto — exports explícitos
export { Badge } from "./Badge";
export type { BadgeProps, BadgeVariant } from "./Badge.types";

// ✗ Errado — export * pode incluir símbolos não intencionais
export * from "./Badge";
export * from "./Badge.types";
```

### Barrel global de componentes: `export *` é aceitável

```ts
// src/components/index.ts — OK usar export * aqui
// porque cada componente já controla seus exports
export * from "./Button";
export * from "./Badge";
```

### Nunca execute side effects no escopo do módulo

```ts
// ✗ Proibido — side effect no escopo do módulo
console.log("Badge loaded");
document.addEventListener("click", handler);

// ✓ Correto — side effects apenas dentro de funções/hooks
export const Badge = forwardRef(({ ... }, ref) => {
  useEffect(() => {
    // side effects aqui são seguros
  }, []);
});
```

O campo `"sideEffects": false` no `package.json` informa ao bundler que nenhum arquivo da biblioteca tem side effects, habilitando tree-shaking agressivo. Nunca altere esse campo para `true`.

### Exportando estilos

Os tokens CSS são distribuídos como um arquivo separado (`dist/virtu-ui.css`). O consumidor deve importá-lo uma vez no entry point da aplicação:

```tsx
// main.tsx ou App.tsx do projeto consumidor
import "virtu-ui/styles";
```

Não importe CSS diretamente nos componentes da biblioteca. Os CSS Modules são processados pelo Vite e injetados automaticamente no bundle.

---

## 10. Checklist de revisão

Antes de considerar um componente pronto para merge, verifique cada item:

### Estrutura

- [ ] Diretório criado em `src/components/NomeDoComponente/`
- [ ] Arquivos: `.tsx`, `.types.ts`, `.module.css`, `.stories.tsx`, `index.ts`
- [ ] Componente registrado em `src/components/index.ts`

### Implementação

- [ ] Usa `forwardRef` com o tipo correto do elemento HTML
- [ ] `displayName` definido explicitamente
- [ ] `className` do consumidor mesclado via `cx()` e aplicado por último
- [ ] Spread `{...props}` no elemento raiz
- [ ] Import de `cx` via `@/utils` (não `@/utils/cx`)
- [ ] Nenhum `any` no código

### Tipagem

- [ ] Interface `{Nome}Props` estende o atributo HTML nativo correto
- [ ] `Omit<>` usado quando há conflito com atributo nativo (ex: `size`)
- [ ] Tipos auxiliares exportados no `index.ts`
- [ ] Nenhuma prop sem tipo definido

### Tokens e estilos

- [ ] Nenhum valor hardcoded (cores, espaçamentos, fontes, raios)
- [ ] Todos os tokens usados existem em `tokens.css`
- [ ] Novos tokens adicionados com comentário de seção em `tokens.css`
- [ ] `:focus-visible` definido para elementos interativos
- [ ] Transições em propriedades específicas (não `all`)

### Acessibilidade

- [ ] HTML semântico (elemento correto para a função)
- [ ] Labels associados a controles de formulário
- [ ] `aria-invalid` em campos com erro
- [ ] `aria-hidden="true"` em elementos decorativos (SVGs, ícones)
- [ ] Navegação por teclado funcional
- [ ] Auditoria do addon-a11y no Storybook sem erros críticos

### Exports

- [ ] `index.ts` usa named exports explícitos (`export { X }`, não `export *`)
- [ ] Todos os tipos públicos exportados
- [ ] Nenhum side effect no escopo do módulo

### Storybook

- [ ] Story `Default` presente
- [ ] Stories para cada variante e estado relevante
- [ ] `tags: ["autodocs"]` presente no meta
- [ ] Tabela de props documentada no `parameters.docs`
- [ ] Título no formato correto (`Components/` ou `Forms/`)

---

*Este documento deve ser atualizado sempre que uma nova convenção for estabelecida ou uma decisão de arquitetura for tomada.*
