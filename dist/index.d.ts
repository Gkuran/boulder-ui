import { ButtonHTMLAttributes } from 'react';
import { ForwardRefExoticComponent } from 'react';
import { HTMLAttributes } from 'react';
import { InputHTMLAttributes } from 'react';
import { JSX } from 'react/jsx-runtime';
import { LabelHTMLAttributes } from 'react';
import { ReactElement } from 'react';
import { ReactNode } from 'react';
import { RefAttributes } from 'react';
import { TextareaHTMLAttributes } from 'react';

export declare const Accordion: ForwardRefExoticComponent<AccordionProps & RefAttributes<HTMLDivElement>>;

export declare const AccordionContent: ForwardRefExoticComponent<AccordionContentProps & RefAttributes<HTMLDivElement>>;

export declare interface AccordionContentProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
}

export declare const AccordionItem: ForwardRefExoticComponent<AccordionItemProps & RefAttributes<HTMLDivElement>>;

export declare interface AccordionItemProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * Whether this item is expanded by default (uncontrolled).
     * @default false
     */
    defaultOpen?: boolean;
    /**
     * Controlled open state. When provided, the component becomes controlled
     * and `onOpenChange` must also be supplied.
     */
    open?: boolean;
    /**
     * Callback fired when the item's open state changes.
     */
    onOpenChange?: (open: boolean) => void;
    /**
     * When `true`, the item cannot be toggled.
     * @default false
     */
    disabled?: boolean;
}

export declare interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * Visual style of the accordion.
     * - `default`: bordered container with rounded corners.
     * - `flush`: no outer border or radius; items are separated by dividers only.
     * @default "default"
     */
    variant?: AccordionVariant;
    /**
     * Fixed width of the accordion root.
     * Ensures the component maintains the same width whether open or closed.
     * - `sm`   — 280px. Suitable for sidebars or narrow panels.
     * - `md`   — 480px. Suitable for content areas and forms.
     * - `full` — 100% of the parent container.
     * @default "full"
     */
    width?: AccordionWidth;
}

export declare const AccordionTrigger: ForwardRefExoticComponent<AccordionTriggerProps & RefAttributes<HTMLButtonElement>>;

/**
 * `type` is intentionally omitted from ButtonHTMLAttributes — it is always
 * set to `"button"` internally to prevent accidental form submission.
 */
export declare interface AccordionTriggerProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
    children: ReactNode;
}

export declare type AccordionVariant = "default" | "flush";

/**
 * Controls the fixed width of the Accordion.
 * - `sm`   — 280px. Suitable for sidebars or narrow panels.
 * - `md`   — 480px. Suitable for content areas and forms.
 * - `full` — 100% of the parent container. Default behavior.
 */
declare type AccordionWidth = "sm" | "md" | "full";

export declare const Badge: ForwardRefExoticComponent<BadgeProps & RefAttributes<HTMLSpanElement>>;

export declare interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
    variant?: BadgeVariant;
}

export declare type BadgeVariant = "default" | "success" | "warning" | "danger";

export declare const Box: ForwardRefExoticComponent<BoxProps & RefAttributes<HTMLDivElement>>;

export declare interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Content to render inside the box */
    children?: ReactNode;
    /**
     * Visual variant of the box.
     *
     * - `glass` — Glassmorphism effect with gradient background, blur, and subtle border (default)
     * - `solid` — Solid dark surface without transparency
     * - `ghost` — Transparent with only a subtle border
     */
    variant?: "glass" | "solid" | "ghost";
    /**
     * Padding preset applied to the box.
     *
     * - `none` — No padding
     * - `sm` — Small padding
     * - `md` — Medium padding (default)
     * - `lg` — Large padding
     */
    padding?: "none" | "sm" | "md" | "lg";
    /**
     * Whether to render the box as a semantic `<section>` element.
     * Defaults to `false` (renders as `<div>`).
     */
    asSection?: boolean;
}

export declare const Button: ForwardRefExoticComponent<ButtonProps & RefAttributes<HTMLButtonElement>>;

export declare interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "danger";
    size?: "sm" | "md" | "lg";
    isLoading?: boolean;
}

export declare const Checkbox: ForwardRefExoticComponent<CheckboxProps & RefAttributes<HTMLInputElement>>;

export declare interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

export declare const ErrorMessage: ForwardRefExoticComponent<ErrorMessageProps & RefAttributes<HTMLParagraphElement>>;

export declare interface ErrorMessageProps extends HTMLAttributes<HTMLParagraphElement> {
    id?: string;
    children: React.ReactNode;
}

export declare function FormField({ label, description, error, id, children, }: FormFieldProps): JSX.Element;

export declare interface FormFieldProps {
    label?: string;
    description?: string;
    error?: string;
    /** ID do campo — gerado automaticamente via useId() se omitido */
    id?: string;
    children: ReactElement;
}

export declare const Input: ForwardRefExoticComponent<InputProps & RefAttributes<HTMLInputElement>>;

export declare interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
    error?: string;
    variant?: InputVariant;
    /** Tamanho visual do input. Substitui o atributo nativo `size` (number). */
    size?: InputSize;
}

export declare type InputSize = "sm" | "md" | "lg";

export declare type InputVariant = "outline" | "filled";

export declare const Label: ForwardRefExoticComponent<LabelProps & RefAttributes<HTMLLabelElement>>;

export declare interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
}

export declare const SideBar: ForwardRefExoticComponent<SideBarProps & RefAttributes<HTMLElement>>;

export declare const SideBarBadge: ForwardRefExoticComponent<SideBarBadgeProps & RefAttributes<HTMLSpanElement>>;

export declare interface SideBarBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    /** The numeric value displayed inside the badge. */
    count: number;
    /**
     * Maximum value before showing "max+".
     * @default 99
     */
    max?: number;
}

export declare function SideBarItem({ icon, label, active, badge, badgeMax, asButton, className, ...rest }: SideBarItemProps): JSX.Element;

export declare namespace SideBarItem {
    var displayName: string;
}

export declare interface SideBarItemProps extends React.HTMLAttributes<HTMLElement> {
    /** The icon to render. Accepts any ReactNode (SVG, img, icon component). */
    icon: ReactNode;
    /** Text label displayed below the icon. */
    label: string;
    /**
     * Whether this item is currently active/selected.
     * @default false
     */
    active?: boolean;
    /**
     * Optional badge count. When provided, a SideBarBadge is rendered
     * overlaying the icon with this number.
     */
    badge?: number;
    /**
     * Maximum badge value before showing "max+".
     * @default 99
     */
    badgeMax?: number;
    /**
     * Render as a `<button>` instead of `<a>`.
     * Useful when the item triggers an action rather than navigation.
     * @default false
     */
    asButton?: boolean;
    /** Navigation URL. Only used when rendering as `<a>` (default). */
    href?: string;
}

export declare interface SideBarProps extends React.HTMLAttributes<HTMLElement> {
    /**
     * Logo or brand element rendered at the top of the sidebar.
     * Accepts any ReactNode (img, SVG, icon component).
     */
    logo?: ReactNode;
    /**
     * Navigation items. Should be SideBarItem components.
     */
    children: ReactNode;
}

export declare const Switch: ForwardRefExoticComponent<SwitchProps & RefAttributes<HTMLInputElement>>;

export declare interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
    id: string;
    label?: string;
    size?: SwitchSize;
}

export declare type SwitchSize = "sm" | "md" | "lg";

export declare const Textarea: ForwardRefExoticComponent<TextareaProps & RefAttributes<HTMLTextAreaElement>>;

export declare interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    variant?: TextareaVariant;
    size?: TextareaSize;
}

export declare type TextareaSize = "sm" | "md" | "lg";

export declare type TextareaVariant = "outline" | "filled";

export { }
